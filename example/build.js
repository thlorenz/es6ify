'use strict';

var path       =  require('path')
  , fs         =  require('fs')
  , browserify =  require('browserify')
  , mold       =  require('mold-source-map')
  , traceurify =  require('..')
  , srcRoot    =  path.join(__dirname, 'src')
  , jsRoot     =  path.join(__dirname, 'public', 'js')
  , bundlePath =  path.join(jsRoot, 'bundle.js')
  ;

browserify()
  .require(require.resolve('./src/destructuring.js'), { entry: true })
  .transform(traceurify())
  .bundle({ debug: true })
  .on('error', function (err) { console.error(err); })
  .pipe(mold.transformSourcesRelativeTo(srcRoot))
  .pipe(fs.createWriteStream(bundlePath));

console.log('Please open the index.html inside examples/project.');
