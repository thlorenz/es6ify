'use strict';

var traceur            =  require('traceur')
  , compile            =  traceur.codegeneration.Compiler.compile
  , SourceMapGenerator =  traceur.outputgeneration.SourceMapGenerator
  , Project            =  traceur.semantics.symbols.Project
  , ProjectWriter      =  traceur.outputgeneration.ProjectWriter
  , SourceFile         =  traceur.syntax.SourceFile
  , format             =  require('util').format
  , path               =  require('path')
  ;

+function initGlobalTraceurOptions() {
  [ 'arrayComprehension'
  , 'arrowFunctions'
  , 'classes'
  , 'defaultParameters'
  , 'destructuring'
  , 'forOf'
  , 'propertyMethods'
  , 'propertyNameShorthand'
  , 'templateLiterals'
  , 'restParameters'
  , 'spread'
  , 'generatorComprehension'
  , 'generators'
  , 'deferredFunctions'
  , 'blockBinding'
  , 'sourceMaps'
  ].forEach(function (k) { traceur.options[k] = true; });
}();

module.exports = function compileFile(file, contents) {

  var name       =  path.basename(file)
    , project    =  new Project(file)
    , sourceFile =  new SourceFile(name, contents)
    , err
    ;

  var reporter = {
    reportError : function(pos, msg) {
      err = format('%s:%s:%s %s', file, pos.line + 1, pos.offset, msg);
    },
    hadError : function () { return !!err; }
  };

  project.addFile(sourceFile);

  var compiled = compile(reporter, project, false);

  if (err) return { source: null, sourcemap: null, error: err };

  var options;

  if (traceur.options.sourceMaps) {
    var config = { file: file + '.es6' };
    var sourceMapGenerator = new SourceMapGenerator(config);
    options = { sourceMapGenerator: sourceMapGenerator };
  }

  var source = ProjectWriter.write(compiled, options);
  return { source: source, sourcemap: options.sourceMap, error: null };
};
