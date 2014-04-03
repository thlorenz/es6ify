'use strict';

var path       = require('path')
  , fs         = require('fs')
  , browserify = require('browserify')
  , es6ify     = require('..')
  , jsRoot     = path.join(__dirname, 'public', 'js')
  , bundlePath = path.join(jsRoot, 'bundle.js')
  ;

browserify('./src/main.js')
  .transform(es6ify({ // Idea: pass options directly to the es6ify function
    addTraceurRuntime: true, // Idea: Include traceur runtime by default, but allow to exclude
    traceurOptions: { blockBinding: true } // Idea: Rename traceurOverrides to traceurOptions
  }))
  .bundle({ debug: true })
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundlePath));

console.log('Please open the index.html inside example/public.');
