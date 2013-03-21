'use strict';

var traceur            =  require('traceur/src/node/traceur')
  , convert            =  require('convert-source-map')
  , through            =  require('through')
  , SourceMapGenerator =  traceur.outputgeneration.SourceMapGenerator
  , TreeWriter         =  traceur.outputgeneration.TreeWriter
  , Parser             =  traceur.syntax.Parser
  , SourceFile         =  traceur.syntax.SourceFile
  ;

function parse(name, source, errorReporter) {
  var sourceFile =  new SourceFile(name, source);
  var parser     =  new Parser(errorReporter, sourceFile);
  return parser.parseProgram();
}

function compile(file, src, stderr) {
  stderr = stderr || process.stderr;
  var errorReporter = {
    reportError: function(position, message) {
      stderr.write('file: ' + file + ' --- ' + message + ', ' + position + '\n');
    }
  };

  var tree = parse(file, src, errorReporter);

  var generator = new SourceMapGenerator({ file: file });
  var options = { sourceMapGenerator: generator, showLineNumbers: false };

  var compiledSrc = TreeWriter.write(tree, options);
  var comment = convert
    .fromJSON(options.sourceMap)
    .setProperty('sourcesContent', [ compiledSrc ])
    .toComment();

  return compiledSrc + '\n';// + comment;
}

module.exports = function (filePattern) {
  filePattern = filePattern || /\.js/;
  return function (file) {
    if (!filePattern.test(file)) return through();
    
    var data = '';
    return through(write, end);
    
    function write (buf) { data += buf; }
    function end () {
        this.queue(compile(file, data));
        this.queue(null);
    }
  };
};

if (module.parent) return;

var fs = require('fs')
  , path = require('path')
  , srcdir = path.join(__dirname, './example/src/');

// var file = 'destructuring.js';
// var file = 'generators.js';
var file = 'block-scope.js';
var source= fs.readFileSync(srcdir + file, 'utf-8');

var compiled = compile(file, source);
console.log('=========================\nSOURCE:\n', source);
console.log('=========================\nCOMPILED:\n', compiled);
