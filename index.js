'use strict';

var SM            = require('source-map')
  , SMConsumer    = SM.SourceMapConsumer
  , SMGenerator   = SM.SourceMapGenerator
  , through       = require('through2')
  , compile       = require('./compile')
  , crypto        = require('crypto')
  , path          = require('path')
  , runtime       = require.resolve(require('traceur').RUNTIME_PATH)
  , resolveConfig = require('./resolve-config')
  , cache         = {}

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

  var comment
    , consumer = new SMConsumer(compiled.sourcemap)
    , generator = new SMGenerator({file: file + '.es6'});

  generator.setSourceContent(file, src);

  consumer.eachMapping(function (mapping) {
    mapping.source = path.normalize(mapping.source);
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

function es6ify(filePattern) {
  var resolvedFilePattern = filePattern;

  return function es6ifyTransform(file) {

    // Don't es6ify the traceur runtime
    if (file === runtime) return through();
    if (resolvedFilePattern && !resolvedFilePattern.test(file)) return through();

    var bufs = [];
    var stream = through(write, end);
    return stream;

    function write (buf, _, cb) {
      bufs.push(buf);
      cb();
    }

    function end (cb) {
      var self = stream;
      resolveConfig(file, onpkgConfig);

      function onpkgConfig(err, conf) {
        if (err) return self.emit('error', err);

        var includeRuntime = conf.includeRuntime;
        if (conf.filePattern) resolvedFilePattern = new RegExp(conf.filePattern);
        else resolvedFilePattern = /\.js$/;

        var data = Buffer.concat(bufs).toString()
          , hash = getHash(data)
          , cached = cache[file];

        // This should only be true for the very first file since for the ones
        // following this one we are doing this check before aggregating the stream data
        if (!resolvedFilePattern.test(file)) {
          self.push(data);
          return cb();
        }

        if (!cached || cached.hash !== hash) {
          // Include traceur runtime automatically if so desired by the user
          if (conf.includeRuntime) data = 'require(\'' + runtime + '\');\n' + data;
          try {
            cache[file] = { compiled: compileFile(file, data), hash: hash };
          } catch (ex) {
            return cb(ex);
          }
        }

        self.push(cache[file].compiled);
        cb();
      }
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
