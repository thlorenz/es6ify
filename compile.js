'use strict';

var traceur = require('traceur')
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

  var compiler = new traceur.NodeCompiler(traceur.commonJSOptions(options));

  try {
    var result = compiler.compile(contents, file);
    var generatedSourceMap = compiler.getSourceMap();
    return {
        source: result,
        error: null,
        sourcemap: generatedSourceMap ? JSON.parse(generatedSourceMap) : null
    };

  } catch (e) {
    return { source: null, sourcemap: null, error: e[0] };
  }
};
