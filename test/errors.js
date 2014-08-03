'use strict';
/*jshint asi: true */

var test       =  require('tap').test;
var browserify =  require('browserify');
var es6ify     =  require('..');
var path       =  require('path');

test('\nsyntax error', function (t) {
  browserify()
    .transform(es6ify)
    .require(__dirname + '/bundle/syntax-error.js', { entry: true })
    .bundle(function (err, src) {
      t.equal(err.message, path.resolve(__dirname + '/bundle/syntax-error.js') + ':1:10: Unexpected token (');
      t.end();
    });
})

test('\ncompiling block-scope without blockBinding override', function (t) {
  browserify()
    .transform(es6ify)
    .require(__dirname + '/../example/src/features/block-scope.js', { entry: true })
    .bundle(function (err, src) {
      t.similar(err.message, /Unexpected token let/, 'returns error indicating that let is not supported')
      t.end();
    });
});
