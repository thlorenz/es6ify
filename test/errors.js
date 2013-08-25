'use strict';
/*jshint asi: true */

var test       =  require('tap').test;
var browserify =  require('browserify');
var es6ify     =  require('..');
var path       =  require('path');

test('\nsyntax error', function (t) {
  t.plan(1);

  browserify()
    .transform(es6ify)
    .require(__dirname + '/bundle/syntax-error.js', { entry: true })
    .bundle(function (err, src) {
      t.equal(err.message, path.resolve(__dirname + '/bundle/syntax-error.js') + ':1:13 \'}\' expected');
      t.end();
    });
});
