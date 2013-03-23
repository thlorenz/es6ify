let blockScope    =  require('./block-scope')
  , destructuring =  require('./destructuring')
  , generators    =  require('./generators')
  , makeMonster   =  require('./make-monster')
  ;

blockScope();
destructuring();
generators();
const monster = makeMonster(3, 4, 'cookie');

console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');
