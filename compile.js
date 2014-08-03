'use strict';

var compile = require('traceur').compile
  , xtend = require('xtend')
  ;

var traceurOptions = {
  modules      : 'commonjs',
  sourceMaps   : true
};

exports = module.exports = function compileFile(file, contents, traceurOverrides) {
  var options = xtend(traceurOptions, traceurOverrides, { filename: file });
  if (typeof options.sourceMap !== 'undefined') {
    console.warn('es6ify: DEPRECATED options.sourceMap has changed to options.sourceMaps (plural)');
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }

  var result = compile(contents, options);

  if (result.errors.length) {
      return { source: null, sourcemap: null, error: result.errors[0] };
  }
  return {
      source: result.js,
      errors: result.errors,
      sourcemap: result.generatedSourceMap ? JSON.parse(result.generatedSourceMap) : null
  };
};
