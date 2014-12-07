'use strict';

var Compiler = require('traceur').NodeCompiler
  , xtend = require('xtend')
  ;

var traceurOptions = {
  modules      : 'commonjs',
  sourceMaps   : true
};

function buildTraceurOptions(overrides) {
  var options = xtend(traceurOptions, overrides);

  if (typeof options.sourceMap !== 'undefined') {
    console.warn('es6ify: DEPRECATED options.sourceMap has changed to options.sourceMaps (plural)');
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }

  if (options.sourceMaps === true) {
    options.sourceMaps = 'inline';
  }

  return options;
}

exports = module.exports = function compileFile(file, contents, traceurOverrides) {
  var options = buildTraceurOptions(traceurOverrides);
  try{
    var compiler = new Compiler(options);

    var result = compiler.compile(contents, file, file + '.es6');
  }catch(errors){
      return { source: null, error: errors[0] };
  }

  return {
      source: result,
      error: null
  };
};
