module Block {
  {
    var tmp = a;
    a = b;
    b = tmp;
  }
  console.log('tmp is undefined: ', typeof tmp == 'undefined');
};
