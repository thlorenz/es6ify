var traceur       =  require('traceur/src/node/traceur');
var ProjectWriter =  traceur.outputgeneration.ProjectWriter;
var project       =  new traceur.semantics.symbols.Project(url);

var url = 'http://some url';

var sourceA = 'var a = [...[0, 1]];';
var fileA = new traceur.syntax.SourceFile('a', sourceA);
project.addFile(fileA);

var sourceB = 'var b = [...a, 2];';
var fileB = new traceur.syntax.SourceFile('b', sourceB);
project.addFile(fileB);

var reporter = new traceur.util.ErrorReporter();

var res = traceur.codegeneration.Compiler.compile(reporter, project, false);

var actualResult = ProjectWriter.write(res);

console.log(actualResult);
