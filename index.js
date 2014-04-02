'use strict';

var SM          = require('source-map')
  , SMConsumer  = SM.SourceMapConsumer
  , SMGenerator = SM.SourceMapGenerator
  , through     =  require('through')
  , compile     =  require('./compile')
  , crypto      =  require('crypto')
  , path        =  require('path')
  , extend      =  require('xtend')
  , runtime     =  require.resolve(require('traceur').RUNTIME_PATH)
  , cache       =  {};

function getHash(data) {
  return crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
}

/**
 * Compile function, exposed to be used from other libraries, not needed when using es6ify as a transform.
 * 
 * @name es6ify::compileFile
 * @function
 * @param {string} file name of the file that is being compiled to ES5
 * @param {string} src source of the file being compiled to ES5
 * @param {Object} opts the compile options
 * @return {string} compiled source
 */
function compileFile(file, src, opts) {
  var compiled;
  compiled = compile(file, src, extend(opts, exports.traceurOverrides));
  if (compiled.error) throw new Error(compiled.error);

  var comment
    , consumer = new SMConsumer(compiled.sourcemap)
    , generator = new SMGenerator({file: file + '.es6'});

  generator.setSourceContent(file, src);

  consumer.eachMapping(function (mapping) {
    // Ignore mappings that are not from our source file
    if(mapping.source && file === mapping.source) {
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

/**
 * Returns a function that when executed returns a browserify transform function.
 * @param {RegExp} filePattern the file pattern regular expression
 * @returns {function(string, Object): Stream}
 */
function es6ifyConfigure(filePattern) {
  filePattern = filePattern || /\.js$/;
  return es6ify({ filePattern: filePattern });
}

/**
 * If executed with a string parameter it will return a stream of 
 * the transformed file.
 * If executed with an object parameter it returns a function that
 * when executed returns a browserify tranform function.
 * @param {Object|string} file the tranformation options or a file path
 * @returns {Stream|function(string, Object): Stream} a stream or a function depending on the given parameter
 */
function es6ify(file) {
  if (typeof file === 'object') {
    var options = file;
    return function (iFile) {
      return es6ifyStream(iFile, options);
    };
  }

  return es6ifyStream(file);
}

function es6ifyStream(file, options) {
  var opts = options || {}
    , filePattern = opts.filePattern || /\.js$/
    , data = '';

  // Don't es6ify the traceur runtime
  if (file === runtime) return through();
  if (!filePattern.test(file)) return through();

  return through(write, end);

  function write (buf) {
    data += buf;
  }

  function end () {
    var hash = getHash(data)
      , cached = cache[file];

    if (!cached || cached.hash !== hash) {
      try {
        cache[file] = { compiled: compileFile(file, data, opts), hash: hash };
      } catch (ex) {
        this.emit('error', ex);
        return this.queue(null);
      }
    }

    this.queue(cache[file].compiled);
    this.queue(null);
  }
};


/**
 * The es6ify transform to be used with browserify.
 *
 * #### Example
 *
 * `browserify().transform(es6ify)`
 * 
 * @name es6ify
 * @function
 * @return {function} function that returns a `TransformStream` when called with a `file`
 */
exports = module.exports = es6ify;

/**
 * Configurable es6ify transform function that allows specifying the `filePattern` of files to be compiled.
 * 
 * @name es6ify::configure
 * @function
 * @param {string=} filePattern (default: `/\.js$/) pattern of files that will be es6ified
 * @return {function} function that returns a `TransformStream` when called with a `file`
 */
exports.configure = es6ifyConfigure;

/**
 * The traceur runtime exposed here so it can be included in the bundle via:
 *
 * `browserify.add(es6ify.runtime)`
 *
 * ### Note
 *
 * The runtime is quite large and not needed for all ES6 features and therefore not added to the bundle by default.
 * 
 * @name e6ify::runtime
 */
exports.runtime = runtime;


exports.compileFile = compileFile;

/**
 * Allows to override traceur compiler defaults.
 * 
 * ### Example
 * 
 * In order to support block scope (`let`) do:
 *
 * `es6ify.traceurOverrides = { blockBinding: true }`
 * 
 * @name  es6ify::traceurOverrides
 */
exports.traceurOverrides = {};
