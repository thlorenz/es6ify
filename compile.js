'use strict';

var Compiler = require('traceur').NodeCompiler
  , xtend = require('xtend')
  ;

var traceurOptions = {
  modules      : 'commonjs',
  sourceMaps   : true
};

exports = module.exports = function compileFile(file, contents, traceurOverrides) {
  var options = xtend(traceurOptions, traceurOverrides);
  if (typeof options.sourceMap !== 'undefined') {
    console.warn('es6ify: DEPRECATED options.sourceMap has changed to options.sourceMaps (plural)');
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }
  try{
    var compiler = new Compiler(options);

    var result = compiler.compile(contents, file);
    var sourceMap = compiler.getSourceMap();
  }catch(errors){
      return { source: null, sourcemap: null, error: errors[0] };
  }

  return {
      source: result,
      error: null,
      sourcemap: sourceMap ? JSON.parse(sourceMap) : null
  };
};
