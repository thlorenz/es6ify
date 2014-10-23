#!/usr/bin/env node

'use strict';

var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var updateSection = require('update-section');
var resolveBin = require('resolve-bin');

resolveBin('marked', function (err, marked) {
  exec('curl -L https://raw.githubusercontent.com/thlorenz/es6ify/master/README.md | ' + marked, function (err, stdout, stderr) {
    if (err) return console.error(err);
    
    update(stdout);
  })
})

function matchesStart(line) {
    return (/^<!-- START README/).test(line);  
}

function matchesEnd(line) {
    return (/^<!-- END README/).test(line);  
}

function update(html) {
  var indexFile = path.join(__dirname, '..', 'index.html');
  var index = fs.readFileSync(indexFile, 'utf8');

  var readmeSection = 
      '<!-- START README -->\n'
    + html + '\n'
    +  '<!-- END README -->\n';

  var updated = updateSection(index, readmeSection, matchesStart, matchesEnd);
  
  fs.writeFileSync(indexFile, updated, 'utf8');

  console.log('SUCCESS!');
}
