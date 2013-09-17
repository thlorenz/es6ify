'use strict';
/*jshint asi: true */

var test       =  require('tap').test
  , fs         =  require('fs')
  , path       =  require('path')
  , through    =  require('through')
  , convert    =  require('convert-source-map')
  , compile    =  require('../compile')
  , proxyquire =  require('proxyquire')

test('transform adds sourcemap comment and uses cache on second time', function (t) {

    t.plan(3);
    var data = '';
    var compiles = 0;

    function trackingCompile() {
      compiles++;
      var args = [].slice.call(arguments);
      return compile.apply(this, args);
    }

    var es6ify = proxyquire('..', { './compile' : trackingCompile } )

    var file = path.join(__dirname, '../example/src/features/iterators.js');

    // first time
    fs.createReadStream(file)
        .pipe(es6ify(file))
        .pipe(through(write));

    // second time
    fs.createReadStream(file)
        .pipe(es6ify(file))
        .pipe(through(write, end));

    function write (buf) { data += buf; }
    function end () {
      var sourceMap = convert.fromSource(data).toObject();
      t.deepEqual(
          sourceMap
        , { version: 3,
            file: file + '.es6',
            sources: [ file ],
            names: [],
            mappings: sourceMap.mappings,
            sourcesContent: [ 'module.exports = function () {\n  for (let element of [1, 2, 3]) {\n    console.log(\'element:\', element);\n  }\n};\n' ] }
        , 'adds sourcemap comment including original source'
      );
      t.ok(sourceMap.mappings.length);
      t.equal(compiles, 1, 'compiles only the first time');
    }
});
