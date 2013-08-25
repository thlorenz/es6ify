'use strict';

var convert =  require('convert-source-map')
  , through =  require('through')
  , compile =  require('./compile')
  , crypto  =  require('crypto')
  , cache   =  {};

function getHash(data) {
  return crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
}

function handleError(compiled, stderr) {
  stderr.write(compiled.error);
  return 'console.log("Compile Error: ' + compiled.error + '");';
}

function compileFile(file, src, stderr) {
  var compiled;
  try {
    compiled = compile(file, src);
  } catch (err) {
    return handleError({ error: err.message }, stderr);
  }

  if (compiled.error) return handleError(compiled, stderr);
  var comment = convert
    .fromJSON(compiled.sourcemap)
    // override sources that traceur adds i.e. in cases that require the runtime like generators it adds genratorWrap@runtime
    // it also doesn't include the path in the source
    .setProperty('sources', [ file ])
    .setProperty('sourcesContent', [ src ])
    .toComment();

  return compiled.source + '\n' + comment;
}

function es6ify(filePattern, stderr) {
  filePattern =  filePattern || /\.js/;
  stderr      =  stderr      || process.stderr;

  return function (file) {
    if (!filePattern.test(file)) return through();

    var data = '';
    return through(write, end);

    function write (buf) { data += buf; }
    function end () {
      var hash = getHash(data)
        , cached = cache[file];

      if (!cached || cached.hash !== hash) {
        cache[file] = { compiled: compileFile(file, data, stderr), hash: hash };
      }

      this.queue(cache[file].compiled);
      this.queue(null);
    }
  };
}

module.exports           =  es6ify();
module.exports.configure =  es6ify;
module.exports.runtime   =  require.resolve('traceur/src/runtime/runtime.js');
module.exports.compileFile = compileFile;
