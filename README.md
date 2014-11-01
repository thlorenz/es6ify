# es6ify [![build status](https://secure.travis-ci.org/thlorenz/es6ify.png?branch=master)](http://travis-ci.org/thlorenz/es6ify)

[![NPM](https://nodei.co/npm/es6ify.png?downloads=true&stars=true)](https://nodei.co/npm/es6ify/)

[browserify](https://github.com/substack/node-browserify) `>=v2` transform to compile JavaScript.next (ES6) to
JavaScript.current (ES5) on the fly.

```js
browserify({ debug: true })
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(bundlePath));
```

Find the full version of this example [here](https://github.com/thlorenz/es6ify/blob/master/example/build.js).

## Installation

    npm install es6ify

## What You Get

![screenshot](https://github.com/thlorenz/es6ify/raw/master/assets/screenshot.png)

[Try it live](http://thlorenz.github.com/es6ify/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Enabling sourcemaps and related posts](#enabling-sourcemaps-and-related-posts)
- [API](#api)
- [Examples](#examples)
	- [es6ify.configure(filePattern : Regex)](#es6ifyconfigurefilepattern--regex)
	- [es6ify.traceurOverrides](#es6ifytraceuroverrides)
- [Caching](#caching)
- [Source Maps](#source-maps)
- [Supported ES6 features](#supported-es6-features)
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
	- [generators](#generators)
	- [modules](#modules)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Enabling sourcemaps and related posts

- In Chrome or Firefox: enabled by default
- In IE: works in IE11 onward by default
- [browserify-sourcemaps](http://thlorenz.com/blog/browserify-sourcemaps)
- [html5 rocks sourcemaps post](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="e6ify::runtime"><span class="type-signature"></span>e6ify::runtime<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>The traceur runtime exposed here so it can be included in the bundle via:</p>
<p><code>browserify.add(es6ify.runtime)</code></p>
<p>The runtime is quite large and not needed for all ES6 features and therefore not added to the bundle by default.
See <a href="https://github.com/google/traceur-compiler/issues/1007#issuecomment-42837067">this comment</a> for details.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js#L122">lineno 122</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="es6ify::traceurOverrides"><span class="type-signature"></span>es6ify::traceurOverrides<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Allows to override traceur compiler defaults.</p>
<p>In order to support async functions (<code>async</code>/<code>await</code>) do:</p>
<p><code>es6ify.traceurOverrides = { asyncFunctions: true }</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js#L139">lineno 139</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
<dl>
<dt>
<h4 class="name" id="es6ify"><span class="type-signature"></span>es6ify<span class="signature">()</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>The es6ify transform to be used with browserify.</p>
<h4>Example</h4>
<p><code>browserify().transform(es6ify)</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js#L99">lineno 99</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>function that returns a <code>TransformStream</code> when called with a <code>file</code></p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="es6ify::compileFile"><span class="type-signature"></span>es6ify::compileFile<span class="signature">(file, src)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>Compile function, exposed to be used from other libraries, not needed when using es6ify as a transform.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>file</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>name of the file that is being compiled to ES5</p></td>
</tr>
<tr>
<td class="name"><code>src</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>source of the file being compiled to ES5</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js#L20">lineno 20</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>compiled source</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="es6ify::configure"><span class="type-signature"></span>es6ify::configure<span class="signature">(<span class="optional">filePattern</span>)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Configurable es6ify transform function that allows specifying the <code>filePattern</code> of files to be compiled.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>filePattern</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>(default: `/.js$/) pattern of files that will be es6ified</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/master/index.js#L112">lineno 112</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>function that returns a <code>TransformStream</code> when called with a <code>file</code></p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## Examples

### es6ify.configure(filePattern : Regex)

The default file pattern includes all JavaScript files, but you may override it in order to only transform files coming
from a certain directory, with a specific file name and/or extension, etc.

By configuring the regex to exclude ES5 files, you can optimize the performance of the transform. However transforming
ES5 JavaScript will work since it is a subset of ES6.

```js
browserify({ debug: true })
  .add(require('es6ify').runtime)
   // compile all .js files except the ones coming from node_modules
  .transform(require('es6ify').configure(/^(?!.*node_modules)+.+\.js$/))
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(bundlePath));
```

### es6ify.traceurOverrides

Some features supported by traceur are still experimental: either nonstandard, proposed but not yet standardized, or
just too slow to use for most code. Therefore Traceur disables them by default. They can be enabled by overriding these
options.

For instance to support the async functions (`async`/`await`) feature you'd do the following.

```js
var es6ify = require('es6ify');
es6ify.traceurOverrides = { asyncFunctions: true };
browserify({ debug: true })
  .add(es6ify.runtime)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(bundlePath));
```

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

### arrowFunctions

```js
var log = msg => console.log(msg);
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/arrow-functions.js)

### classes

```js
class Character {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
  }
  attack(character) {
    console.log('attacking', character);
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super.attack(character);
  }

  get isAlive() { return this.health > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/make-monster.js)

### defaultParameters

```js
function logDeveloper(name, codes = 'JavaScript', livesIn = 'USA') {
  console.log('name: %s, codes: %s, lives in: %s', name, codes, livesIn);
};
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/default-parameters.js)

### destructuring

```js
var [a, [b], c, d] = ['hello', [', ', 'junk'], ['world']];
console.log(a + b + c); // hello, world
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/destructuring.js)

### forOf

```js
for (let element of [1, 2, 3]) {
  console.log('element:', element);
}
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/iterators.js)

### propertyMethods

```js
var object = {
  prop: 42,
  // No need for function
  method() {
    return this.prop;
  }
};
```

### propertyNameShorthand

```js
var foo = 'foo';
var bar = 'bar';
var obj = { foo, bar };
```

### templateLiterals

```js
var x = 5, y = 10;
console.log(`${x} + ${y} = ${ x + y}`)
// 5 + 10 = 15
```

### restParameters

```js
function printList(listname, ...items) {
  console.log('list %s has the following items', listname);
  items.forEach(function (item) { console.log(item); });
};
```
[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/rest-parameters.js)


### spread

```js
function add(x, y) {
  console.log('%d + %d = %d', x, y, x + y);
}
var numbers = [5, 10]
add(...numbers);
// 5 + 10 = 15
};
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/spread-operator.js)

### generators

```js
// A binary tree class.
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// A recursive generator that iterates the Tree labels in-order.
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// Make a tree
function make(array) {
  // Leaf node:
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}


let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
console.log('generating tree labels in order:');

// Iterate over it
for (let node of inorder(tree)) {
  console.log(node); // a, b, c, d, ...
}
```

[full example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/generators.js)

### block scoping

```js
{
  let tmp = 5;
}
console.log(typeof tmp === 'undefined'); // true
```

NOTE: Traceur has a pretty bad bug that makes the above code not work correctly for now: [google/traceur-compiler#1358](https://github.com/google/traceur-compiler/issues/1358).

### modules

Imports and exports are converted to `commonjs` style `require` and `module.exports` statements to seamlessly integrate
with browserify.
