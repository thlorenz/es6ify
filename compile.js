'use strict';
var fs                     = require('fs'),
    path                   = require('path'),
    traceur                = require('traceur'),
    format                 = require('util').format,
    FromOptionsTransformer = traceur.codegeneration.FromOptionsTransformer,
    Parser                 = traceur.syntax.Parser,
    SourceFile             = traceur.syntax.SourceFile,
    TreeWriter             = traceur.outputgeneration.TreeWriter,
    SourceMapGenerator     = traceur.outputgeneration.SourceMapGenerator;

traceur.options.modules = 'commonjs';

module.exports = function compileFile(file, contents) {
  var err,
      reporter = {
    reportError : function(pos, msg) {
      err = err || '';
      err += format('%s:%s:%s %s\n', file, pos.line + 1, pos.offset, msg);
    },
    hadError : function () { return !!err; }
  };

  var sourceFile  = new SourceFile(file, contents),
      parser      = new Parser(reporter, sourceFile),
      tree        = parser.parseModule(),
      transformer = new FromOptionsTransformer(reporter),
      transformed = transformer.transform(tree),
      options     = {},
      compiled    = '';

  if (reporter.hadError()) {
    return { source: null, sourcemap: null, error: err };
  } else {
    var sourceMapGenerator = new SourceMapGenerator({
      file: file + '.es6'
    });
    options = { sourceMapGenerator: sourceMapGenerator };
    compiled = TreeWriter.write(transformed, options);
  }

  return { source: compiled, sourcemap: options.sourceMap, error: null };
}
