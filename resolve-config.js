'use strict';

var mothership = require('mothership')
  , path = require('path')
  , si = typeof setImmediate === 'function' ? setImmediate : function setImmediate(fn) { setTimeout(fn, 0) }
  , pkgConfig

function hasEs6ifyConfig(pkg) {
  return !!pkg.es6ify;
}

var go = module.exports = 

/**
 * Attempts to resolve the `es6ify` config from a `package.json` of the package
 * that owns the given file or one of its parent packages.
 *
 * @name resolveConfig
 * @function
 * @private
 * @param {string} file full path to the file that is being transformed
 * @param {function} cb called back with an error, or the resolved config - if none is found just `{}`
 */
function resolveConfig (file, cb) {
  if (pkgConfig) return si(cb.bind(null, null, pkgConfig));

  var root = path.dirname(file);
  mothership(root, hasEs6ifyConfig, function onpkg(err, res) {
    if (err) return cb(err);
    
    pkgConfig = (res && res.pack && res.pack.es6ify) || {}
    cb(null, pkgConfig);
  });
}
