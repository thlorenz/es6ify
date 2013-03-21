'use strict';
var traceur = require('traceur/src/node/traceur');
var convert = require('convert-source-map');

var SourceMapGenerator = traceur.outputgeneration.SourceMapGenerator;
var TreeWriter = traceur.outputgeneration.TreeWriter;

function parse(name, source, errorReporter) {
  var sourceFile = new traceur.syntax.SourceFile(name, source);
  var parser = new traceur.syntax.Parser(errorReporter, sourceFile);
  return parser.parseProgram();
}

function compile(filename, src, stderr) {
  stderr = stderr || process.stderr;
  var errorReporter = {
    reportError: function(position, message) {
      stderr.write('file: ' + filename + ' --- ' + message + ', ' + position + '\n');
    }
  };

  var tree = parse(filename, src);

  var generator = new SourceMapGenerator({ file: filename });
  var options = { sourceMapGenerator: generator, showLineNumbers: false };

  var compiledSrc = TreeWriter.write(tree, options);
  var comment = convert
    .fromJSON(options.sourceMap)
    .setProperty('sourcesContent', compiledSrc)
    .toComment();

  return compiledSrc + '\n' + comment;
}


var src = 'function foo() { return 5; }\nvar \nf\n=\n5\n;\n';
var filename = 'sourceMapThis.js';
compile(src, filename);
