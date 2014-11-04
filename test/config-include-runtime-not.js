'use strict';
/*jshint asi: true */

var test       = require('tap').test;
var browserify = require('browserify');
var es6ify     = require('..');
var path       = require('path');
var vm         = require('vm');

test('\nwhen not including runtime via package.json and transpiling a script that needs it inside that package', function (t) {
  t.plan(1);
  browserify()
    .transform(es6ify)
    .require(__dirname + '/config-include-runtime-not/main.js', { entry: true })
    .bundle(function (err, src) {
      if (err) { t.fail(err); return t.end(); }

      src = 'window=this;' + src;

      try {
        vm.runInNewContext(src, { window: {}, })
      } catch (err) {
        t.equal(err.name, 'ReferenceError', 'running should fail indicating that traceur runtime is missing');
      }

      t.end();
    });
});
