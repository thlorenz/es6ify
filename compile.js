'use strict';

var compile = require("traceur").compile;

module.exports = function compileFile(file, contents) {

    var result = compile(contents, { 
      modules: 'commonjs',
      sourceMap: true,
      filename: file
    });

    if (result.errors.length) {
        return { source: null, sourcemap: null, error: result.errors[0] };
    }
    return {
        source: result.js,
        errors: result.errors,
        sourcemap: result.sourceMap ? JSON.parse(result.sourceMap) : null
    };
};