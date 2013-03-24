# es6ify [![build status](https://secure.travis-ci.org/thlorenz/es6ify.png)](http://travis-ci.org/thlorenz/es6ify)

browserify v2 transform to compile JavaScript.next (ES6) to JavaScript.old (ES3) on the fly

## Command Line Example

    browserify -t es6ify ./example/src/main.js -> ./example/public/js/bundle.js

## Script Example

```js
browserify()
  .add(es6ify.runtime)
  .transform(es6ify))
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

Find the full version of this example [here](https://github.com/thlorenz/es6ify/blob/master/example/build.js).

## Installation

    npm install es6ify

## What You Get

![generators](https://github.com/thlorenz/es6ify/raw/master/assets/generators-shot.png)

[Try it live](http://thlorenz.github.com/es6ify/)


## Supported ES6 features

### arrayComprehension

### arrowFunctions

### classes

### defaultParameters

### destructuring

### forOf

### propertyMethods

### propertyNameShorthand

### templateLiterals

### restParameters

### spread

### generatorComprehension

### generators

### deferredFunctions

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
