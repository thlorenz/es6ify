'use strict';
/*jshint asi: true */

var test       =  require('tap').test;
var browserify =  require('browserify');
var vm         =  require('vm');
var traceurify =  require('..');

[ [ 'run-destructuring' ,   [ 'hello, world' ] ]
, [ 'run-block-scope'   ,   [ 'tmp is undefined: ' ] ]
].forEach(function (row) {

  var filename     =  row[0];
  var expectedLogs =  row[1];

  test('bundle without runtime - destructuring', function (t) {
    t.plan(expectedLogs.length)
      
    browserify()
      .transform(traceurify())
      .require(__dirname + '/bundle/' + filename + '.js', { entry: true })
      .bundle(function (err, src) {
        if (err) t.fail(err);
        vm.runInNewContext(src, {
            window: {}, 
            console: { log: log }
        });
        t.end()
      });
    
    function log (msg) {
      t.equal(msg, expectedLogs.shift());
    }
  })
})
