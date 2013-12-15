# es6ify [![build status](https://secure.travis-ci.org/thlorenz/es6ify.png)](http://travis-ci.org/thlorenz/es6ify)

[![NPM](https://nodei.co/npm/es6ify.png?downloads=true&stars=true)](https://nodei.co/npm/es6ify/)

[browserify](https://github.com/substack/node-browserify) v2 transform to compile JavaScript.next (ES6) to
JavaScript.current (ES5) on the fly

```js
browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

Find the full version of this example [here](https://github.com/thlorenz/es6ify/blob/master/example/build.js).

## Installation

    npm install es6ify

## What You Get

![screenshot](https://github.com/thlorenz/es6ify/raw/master/assets/screenshot.png)

[Try it live](http://thlorenz.github.com/es6ify/)

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [API](#api)
  - [es6ify](#es6ify)
  - [es6ify.configure(filePattern : Regex)](#es6ifyconfigurefilepattern-:)
  - [es6ify.runtime](#es6ifyruntime)
- [Caching](#caching)
- [Source Maps](#source-maps)
- [Supported ES6 features](#supported-es6-features)
  - [arrayComprehension](#arraycomprehension)
  - [arrowFunctions](#arrowfunctions)
  - [classes](#classes)
  - [defaultParameters](#defaultparameters)
  - [destructuring](#destructuring)
  - [forOf](#forof)
  - [propertyMethods](#propertymethods)
  - [propertyNameShorthand](#propertynameshorthand)
  - [templateLiterals](#templateliterals)
  - [restParameters](#restparameters)
  - [spread](#spread)
  - [generatorComprehension](#generatorcomprehension)
  - [generators](#generators)
  - [blockBinding](#blockbinding)
- [Unsupported ES6 Features](#unsupported-es6-features)
  - [modules](#modules)

## API

### es6ify

Returns a transform with default file pattern and standard error stream.

```js
browserify()
  .add(require('es6ify').runtime)
  .transform(require('es6ify'))
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

### es6ify.configure(filePattern : Regex)

Returns a es6 transform with custom file pattern and standard error stream.

The default file pattern includes all JavaScript files, but you may override it in order to only transform files coming
from a certain directory, with a specific file name and/or extension, etc.

By configuring the regex to exclude ES5 files, you can optimize the performance of the transform. However transforming
ES5 JavaScript will work since it is a subset of ES6.

```js
browserify()
  .add(require('es6ify').runtime)
   // compile all .js files except the ones coming from node_modules
  .transform(require('es6ify').configure(/^(?!.*node_modules)+.+\.js$/))
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

### es6ify.runtime

Returns runtime necessary to support ES6 features and therefore needs to be added to the bundle like in the example
above.

## Caching

When es6ify is run on a development server to help generate the browserify bundle on the fly, it makes sense to only
recompile ES6 files that changed. Therefore es6ify caches previously compiled files and just pulls them from there if no
changes were made to the file.

## Source Maps

es6ify instructs the traceur transpiler to generate source maps. It then inlines all original sources and adds the
resulting source map `base64` encoded to the bottom of the transformed content. This allows debugging the original ES6
source when using the `debug` flag with browserify.

If the `debug` flag is not set, these source maps will be removed by browserify and thus will not be contained inside
your production bundle.

## Supported ES6 features

### arrayComprehension

### arrowFunctions

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/arrow-functions.js)

### classes

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/make-monster.js)

### defaultParameters

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/default-parameters.js)

### destructuring

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/destructuring.js)

### forOf

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/iterators.js)

### propertyMethods

### propertyNameShorthand

### templateLiterals

### restParameters

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/rest-parameters.js)

### spread

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/spread-operator.js)

### generatorComprehension

### generators

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/generators.js)

### blockBinding

The block binding `let` is implemented in ES5 via `try/catch` blocks which may affect performance.

## Unsupported ES6 Features

### modules 

I recommend to use `require` instead since that integrates better with browserify. 

If you want to use ES6 modules, you need to compile all files that use them into one file since
inlining them is the only way to make this work in ES5. You can then `browserify.add` that file and therefore wouldn't
need es6ify.

Compiling a single file makes caching impossible and will lead to longer bundle times when used on the development
server to bundle on the fly.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/thlorenz/es6ify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

