'use strict';

var path       =  require('path')
  , fs         =  require('fs')
  , browserify =  require('browserify')
  , mold       =  require('mold-source-map')
  , es6ify =  require('..')
  , jsRoot     =  path.join(__dirname, 'public', 'js')
  , bundlePath =  path.join(jsRoot, 'bundle.js')
  ;

browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .on('error', function (err) { console.error(err); })
  .pipe(mold.transformSourcesRelativeTo(path.join(__dirname, '..')))
  .pipe(fs.createWriteStream(bundlePath));

console.log('Please open the index.html inside examples/public.');
