# es6ify [![build status](https://secure.travis-ci.org/thlorenz/es6ify.png)](http://travis-ci.org/thlorenz/es6ify)

[browserify](https://github.com/substack/node-browserify) v2 transform to compile JavaScript.next (ES6) to
JavaScript.current (ES6) on the fly

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


## API

### es6ify

Returns a transform with default file pattern and standard error stream.

### es6ify.transform(filePattern : Regex, stderr : Stream)

Returns a es6 transform with custom file pattern and standard error stream.

The default file pattern includes all JavaScript files, but you may override it in order to only transfrom files coming
from a certain directory, with a specific file name and/or extension, etc.

### es6ify.runtime

Returns runtime necessary to support ES6 features and therefore needs to be added to the bundle like in the example
above.


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

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/make-monster.js#L18)

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
