'use strict';

var through     =  require('through')
  , compile     =  require('./compile')
  , crypto      =  require('crypto')
  , path        =  require('path')
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
 * @return {string} compiled source
 */
function compileFile(file, src) {
  var compiled;
  compiled = compile(file, src, exports.traceurOverrides);
  if (compiled.error) throw new Error(compiled.error);
  if (!compiled.sourcemap) return compiled.source;

  return compiled.source;
}

function es6ify(filePattern) {
  filePattern =  filePattern || /\.js$/;

  return function (file) {

    // Don't es6ify the traceur runtime
    if (file === runtime) return through();

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
exports = module.exports = es6ify();

/**
 * Configurable es6ify transform function that allows specifying the `filePattern` of files to be compiled.
 *
 * @name es6ify::configure
 * @function
 * @param {string=} filePattern (default: `/\.js$/) pattern of files that will be es6ified
 * @return {function} function that returns a `TransformStream` when called with a `file`
 */
exports.configure = es6ify;

/**
 * The traceur runtime exposed here so it can be included in the bundle via:
 *
 * `browserify.add(es6ify.runtime)`
 *
 * ### Note
 *
 * The runtime is quite large and not needed for all ES6 features and therefore not added to the bundle by default.
 * See [this comment](https://github.com/google/traceur-compiler/issues/1007#issuecomment-42837067) for details.
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
 * In order to support async functions (`async`/`await`) do:
 *
 * `es6ify.traceurOverrides = { asyncFunctions: true }`
 *
 * @name  es6ify::traceurOverrides
 */
exports.traceurOverrides = {};
