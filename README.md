# traceurify [![build status](https://secure.travis-ci.org/thlorenz/traceurify.png)](http://travis-ci.org/thlorenz/traceurify)

browserify v2 transform to compile JavaScript.next (ES6) to JavaScript.old (ES3) on the fly

```js
browserify()
  .add(traceurify.runtime)
  .transform(traceurify())
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
```

Find the full version of this example [here](https://github.com/thlorenz/traceurify/blob/master/example/build.js).

## Installation

    npm install traceurify

![generators](https://github.com/thlorenz/traceurify/raw/master/assets/generators-shot.png)

[Try it live](http://thlorenz.github.com/traceurify/)



