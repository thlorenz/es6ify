module.exports = function () {
  var a = 2
    , b = 3
    ;
  {
    let tmp = a;
    a = b;
    b = tmp;
  }
  console.log('tmp is undefined: ', typeof tmp == 'undefined');
};
