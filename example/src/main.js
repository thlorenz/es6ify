console.log('starting es6ify demo');

let makeMonster   =  require('./make-monster');
let { 
    blockScope
  , destructuring
  , generators 
  , iterators
  , defaultParameters
  , restParameters
  , spreadOperator
  , arrowFunctions
} = require('./features');

blockScope();
destructuring();
generators();
const monster = makeMonster(3, 4, 'cookie');

console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');

iterators();

defaultParameters('Heinz Muelleimer', 'Cobol', 'Germany');
defaultParameters('Thorsten Lorenz');
defaultParameters('Grandpa Otto', 'Java');

restParameters('animals', 'cat', 'dog', 'zebra', 'giraffe', 'lion');

spreadOperator([ 3, 4 ]);

arrowFunctions('a messsage from your personal arrow function');
