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

    var outFile =
      opts.basedir !== undefined ?
      path.relative(opts.basedir, file) :
      file;

    // opts.basedir is passed here as the `sourceRoot` param, which traceur
    // totally misappropriates. See
    // https://github.com/google/traceur-compiler/issues/1676
    // It's ok for here for now because it gets the
    // correct path populated in `sources` and browserify overwrites sourceRoot.
    // This should be revisited to see if a relative path should be passed in
    // `file` and what `sourceRoot` value, if any, should be passed.
    var result = compiler.compile(contents, file, outFile, opts.basedir);
  }catch(errors){
      return { source: null, error: errors[0] };
  }

  return {
      source: result,
      error: null
  };
};
