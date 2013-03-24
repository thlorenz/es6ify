# es6ify [![build status](https://secure.travis-ci.org/thlorenz/es6ify.png)](http://travis-ci.org/thlorenz/es6ify)

browserify v2 transform to compile JavaScript.next (ES6) to JavaScript.old (ES3) on the fly

```js
browserify()
  .add(es6ify.runtime)
  .transform(es6ify())
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

Find the full version of this example [here](https://github.com/thlorenz/es6ify/blob/master/example/build.js).

## Installation

    npm install es6ify

![generators](https://github.com/thlorenz/es6ify/raw/master/assets/generators-shot.png)

[Try it live](http://thlorenz.github.com/es6ify/)



