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

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [API](#api)
- [Examples](#examples)
	- [es6ify.configure(filePattern : Regex)](#es6ifyconfigurefilepattern--regex)
	- [es6ify.traceurOverrides](#es6ifytraceuroverrides)
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
	- [modules](#modules)
- [Experimental ES6 Features not supported by default](#experimental-es6-features-not-supported-by-default)
	- [block scope (`let`)](#block-scope-let)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl>
<dt>
<h4 class="name" id="es6ify"><span class="type-signature"></span>es6ify<span class="type-signature"> &rarr; {function}</span></h4>
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
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js#L98">lineno 98</a>
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
<p>The runtime is quite large and not needed for all ES6 features and therefore not added to the bundle by default.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js#L121">lineno 121</a>
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
<p>In order to support block scope (<code>let</code>) do:</p>
<p><code>es6ify.traceurOverrides = { blockBinding: true }</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js#L137">lineno 137</a>
</li>
</ul>
</dd>
</dl>
</dd>
</dl>
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
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js#L20">lineno 20</a>
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
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/es6ify/blob/update-traceur/index.js#L111">lineno 111</a>
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
browserify()
  .add(require('es6ify').runtime)
   // compile all .js files except the ones coming from node_modules
  .transform(require('es6ify').configure(/^(?!.*node_modules)+.+\.js$/))
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

### es6ify.traceurOverrides

Some features supported by traceur are still experimental and/or not implemented according to the ES6 spec.
Therefore they have been disabled by default, but can be enabled by overriding these options.

For instance to support the block scope (`let`) feature youd do the following.

```js
var es6ify = require('es6ify');
es6ify.traceurOverrides = { blockBinding: true };
browserify()
  .add(es6ify.runtime)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
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

### modules 

Imports and exports are converted to `commonjs` style `require` and `module.exports` statements to seamlessly integrate
with browserify.

## Experimental ES6 Features not supported by default

### block scope (`let`)

[example](https://github.com/thlorenz/es6ify/blob/master/example/src/features/block-scope.js)

The block binding `let` is implemented in ES5 via `try/catch` blocks which may affect performance.

It is also experimental and therefore not supported by default, but you can support for it by adding 
`{ blockBinding: true }` to `es6ify.traceurOverrides`.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/thlorenz/es6ify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
