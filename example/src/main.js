console.log('starting traceurify demo');

let makeMonster   =  require('./make-monster');
let { 
    blockScope
  , destructuring
  , generators 
  , iterators
  , tryawait
  , defaultParameters
} = require('./features');

blockScope();
destructuring();
generators();
const monster = makeMonster(3, 4, 'cookie');

console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');

iterators();

tryawait(window.document.getElementsByTagName('p')[0]);

defaultParameters('Heinz Muelleimer', 'Cobol', 'Germany');
defaultParameters('Thorsten Lorenz');
defaultParameters('Grandpa Otto', 'Java');
