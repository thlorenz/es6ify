'use strict';

var compiler =  require('traceur/src/node/compiler')
  , compile  =  compiler.compileToSingleFile
  , path     =  require('path')
  , fs       =  require('fs')
  , srcRoot  =  path.join(__dirname, '..', 'example', 'src')
  , jsRoot   =  path.join(__dirname, '..', 'example', 'public', 'js')
  , outfile  =  path.join(__dirname, 'output', 'node-compiled.js')
  ;

var compiled = compile(outfile, [ path.join(srcRoot, 'function-call.js') ], true);
fs.createReadStream(outfile).pipe(process.stdout);
