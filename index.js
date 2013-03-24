'use strict';

var convert =  require('convert-source-map')
  , through =  require('through')
  , compile =  require('./compile')
  ;

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
        this.queue(compileFile(file, data, stderr));
        this.queue(null);
    }
  };
}

module.exports = es6ify();
module.exports.transform = es6ify;
module.exports.runtime = require('node-traceur').runtimePath;
if (module.parent) return;

