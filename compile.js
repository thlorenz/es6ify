'use strict';

var extend = require("util-extend");
var compile = require("traceur").compile;

var options = {
    experimental: true,
    arrayComprehension: true,
    arrowFunctions: true,
    classes: true,
    computedPropertyNames: true,
    defaultParameters: true,
    destructuring: true,
    forOf: true,
    generatorComprehension: true,
    generators: true,
    modules: true,
    numericLiterals: true,
    propertyMethods: true,
    propertyNameShorthand: true,
    restParameters: true,
    spread: true,
    templateLiterals: true,
    blockBinding: true,
    symbols: true,
    deferredFunctions: true,
    sourceMap: true
};

module.exports = function compileFile(file, contents) {

    var result = compile(contents, extend(options, { filename: file }));

    if (result.errors.length) {
        return { source: null, sourcemap: null, error: result.errors[0] };
    }
    return {
        source: result.js,
        errors: result.errors,
        sourcemap: result.sourceMap ? JSON.parse(result.sourceMap) : null
    };
};