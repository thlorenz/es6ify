'use strict';
/*jshint asi: true */

var test       = require('tap').test;
var browserify = require('browserify');
var es6ify     = require('..');
var path       = require('path');
var vm         = require('vm');

test('\nwhen file pattern specified in package.json includes is /.js.es6$/ and I require punk.js.es6', function (t) {
  t.plan(1);
  browserify()
    .transform(es6ify)
    .require(__dirname + '/config-file-pattern/punk.js.es6', { entry: true })
    .bundle(function (err, src) {
      if (err) { t.fail(err); return t.end(); }

      try {
        vm.runInNewContext(src, { window: {}, })
      } catch (err) {
        t.equal(err.name, 'ReferenceError', 'running it fails since "use strict" was added')
      }
      t.end();
    });
});

test('\nwhen file pattern specified in package.json includes is /.js.es6$/ and I require punk.js', function (t) {
  t.plan(1);
  browserify()
    .transform(es6ify)
    .require(__dirname + '/config-file-pattern/punk.js', { entry: true })
    .bundle(function (err, src) {
      if (err) { t.fail(err); return t.end(); }

      vm.runInNewContext(src, { window: {}, console: { log: log } })
      t.end();
    });

    function log(a) {
      t.equal(a, "I'm the trouble starter, punking instigator", 'runs the code violating strict correclty')
    }
});
