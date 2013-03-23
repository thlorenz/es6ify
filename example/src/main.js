let makeMonster   =  require('./make-monster');
let { blockScope, destructuring, generators } = require('./features');

blockScope();
destructuring();
generators();
const monster = makeMonster(3, 4, 'cookie');

console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');
