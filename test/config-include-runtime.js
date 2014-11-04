'use strict';
/*jshint asi: true */

var test       = require('tap').test;
var browserify = require('browserify');
var es6ify     = require('..');
var path       = require('path');
var vm         = require('vm');

test('\nwhen including runtime via package.json and transpiling a script that needs it inside that package', function (t) {
  t.plan(1)
  browserify()
    .transform(es6ify)
    .require(__dirname + '/config-include-runtime/main.js', { entry: true })
    .bundle(function (err, src) {
      if (err) { t.fail(err); return t.end(); }
      src = 'window=this;' + src;

      vm.runInNewContext(src, { window: {}, console: { log: log } })
      t.end();
    });

  function log(s) {
    t.equal(s, 'An instance of Foo says hi from its .toString()!', 'transpiles and runs es6 code correctly')
  }
});
