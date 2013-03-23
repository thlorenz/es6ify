module.exports = function (numbers) {
  function add(x, y) {
    console.log('%d + %d = %d', x, y, x + y);
  }
  add(...numbers);
};
