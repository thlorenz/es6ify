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
  , runtimeSrc  =  require('fs').readFileSync(runtime).toString()
  , runtimeOfst =  runtimeSrc.toString().split(/\n/g).length
  , runtimeTgt  =  null
  , cache       =  {}
  , traceurOverrides =  {};

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
 * @param {boolean} prependRuntime whether to prepend the runtime
 * @return {string} compiled source
 */
function compileFile(file, src, opts, prependRuntime) {
  var compiled;
  compiled = compile(file, src, extend(opts, traceurOverrides));
  if (compiled.error) throw new Error(compiled.error);

  var comment
    , output
    , offset = 0
    , consumer = new SMConsumer(compiled.sourcemap)
    , generator = new SMGenerator({file: file + '.es6'});

  generator.setSourceContent(file, src);
  if (prependRuntime) offset = runtimeOfst;

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
          , line: mapping.generatedLine + offset
          }
        , source: file
        , name: mapping.name
        }
      );
    }
  });

  comment = new Buffer(generator.toString()).toString('base64');
  output  = compiled.source + '\n//@ sourceMappingURL=data:application/json;base64,' + comment;
  if (prependRuntime) output = runtimeSrc.toString() + output;

  return output;
}

/**
 * If executed with a string parameter it will return a stream of
 * the transformed file.
 *
 * If executed with an object parameter it returns a function that
 * when executed returns a browserify tranform function.
 *
 * @param {Object|string} file the tranformation options or a file path
 * @returns {Stream|function(string, Object): Stream} a stream or a function depending on the given parameter
 */
function es6ify(file) {
  if (typeof file === 'object') {
    // Parameter is an options object
    var options = file;
    return function (iFile) {
      return es6ifyStream(iFile, options);
    };
  }

  // Parameter is a file path so delegate
  return es6ifyStream(file);
}

function es6ifyStream(file, options) {
  var opts = extend({ addTraceurRuntime: true, filePattern: /\.js$/ }, options)
    , data = '';

  // Don't es6ify the traceur runtime
  if (file === runtime) return through();
  if (!opts.filePattern.test(file)) return through();
  // Cache the first file, which will contain the traceur runtime
  if (opts.addTraceurRuntime && !runtimeTgt) runtimeTgt = file;

  return through(write, end);

  function write (buf) {
    data += buf;
  }

  function end () {
    var hash = getHash(data)
      , cached = cache[file];

    if (!cached || cached.hash !== hash) {
      try {
        cache[file] = {
          compiled: compileFile(file, data, opts.traceurOverrides, file === runtimeTgt),
          hash: hash
        };
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
exports.configure = function es6ifyConfigure(filePattern) {
  // TODO: Improve deprecation message
  console.warn('DEPRECATED es6ifyConfigure: Use the filePattern property in the es6ify options.');
  return es6ify({ filePattern: filePattern });
};

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
exports.__defineGetter__('runtime', function () {
  // TODO: Improve deprecation message
  console.warn('DEPRECATED runtime: Use the addTraceurRuntime property in the es6ify options.');
  return runtime;
});


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
exports.__defineSetter__('traceurOverrides', function (value) {
  // TODO: Improve deprecation message
  console.warn('DEPRECATED traceurOverrides: Use the traceurOverrides property in the es6ify options.');
  traceurOverrides = value;
});
exports.__defineGetter__('traceurOverrides', function () {
  return traceurOverrides;
});
