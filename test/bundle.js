'use strict';
/*jshint asi: true */

var test       =  require('tap').test;
var browserify =  require('browserify');
var vm         =  require('vm');
var es6ify     =  require('..');
var format     =  require('util').format;

[ [ 'run-destructuring'     , [ 'hello, world' ] ]
, [ 'run-block-scope'       , [ 'tmp is undefined:  true' ] ]
, [ 'run-classes'       , [ 'An instance of Foo says hi from its .toString()!' ] ]
, [ 'run-default-parameters', [ 'name: Bruno, codes: JavaScript, lives in: USA' ] ]
, [ 'run-rest-parameters'   , ['list fruits has the following items', 'apple', 'banana' ] ]
, [ 'run-spread-operator'       , [ '3 + 4 = 7' ] ]
, [ 'run-combined', [
      'hello, world'
    , 'tmp is undefined:  true'
    , 'An instance of Foo says hi from its .toString()!'
    , 'name: Bruno, codes: JavaScript, lives in: USA'
    , 'list fruits has the following items', 'apple', 'banana' 
    , '3 + 4 = 7'
    ] 
  ] 
].forEach(function (row) {

  var filename     =  row[0];
  var expectedLogs =  row[1];

  test('\nbundle with runtime - ' + filename, function (t) {
    t.plan(expectedLogs.length)
      
    browserify()
      .add(es6ify.runtime)
      .transform(es6ify)
      .require(__dirname + '/bundle/' + filename + '.js', { entry: true })
      .bundle(function (err, src) {
        if (err) t.fail(err);
        src = 'window=this;'+src;
        vm.runInNewContext(src, {
            window: {}, 
            console: { log: log }
        });
        t.end()
      });
    
    function log () {
      var args = [].slice.call(arguments);
      var output = format.apply(null, args);

      t.equal(output, expectedLogs.shift());
    }
  })
})
