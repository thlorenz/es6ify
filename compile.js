'use strict';

var path = require('path');

var Compiler = require('traceur').NodeCompiler
  , xtend = require('xtend')
  ;

var traceurOptions = {
  modules      : 'commonjs',
  sourceMaps   : 'inline'
};

function buildTraceurOptions(overrides) {
  var options = xtend(traceurOptions, overrides);

  if (typeof options.sourceMap !== 'undefined') {
    console.warn('es6ify: DEPRECATED traceurOverrides.sourceMap has changed to traceurOverrides.sourceMaps (plural)');
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }

  if (options.sourceMaps === true) {
    console.warn('es6ify: DEPRECATED "traceurOverrides.sourceMaps = true" is not a valid option, traceur sourceMaps options are [false|inline|file]');
    options.sourceMaps = 'inline';
  }

  return options;
}

exports = module.exports = function compileFile(file, contents, opts) {
  try{
    var compiler = new Compiler(buildTraceurOptions(opts.traceurOverrides));

    var outFile = opts.sourceRoot ? path.relative(opts.sourceRoot, file) : file;

    var result = compiler.compile(contents, file, outFile, opts.sourceRoot);
  }catch(errors){
      return { source: null, error: errors[0] };
  }

  return {
      source: result,
      error: null
  };
};
