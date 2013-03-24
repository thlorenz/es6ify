'use strict';
/*jshint asi: true */

var test = require('tap').test

var fs        =  require('fs');
var path      =  require('path');
var through   =  require('through');
var convert   =  require('convert-source-map');
var es6ify    =  require('..');

test('transform adds sourcemap comment and uses cache on second time', function (t) {
    t.plan(1);
    var data = '';
    var compiles = 0;
//    var originalCompile = coffee.compile;

    /*coffee.compile = function () {
      compiles++;
      var args = [].slice.call(arguments);
      return originalCompile.apply(this, args);
    };*/

    var file = path.join(__dirname, '../example/src/features/iterators.js');
    fs.createReadStream(file)
        .pipe(es6ify(file))
        .pipe(through(write, end));
    
    function write (buf) { data += buf; }
    function end () {
      var sourceMap = convert.fromSource(data).toObject();

      t.deepEqual(
          sourceMap
        , { version: 3,
            file: file,
            sources: [ '/Users/thlorenz/dev/js/projects/es6ify/example/src/features/iterators.js' ],
            names: [],
            mappings: 'AAAA,MAAA,CAAA,OAAA,EAAiB,SAAA,CAAU;;ACEf,cAAoB,QAAA,CAAA,OAAA,CAAA,WAA2B,CDDrC,CAAC,CAAA,CAAG,EAAA,CAAG,EAAA,CAAA,CAAA;ACErB;AACE,WAAA,EAAO,IAAA;;;;;ADHgB;AAC7B,mBAAA,CAAA,GAAW,CAAC,UAAA,CAAY,QAAA,CAAA;AAAA;AAAA;AAAA;AAAA,KCMlB,MAAA,EAAM,CAAA,CAAG;AACT,QAAA,EAAI,CAAC,OAAA,CAAA,OAAA,CAAA,eAA+B,CAAC,CAAA,CAAA,CACnC,MAAM,EAAA;AAAA;AAAA;AAAA,CAAA',
            sourcesContent: [ 'module.exports = function () {\n  for (let element of [1, 2, 3]) {\n    console.log(\'element:\', element);\n  }\n};\n' ] }
        , 'adds sourcemap comment including original source'
      );
    }
});
