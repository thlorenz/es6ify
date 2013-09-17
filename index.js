'use strict';

var SM          = require('source-map')
  , SMConsumer  = SM.SourceMapConsumer
  , SMGenerator = SM.SourceMapGenerator
  , through     =  require('through')
  , compile     =  require('./compile')
  , crypto      =  require('crypto')
  , path        =  require('path')
  , cache       =  {};

function getHash(data) {
  return crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
}

function compileFile(file, src) {
  var compiled;
  compiled = compile(file, src);
  if (compiled.error) throw new Error(compiled.error);

  var comment
    , consumer = new SMConsumer(compiled.sourcemap)
    , generator = new SMGenerator({file: file + '.es6'});

  generator.setSourceContent(file, src);

  consumer.eachMapping(function (mapping) {
    // Ignore mappings that are not from our source file
    if(mapping.source && path.basename(file) === mapping.source) {
      generator.addMapping(
        {
          original: {
            column: mapping.originalColumn
          , line: mapping.originalLine
          }
        , generated: {
            column: mapping.generatedColumn
          , line: mapping.generatedLine
          }
        , source: file
        , name: mapping.name
        }
      );
    }
  });

  comment = new Buffer(generator.toString()).toString('base64');

  return compiled.source + '\n//@ sourceMappingURL=data:application/json;base64,' + comment;
}

function es6ify(filePattern) {
  filePattern =  filePattern || /\.js/;

  return function (file) {
    if (!filePattern.test(file)) return through();

    var data = '';
    return through(write, end);

    function write (buf) { data += buf; }
    function end () {
      var hash = getHash(data)
        , cached = cache[file];

      if (!cached || cached.hash !== hash) {
        try {
          cache[file] = { compiled: compileFile(file, data), hash: hash };
        } catch (ex) {
          this.emit('error', ex);
          return this.queue(null);
        }
      }

      this.queue(cache[file].compiled);
      this.queue(null);
    }
  };
}

module.exports             =  es6ify();
module.exports.configure   =  es6ify;
module.exports.runtime     =  require.resolve('traceur/src/runtime/runtime.js');
module.exports.compileFile =  compileFile;
