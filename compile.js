'use strict';

var compile = require('traceur').compile
  , xtend = require('xtend')
  ;

var traceurOptions = { 
  modules      : 'commonjs',
  sourceMap    : true
}

exports = module.exports = function compileFile(file, contents, traceurOverrides) {
  var options = xtend(traceurOptions, traceurOverrides, { filename: file });
  var result = compile(contents, options);

  if (result.errors.length) {
      return { source: null, sourcemap: null, error: result.errors[0] };
  }
  return {
      source: result.js,
      errors: result.errors,
      sourcemap: result.sourceMap ? JSON.parse(result.sourceMap) : null
  };
};
