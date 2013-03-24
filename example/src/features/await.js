// This feature no longer part of the examples as it is not an ES6 feature
function deferredTimeout(delay) {
    var deferred = new Deferred();
    window.setTimeout(function() {
        deferred.callback({});
    },
    delay);
    return deferred;
}

module.exports = function deferredAnimate(element) {
  console.log('starting animation');
  for (var i = 0; i < 100; ++i) {
    element.style['margin-left'] = i + 'px';
    await deferredTimeout(10);
  }

  for (; i > 0; --i) {
    element.style['margin-left'] = i + 'px';
    await deferredTimeout(10);
  }
};
