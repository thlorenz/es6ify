var es6ify     =  require('..')
  , test       =  require('tap').test
  , fs         =  require('fs')
  , path       =  require('path')
  , through    =  require('through');

test('accepts optional argument for file pattern', function(t) {

    t.plan(1);
    var data = '';
    var file = path.join(__dirname, 'fixtures/log.js.es6');

    fs.createReadStream(file)
      .pipe(es6ify(file, {extension: '.js.es6'}))
      .on('error', console.error)
      .pipe(through(write, end));

    function write (buf) { data += buf; }

    function end () {
      var expectedOutput = fs.readFileSync(path.join(__dirname, 'fixtures/log.js'));

      t.equal(data.indexOf(expectedOutput), 0);
    }
});
