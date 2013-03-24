;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
(function(global){(function(global) {
  try {
    throw undefined;
  } catch (setupGlobals) {
    try {
      throw undefined;
    } catch (fire) {
      try {
        throw undefined;
      } catch (notify) {
        try {
          throw undefined;
        } catch (Deferred) {
          try {
            throw undefined;
          } catch (setStopIteration) {
            try {
              throw undefined;
            } catch (isStopIteration) {
              try {
                throw undefined;
              } catch (setGeneratorReturn) {
                try {
                  throw undefined;
                } catch (polyfillArray) {
                  try {
                    throw undefined;
                  } catch (addIterator) {
                    try {
                      throw undefined;
                    } catch (returnThis) {
                      try {
                        throw undefined;
                      } catch (getIterator) {
                        try {
                          throw undefined;
                        } catch (polyfillObject) {
                          try {
                            throw undefined;
                          } catch (getPropertyDescriptor) {
                            try {
                              throw undefined;
                            } catch ($getPropertyDescriptor) {
                              try {
                                throw undefined;
                              } catch (defineProperty) {
                                try {
                                  throw undefined;
                                } catch (setProperty) {
                                  try {
                                    throw undefined;
                                  } catch (has) {
                                    try {
                                      throw undefined;
                                    } catch (hasPrivateNameProperty) {
                                      try {
                                        throw undefined;
                                      } catch (getProperty) {
                                        try {
                                          throw undefined;
                                        } catch (deleteProperty) {
                                          try {
                                            throw undefined;
                                          } catch (assertNotName) {
                                            try {
                                              throw undefined;
                                            } catch (elementSet) {
                                              try {
                                                throw undefined;
                                              } catch (elementHas) {
                                                try {
                                                  throw undefined;
                                                } catch (elementGet) {
                                                  try {
                                                    throw undefined;
                                                  } catch (elementDelete) {
                                                    try {
                                                      throw undefined;
                                                    } catch (hasOwnProperty) {
                                                      try {
                                                        throw undefined;
                                                      } catch (getOwnPropertyNames) {
                                                        try {
                                                          throw undefined;
                                                        } catch (assertName) {
                                                          try {
                                                            throw undefined;
                                                          } catch (Name) {
                                                            try {
                                                              throw undefined;
                                                            } catch (newUniqueString) {
                                                              try {
                                                                throw undefined;
                                                              } catch (polyfillString) {
                                                                try {
                                                                  throw undefined;
                                                                } catch (nonEnum) {
                                                                  'use strict';
                                                                  var $create = Object.create;
                                                                  var $defineProperty = Object.defineProperty;
                                                                  var $freeze = Object.freeze;
                                                                  var $getOwnPropertyNames = Object.getOwnPropertyNames;
                                                                  var $getPrototypeOf = Object.getPrototypeOf;
                                                                  var $hasOwnProperty = Object.prototype.hasOwnProperty;
                                                                  nonEnum = function(value) {
                                                                    return {
                                                                      configurable: true,
                                                                      enumerable: false,
                                                                      value: value,
                                                                      writable: true
                                                                    };
                                                                  };
                                                                  var method = nonEnum;
                                                                  polyfillString = function(String) {
                                                                    Object.defineProperties(String.prototype, {
                                                                      startsWith: method(function(s) {
                                                                        return this.lastIndexOf(s, 0) === 0;
                                                                      }),
                                                                      endsWith: method(function(s) {
                                                                        var t = String(s);
                                                                        var l = this.length - t.length;
                                                                        return l >= 0 && this.indexOf(t, l) === l;
                                                                      }),
                                                                      contains: method(function(s) {
                                                                        return this.indexOf(s) !== - 1;
                                                                      }),
                                                                      toArray: method(function() {
                                                                        return this.split('');
                                                                      })
                                                                    });
                                                                    $defineProperty(String, 'raw', {
                                                                      value: function(callsite) {
                                                                        var raw = callsite.raw;
                                                                        var len = raw.length >>> 0;
                                                                        if (len === 0) return '';
                                                                        var s = '';
                                                                        var i = 0;
                                                                        while (true) {
                                                                          s += raw[i];
                                                                          if (i + 1 === len) return s;
                                                                          s += arguments[++i];
                                                                        }
                                                                      },
                                                                      configurable: true,
                                                                      enumerable: false,
                                                                      writable: true
                                                                    });
                                                                  };
                                                                  var counter = 0;
                                                                  newUniqueString = function() {
                                                                    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
                                                                  };
                                                                  var nameRe = /^__\$(?:\d+)\$(?:\d+)\$__$/;
                                                                  var internalStringValueName = newUniqueString();
                                                                  Name = function(string) {
                                                                    if (!string) string = newUniqueString();
                                                                    $defineProperty(this, internalStringValueName, {value: newUniqueString()});
                                                                    function toString() {
                                                                      return string;
                                                                    }
                                                                    $freeze(toString);
                                                                    $freeze(toString.prototype);
                                                                    var toStringDescr = method(toString);
                                                                    $defineProperty(this, 'toString', toStringDescr);
                                                                    this.public = $freeze($create(null, {toString: method($freeze(function toString() {
                                                                        return string;
                                                                      }))}));
                                                                    $freeze(this.public.toString.prototype);
                                                                    $freeze(this);
                                                                  };
                                                                  ;
                                                                  $freeze(Name);
                                                                  $freeze(Name.prototype);
                                                                  assertName = function(val) {
                                                                    if (!NameModule.isName(val)) throw new TypeError(val + ' is not a Name');
                                                                    return val;
                                                                  };
                                                                  var elementDeleteName = new Name();
                                                                  var elementGetName = new Name();
                                                                  var elementSetName = new Name();
                                                                  var NameModule = $freeze({
                                                                    Name: function(str) {
                                                                      return new Name(str);
                                                                    },
                                                                    isName: function(x) {
                                                                      return x instanceof Name;
                                                                    },
                                                                    elementGet: elementGetName,
                                                                    elementSet: elementSetName,
                                                                    elementDelete: elementDeleteName
                                                                  });
                                                                  var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
                                                                  getOwnPropertyNames = function(object) {
                                                                    return filter($getOwnPropertyNames(object), function(str) {
                                                                      return !nameRe.test(str);
                                                                    });
                                                                  };
                                                                  hasOwnProperty = function(name) {
                                                                    if (NameModule.isName(name) || nameRe.test(name)) return false;
                                                                    return $hasOwnProperty.call(this, name);
                                                                  };
                                                                  elementDelete = function(object, name) {
                                                                    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementDeleteName)) {
                                                                      return getProperty(object, elementDeleteName).call(object, name);
                                                                    }
                                                                    return deleteProperty(object, name);
                                                                  };
                                                                  elementGet = function(object, name) {
                                                                    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementGetName)) {
                                                                      return getProperty(object, elementGetName).call(object, name);
                                                                    }
                                                                    return getProperty(object, name);
                                                                  };
                                                                  elementHas = function(object, name) {
                                                                    return has(object, name);
                                                                  };
                                                                  elementSet = function(object, name, value) {
                                                                    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementSetName)) {
                                                                      getProperty(object, elementSetName).call(object, name, value);
                                                                    } else {
                                                                      setProperty(object, name, value);
                                                                    }
                                                                    return value;
                                                                  };
                                                                  assertNotName = function(s) {
                                                                    if (nameRe.test(s)) throw Error('Invalid access to private name');
                                                                  };
                                                                  deleteProperty = function(object, name) {
                                                                    if (NameModule.isName(name)) return delete object[name[internalStringValueName]];
                                                                    if (nameRe.test(name)) return true;
                                                                    return delete object[name];
                                                                  };
                                                                  getProperty = function(object, name) {
                                                                    if (NameModule.isName(name)) return object[name[internalStringValueName]];
                                                                    if (nameRe.test(name)) return undefined;
                                                                    return object[name];
                                                                  };
                                                                  hasPrivateNameProperty = function(object, name) {
                                                                    return name[internalStringValueName]in Object(object);
                                                                  };
                                                                  has = function(object, name) {
                                                                    if (NameModule.isName(name) || nameRe.test(name)) return false;
                                                                    return name in Object(object);
                                                                  };
                                                                  setProperty = function(object, name, value) {
                                                                    if (NameModule.isName(name)) {
                                                                      var descriptor = $getPropertyDescriptor(object, [name[internalStringValueName]]);
                                                                      if (descriptor) object[name[internalStringValueName]] = value; else $defineProperty(object, name[internalStringValueName], nonEnum(value));
                                                                    } else {
                                                                      assertNotName(name);
                                                                      object[name] = value;
                                                                    }
                                                                  };
                                                                  defineProperty = function(object, name, descriptor) {
                                                                    if (NameModule.isName(name)) {
                                                                      if (descriptor.enumerable) {
                                                                        descriptor = Object.create(descriptor, {enumerable: {value: false}});
                                                                      }
                                                                      $defineProperty(object, name[internalStringValueName], descriptor);
                                                                    } else {
                                                                      assertNotName(name);
                                                                      $defineProperty(object, name, descriptor);
                                                                    }
                                                                  };
                                                                  $getPropertyDescriptor = function(obj, name) {
                                                                    while (obj !== null) {
                                                                      var result = Object.getOwnPropertyDescriptor(obj, name);
                                                                      if (result) return result;
                                                                      obj = $getPrototypeOf(obj);
                                                                    }
                                                                    return undefined;
                                                                  };
                                                                  getPropertyDescriptor = function(obj, name) {
                                                                    if (NameModule.isName(name)) return undefined;
                                                                    assertNotName(name);
                                                                    return $getPropertyDescriptor(obj, name);
                                                                  };
                                                                  polyfillObject = function(Object) {
                                                                    $defineProperty(Object, 'defineProperty', {value: defineProperty});
                                                                    $defineProperty(Object, 'deleteProperty', method(deleteProperty));
                                                                    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
                                                                    $defineProperty(Object, 'getProperty', method(getProperty));
                                                                    $defineProperty(Object, 'getPropertyDescriptor', method(getPropertyDescriptor));
                                                                    $defineProperty(Object, 'has', method(has));
                                                                    $defineProperty(Object, 'setProperty', method(setProperty));
                                                                    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
                                                                    function is(left, right) {
                                                                      if (left === right) return left !== 0 || 1 / left === 1 / right;
                                                                      return left !== left && right !== right;
                                                                    }
                                                                    $defineProperty(Object, 'is', method(is));
                                                                  };
                                                                  var iteratorName = new Name('iterator');
                                                                  var IterModule = {get iterator() {
                                                                      return iteratorName;
                                                                    }};
                                                                  getIterator = function(collection) {
                                                                    return getProperty(collection, iteratorName).call(collection);
                                                                  };
                                                                  returnThis = function() {
                                                                    return this;
                                                                  };
                                                                  addIterator = function(object) {
                                                                    setProperty(object, iteratorName, returnThis);
                                                                    return object;
                                                                  };
                                                                  polyfillArray = function(Array) {
                                                                    defineProperty(Array.prototype, IterModule.iterator, method(function() {
                                                                      var index = 0;
                                                                      var array = this;
                                                                      return {next: function() {
                                                                          if (index < array.length) {
                                                                            return array[index++];
                                                                          }
                                                                          throw StopIterationLocal;
                                                                        }};
                                                                    }));
                                                                  };
                                                                  var GeneratorReturnLocal;
                                                                  setGeneratorReturn = function(GeneratorReturn, global) {
                                                                    switch (typeof GeneratorReturn) {
                                                                      case 'function':
                                                                        if (typeof GeneratorReturnLocal === 'function' && StopIterationLocal instanceof GeneratorReturnLocal) {
                                                                          GeneratorReturnLocal = GeneratorReturn;
                                                                          setStopIteration(undefined, global);
                                                                          return;
                                                                        }
                                                                        GeneratorReturnLocal = GeneratorReturn;
                                                                        return;
                                                                      case 'undefined':
                                                                        GeneratorReturnLocal = function(v) {
                                                                          this.value = v;
                                                                        };
                                                                        GeneratorReturnLocal.prototype = {toString: function() {
                                                                            return '[object GeneratorReturn ' + this.value + ']';
                                                                          }};
                                                                        return;
                                                                      default:
                                                                        throw new TypeError('constructor function required');
                                                                    }
                                                                  };
                                                                  setGeneratorReturn();
                                                                  var StopIterationLocal;
                                                                  isStopIteration = function(x) {
                                                                    return x === StopIterationLocal || x instanceof GeneratorReturnLocal;
                                                                  };
                                                                  setStopIteration = function(StopIteration, global) {
                                                                    switch (typeof StopIteration) {
                                                                      case 'object':
                                                                        StopIterationLocal = StopIteration;
                                                                        break;
                                                                      case 'undefined':
                                                                        StopIterationLocal = new GeneratorReturnLocal();
                                                                        StopIterationLocal.toString = function() {
                                                                          return '[object StopIteration]';
                                                                        };
                                                                        break;
                                                                      default:
                                                                        throw new TypeError('invalid StopIteration type.');
                                                                    }
                                                                    if (global) global.StopIteration = StopIteration;
                                                                  };
                                                                  setStopIteration(global.StopIteration, global);
                                                                  Deferred = function(canceller) {
                                                                    this.canceller_ = canceller;
                                                                    this.listeners_ = [];
                                                                  };
                                                                  notify = function(self) {
                                                                    while (self.listeners_.length > 0) {
                                                                      var current = self.listeners_.shift();
                                                                      var currentResult = undefined;
                                                                      try {
                                                                        try {
                                                                          if (self.result_[1]) {
                                                                            if (current.errback) currentResult = current.errback.call(undefined, self.result_[0]);
                                                                          } else {
                                                                            if (current.callback) currentResult = current.callback.call(undefined, self.result_[0]);
                                                                          }
                                                                          current.deferred.callback(currentResult);
                                                                        } catch (err) {
                                                                          current.deferred.errback(err);
                                                                        }
                                                                      } catch (unused) {}
                                                                    }
                                                                  };
                                                                  fire = function(self, value, isError) {
                                                                    if (self.fired_) throw new Error('already fired');
                                                                    self.fired_ = true;
                                                                    self.result_ = [value, isError];
                                                                    notify(self);
                                                                  };
                                                                  Deferred.prototype = {
                                                                    fired_: false,
                                                                    result_: undefined,
                                                                    createPromise: function() {
                                                                      return {
                                                                        then: this.then.bind(this),
                                                                        cancel: this.cancel.bind(this)
                                                                      };
                                                                    },
                                                                    callback: function(value) {
                                                                      fire(this, value, false);
                                                                    },
                                                                    errback: function(err) {
                                                                      fire(this, err, true);
                                                                    },
                                                                    then: function(callback, errback) {
                                                                      var result = new Deferred(this.cancel.bind(this));
                                                                      this.listeners_.push({
                                                                        deferred: result,
                                                                        callback: callback,
                                                                        errback: errback
                                                                      });
                                                                      if (this.fired_) notify(this);
                                                                      return result.createPromise();
                                                                    },
                                                                    cancel: function() {
                                                                      if (this.fired_) throw new Error('already finished');
                                                                      var result;
                                                                      if (this.canceller_) {
                                                                        result = this.canceller_(this);
                                                                        if (!result instanceof Error) result = new Error(result);
                                                                      } else {
                                                                        result = new Error('cancelled');
                                                                      }
                                                                      if (!this.fired_) {
                                                                        this.result_ = [result, true];
                                                                        notify(this);
                                                                      }
                                                                    }
                                                                  };
                                                                  var modules = $freeze({
                                                                    get'@name'() {
                                                                      return NameModule;
                                                                    },
                                                                    get'@iter'() {
                                                                      return IterModule;
                                                                    }
                                                                  });
                                                                  global.Deferred = Deferred;
                                                                  setupGlobals = function(global) {
                                                                    polyfillString(global.String);
                                                                    polyfillObject(global.Object);
                                                                    polyfillArray(global.Array);
                                                                  };
                                                                  setupGlobals(global);
                                                                  var runtime = {
                                                                    Deferred: Deferred,
                                                                    GeneratorReturn: GeneratorReturnLocal,
                                                                    setGeneratorReturn: setGeneratorReturn,
                                                                    StopIteration: StopIterationLocal,
                                                                    setStopIteration: setStopIteration,
                                                                    isStopIteration: isStopIteration,
                                                                    addIterator: addIterator,
                                                                    assertName: assertName,
                                                                    createName: NameModule.Name,
                                                                    deleteProperty: deleteProperty,
                                                                    elementDelete: elementDelete,
                                                                    elementGet: elementGet,
                                                                    elementHas: elementHas,
                                                                    elementSet: elementSet,
                                                                    getIterator: getIterator,
                                                                    getProperty: getProperty,
                                                                    setProperty: setProperty,
                                                                    setupGlobals: setupGlobals,
                                                                    has: has,
                                                                    modules: modules
                                                                  };
                                                                  if (typeof traceur !== 'undefined') traceur.setRuntime(runtime); else global.traceur = {runtime: runtime};
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})(typeof global !== 'undefined' ? global: this);


})(window)
},{}],2:[function(require,module,exports){
console.log('starting es6ify demo');
var makeMonster = require('./make-monster');
var $__0 = require('./features'), blockScope = $__0.blockScope, destructuring = $__0.destructuring, generators = $__0.generators, iterators = $__0.iterators, defaultParameters = $__0.defaultParameters, restParameters = $__0.restParameters, spreadOperator = $__0.spreadOperator;
blockScope();
destructuring();
generators();
var monster = makeMonster(3, 4, 'cookie');
console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');
iterators();
defaultParameters('Heinz Muelleimer', 'Cobol', 'Germany');
defaultParameters('Thorsten Lorenz');
defaultParameters('Grandpa Otto', 'Java');
restParameters('animals', 'cat', 'dog', 'zebra', 'giraffe', 'lion');
spreadOperator([3, 4]);


},{"./make-monster":3,"./features":4}],3:[function(require,module,exports){
var $__getDescriptors = function(object) {
  var descriptors = {}, name, names = Object.getOwnPropertyNames(object);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    descriptors[name] = Object.getOwnPropertyDescriptor(object, name);
  }
  return descriptors;
}, $__createClassNoExtends = function(object, staticObject) {
  var ctor = object.constructor;
  Object.defineProperty(object, 'constructor', {enumerable: false});
  ctor.prototype = object;
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
}, $__superDescriptor = function(proto, name) {
  if (!proto) throw new TypeError('super is null');
  return Object.getPropertyDescriptor(proto, name);
}, $__superCall = function(self, proto, name, args) {
  var descriptor = $__superDescriptor(proto, name);
  if (descriptor) {
    if ('value'in descriptor) return descriptor.value.apply(self, args);
    if (descriptor.get) return descriptor.get.call(self).apply(self, args);
  }
  throw new TypeError("Object has no method '" + name + "'.");
}, $__getProtoParent = function(superClass) {
  if (typeof superClass === 'function') {
    var prototype = superClass.prototype;
    if (Object(prototype) === prototype || prototype === null) return superClass.prototype;
  }
  if (superClass === null) return null;
  throw new TypeError();
}, $__createClass = function(object, staticObject, protoParent, superClass, hasConstructor) {
  var ctor = object.constructor;
  if (typeof superClass === 'function') ctor.__proto__ = superClass;
  if (!hasConstructor && protoParent === null) ctor = object.constructor = function() {};
  var descriptors = $__getDescriptors(object);
  descriptors.constructor.enumerable = false;
  ctor.prototype = Object.create(protoParent, descriptors);
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
var Character = function() {
  'use strict';
  var $Character = ($__createClassNoExtends)({
    constructor: function(x, y, name) {
      this.x = x;
      this.y = y;
    },
    attack: function(character) {
      console.log('attacking', character);
    }
  }, {});
  return $Character;
}();
var Monster = function($__super) {
  'use strict';
  var $__proto = $__getProtoParent($__super);
  var $Monster = ($__createClass)({
    constructor: function(x, y, name) {
      $__superCall(this, $__proto, "constructor", [x, y]);
      this.name = name;
      this.health_ = 100;
    },
    attack: function(character) {
      $__superCall(this, $__proto, "attack", [character]);
    },
    get isAlive() {
      return this.health > 0;
    },
    get health() {
      return this.health_;
    },
    set health(value) {
      if (value < 0) throw new Error('Health must be non-negative.');
      this.health_ = value;
    }
  }, {}, $__proto, $__super, true);
  return $Monster;
}(Character);
module.exports = function(x, y, name) {
  return new Monster(x, y, name);
};


},{}],4:[function(require,module,exports){
module.exports = {
  blockScope: require('./block-scope'),
  destructuring: require('./destructuring'),
  generators: require('./generators'),
  iterators: require('./iterators'),
  defaultParameters: require('./default-parameters'),
  restParameters: require('./rest-parameters'),
  spreadOperator: require('./spread-operator')
};


},{"./block-scope":5,"./destructuring":6,"./generators":7,"./iterators":8,"./default-parameters":9,"./rest-parameters":10,"./spread-operator":11}],5:[function(require,module,exports){
module.exports = function() {
  var a = 2, b = 3;
  ;
  {
    try {
      throw undefined;
    } catch (tmp) {
      tmp = a;
      a = b;
      b = tmp;
    }
  }
  console.log('tmp is undefined: ', typeof tmp == 'undefined');
};


},{}],6:[function(require,module,exports){
module.exports = function() {
  var $__0 = ['hello', [', ', 'junk'], ['world']], a = $__0[0], b = $__0[1][0], c = $__0[2], d = $__0[3];
  console.log(a + b + c);
};


},{}],7:[function(require,module,exports){
var $__generatorWrap = function(generator) {
  return traceur.runtime.addIterator({
    send: function(x) {
      switch (generator.GState) {
        case 1:
          throw new Error('"send" on executing generator');
        case 3:
          throw new Error('"send" on closed generator');
        case 0:
          if (x !== undefined) {
            throw new TypeError('Sent value to newborn generator');
          }
        case 2:
          generator.GState = 1;
          if (generator.moveNext(x, 0)) {
            generator.GState = 2;
            return generator.current;
          }
          generator.GState = 3;
          if (generator.yieldReturn !== undefined) {
            throw new traceur.runtime.GeneratorReturn(generator.yieldReturn);
          }
          throw traceur.runtime.StopIteration;
      }
    },
    next: function() {
      return this.send(undefined);
    },
    'throw': function(x) {
      switch (generator.GState) {
        case 1:
          throw new Error('"throw" on executing generator');
        case 3:
          throw new Error('"throw" on closed generator');
        case 0:
          generator.GState = 3;
          throw x;
        case 2:
          generator.GState = 1;
          if (generator.moveNext(x, 1)) {
            generator.GState = 2;
            return generator.current;
          }
          generator.GState = 3;
          if (generator.yieldReturn !== undefined) {
            throw new traceur.runtime.GeneratorReturn(generator.yieldReturn);
          }
          throw traceur.runtime.StopIteration;
      }
    },
    close: function() {
      switch (generator.GState) {
        case 1:
          throw new Error('"close" on executing generator');
        case 3:
          return;
        case 0:
          generator.GState = 3;
          return;
        case 2:
          generator.GState = 1;
          generator.moveNext(undefined, 2);
          generator.GState = 3;
      }
    }
  });
};
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}
function inorder(t) {
  var $that = this;
  var $arguments = arguments;
  var $state = 72;
  var $storedException;
  var $finallyFallThrough;
  var $__1;
  var $__2;
  var $__3;
  var $__4;
  var $__5;
  var $__6;
  var e;
  var $G = {
    GState: 0,
    current: undefined,
    yieldReturn: undefined,
    innerFunction: function($yieldSent, $yieldAction) {
      while (true) switch ($state) {
        case 72:
          if (t) {
            $state = 24;
            break;
          } else {
            $state = 58;
            break;
          }
        case 24:
          $__1 = traceur.runtime.getIterator(inorder(t.left));
          $state = 25;
          break;
        case 25:
          $__3 = $__1.send;
          $state = 27;
          break;
        case 27:
          $yieldSent = void 0;
          $state = 29;
          break;
        case 29:
          $yieldAction = 0;
          $state = 31;
          break;
        case 31:
          if (true) {
            $state = 4;
            break;
          } else {
            $state = 22;
            $finallyFallThrough = 18;
            break;
          }
        case 4:
          switch ($yieldAction) {
            default:
              $state = 5;
              break;
            case 0:
              $state = 14;
              break;
            case 1:
              $state = 8;
              break;
            case 2:
              $state = 2;
              break;
          }
          break;
        case 15:
          $state = 5;
          break;
        case 14:
          if ($__3) $__2 = $__1.send($yieldSent); else $__2 = $__1.next();
          $state = 15;
          break;
        case 11:
          $state = 5;
          break;
        case 9:
          if ($__3) $__2 = $__1.throw ($yieldSent); else throw $yieldSent;
          $state = 11;
          break;
        case 8:
          $yieldAction = 0;
          $state = 9;
          break;
        case 3:
          $state = 22;
          $finallyFallThrough = -2;
          break;
        case 2:
          if ($__3) $__1.close();
          $state = 3;
          break;
        case 5:
          this.current = $__2;
          $state = 31;
          return true;
        case 21:
          e = $storedException;
          $state = 19;
          break;
        case 19:
          {
            if (!traceur.runtime.isStopIteration(e)) throw e;
            $yieldSent = e.value;
          }
          $state = 22;
          $finallyFallThrough = 18;
          break;
        case 22:
          {
            try {
              $__1.close();
            } catch (e) {}
          }
          $state = 23;
          break;
        case 18:
          this.current = t.label;
          $state = 33;
          return true;
        case 33:
          switch ($yieldAction) {
            default:
              $state = 37;
              break;
            case 1:
              $state = 38;
              break;
            case 2:
              $state = 34;
              break;
          }
          break;
        case 38:
          $yieldAction = 0;
          throw $yieldSent;
          $state = 34;
          break;
        case 34:
          $state = -2;
          break;
        case 37:
          $__4 = traceur.runtime.getIterator(inorder(t.right));
          $state = 65;
          break;
        case 65:
          $__6 = $__4.send;
          $state = 67;
          break;
        case 67:
          $yieldSent = void 0;
          $state = 69;
          break;
        case 69:
          $yieldAction = 0;
          $state = 71;
          break;
        case 71:
          if (true) {
            $state = 44;
            break;
          } else {
            $state = 62;
            $finallyFallThrough = 58;
            break;
          }
        case 44:
          switch ($yieldAction) {
            default:
              $state = 45;
              break;
            case 0:
              $state = 54;
              break;
            case 1:
              $state = 48;
              break;
            case 2:
              $state = 42;
              break;
          }
          break;
        case 55:
          $state = 45;
          break;
        case 54:
          if ($__6) $__5 = $__4.send($yieldSent); else $__5 = $__4.next();
          $state = 55;
          break;
        case 51:
          $state = 45;
          break;
        case 49:
          if ($__6) $__5 = $__4.throw ($yieldSent); else throw $yieldSent;
          $state = 51;
          break;
        case 48:
          $yieldAction = 0;
          $state = 49;
          break;
        case 43:
          $state = 62;
          $finallyFallThrough = -2;
          break;
        case 42:
          if ($__6) $__4.close();
          $state = 43;
          break;
        case 45:
          this.current = $__5;
          $state = 71;
          return true;
        case 61:
          e = $storedException;
          $state = 59;
          break;
        case 59:
          {
            if (!traceur.runtime.isStopIteration(e)) throw e;
            $yieldSent = e.value;
          }
          $state = 62;
          $finallyFallThrough = 58;
          break;
        case 62:
          {
            try {
              $__4.close();
            } catch (e) {}
          }
          $state = 63;
          break;
        case 23:
          $state = $finallyFallThrough;
          break;
        case 63:
          $state = $finallyFallThrough;
          break;
        case 58:
          $state = -2;
        case -2:
          return false;
        case -3:
          throw $storedException;
        default:
          throw "traceur compiler bug: invalid state in state machine" + $state;
      }
    },
    moveNext: function($yieldSent, $yieldAction) {
      while (true) try {
        return this.innerFunction($yieldSent, $yieldAction);
      } catch ($caughtException) {
        $storedException = $caughtException;
        switch ($state) {
          case 14:
            $state = 21;
            break;
          case 9:
            $state = 21;
            break;
          case 8:
            $state = 21;
            break;
          case 2:
            $state = 21;
            break;
          case 21:
            $state = 22;
            $finallyFallThrough = -3;
            break;
          case 19:
            $state = 22;
            $finallyFallThrough = -3;
            break;
          case 54:
            $state = 61;
            break;
          case 49:
            $state = 61;
            break;
          case 48:
            $state = 61;
            break;
          case 42:
            $state = 61;
            break;
          case 61:
            $state = 62;
            $finallyFallThrough = -3;
            break;
          case 59:
            $state = 62;
            $finallyFallThrough = -3;
            break;
          default:
            this.GState = 3;
            $state = -2;
            throw $storedException;
        }
      }
    }
  };
  return $__generatorWrap($G);
}
function make(array) {
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
module.exports = function() {
  try {
    throw undefined;
  } catch (tree) {
    tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
    console.log('generating tree labels in order:');
    {
      var $__0 = traceur.runtime.getIterator(inorder(tree));
      try {
        while (true) {
          try {
            throw undefined;
          } catch (node) {
            node = $__0.next();
            {
              console.log(node);
            }
          }
        }
      } catch (e) {
        if (!traceur.runtime.isStopIteration(e)) throw e;
      }
    }
  }
};


},{}],8:[function(require,module,exports){
module.exports = function() {
  {
    var $__0 = traceur.runtime.getIterator([1, 2, 3]);
    try {
      while (true) {
        try {
          throw undefined;
        } catch (element) {
          element = $__0.next();
          {
            console.log('element:', element);
          }
        }
      }
    } catch (e) {
      if (!traceur.runtime.isStopIteration(e)) throw e;
    }
  }
};


},{}],9:[function(require,module,exports){
module.exports = function(name) {
  var codes = arguments[1] !== (void 0) ? arguments[1]: 'JavaScript';
  var livesIn = arguments[2] !== (void 0) ? arguments[2]: 'USA';
  console.log('name: %s, codes: %s, lives in: %s', name, codes, livesIn);
};


},{}],10:[function(require,module,exports){
module.exports = function printList(listname) {
  for (var items = [], $__0 = 1; $__0 < arguments.length; $__0++) items[$__0 - 1] = arguments[$__0];
  console.log('list %s has the following items', listname);
  items.forEach(function(item) {
    console.log(item);
  });
};


},{}],11:[function(require,module,exports){
var $__toObject = function(value) {
  if (value == null) throw TypeError();
  return Object(value);
};
module.exports = function(numbers) {
  try {
    throw undefined;
  } catch (add) {
    add = function(x, y) {
      console.log('%d + %d = %d', x, y, x + y);
    };
    add.apply(null, $__toObject(numbers));
  }
};


},{}]},{},[1,2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIgbm9kZV9tb2R1bGVzL25vZGUtdHJhY2V1ci9zcmMvcnVudGltZS9ydW50aW1lLmpzIiwiIGV4YW1wbGUvc3JjL21haW4uanMiLCIgZXhhbXBsZS9zcmMvbWFrZS1tb25zdGVyLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2luZGV4LmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2Jsb2NrLXNjb3BlLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2Rlc3RydWN0dXJpbmcuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvZ2VuZXJhdG9ycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9pdGVyYXRvcnMuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvZGVmYXVsdC1wYXJhbWV0ZXJzLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL3Jlc3QtcGFyYW1ldGVycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9zcHJlYWQtb3BlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWlCQSxDQUFDLFFBQUEsQ0FBUyxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1IsOEVBQUE7QUFFSSxxRUFBQSxRQUFBLEVBQVUsT0FBQSxDQUFBLE1BQUE7QUFDVixxRUFBQSxnQkFBQSxFQUFrQixPQUFBLENBQUEsY0FBQTtBQUNsQixxRUFBQSxRQUFBLEVBQVUsT0FBQSxDQUFBLE1BQUE7QUFDVixxRUFBQSxxQkFBQSxFQUF1QixPQUFBLENBQUEsbUJBQUE7QUFDdkIscUVBQUEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFBLGNBQUE7QUFDbEIscUVBQUEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBOzJFQUV0QixTQUFBLENBQWlCLEtBQUEsQ0FBTztBQUN0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QyxRQUFBLENBQVUsSUFBQSxDQUFNO0FBQUUsV0FBQSxDQUFBLEdBQVcsQ0FBQyxJQUFBLENBQUE7QUFBQSxHQUFBLENBQUE7QUFBQSxDQUFBOzs7O2lCQ0YvQyxTQUFBLENBQVMsS0FBQSxDQUFPO0FBQ1IsSUFBQSxFQUFJLEtBQUEsR0FBUyxLQUFBLENBQ1gsTUFBTSxVQUFTLENBQUEsQ0FBQTtBQUNqQixRQUFPLE9BQU0sQ0FBQyxLQUFBLENBQUE7QUFBQSxDQUFBO0FBSHRCLE1BQUEsQ0FBQSxPQUFBLEVBQWlCLFNBQUEsQ0FBVSxPQUFBOzs7O1NBQ3pCLFNBQUEsQ0FBYSxDQUFBLENBQUcsRUFBQSxDQUFHO0FBQ2pCLGFBQUEsQ0FBQSxHQUFXLENBQUMsY0FBQSxDQUFnQixFQUFBLENBQUcsRUFBQSxDQUFHLEVBQUEsRUFBSSxFQUFBLENBQUE7QUFBQSxLQUFBO0FBRXhDLE9BQUEsQ0FBQSx3QkFBTyxPQUFBLENBQUEsQ0FBQTtBQUFBO0FBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDEyIFRyYWNldXIgQXV0aG9ycy5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4vKipcbiAqIFRoZSB0cmFjZXVyIHJ1bnRpbWUuXG4gKi9cbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciAkY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRmcmVlemUgPSBPYmplY3QuZnJlZXplO1xuICB2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZnVuY3Rpb24gbm9uRW51bSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBtZXRob2QgPSBub25FbnVtO1xuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsU3RyaW5nKFN0cmluZykge1xuICAgIC8vIEhhcm1vbnkgU3RyaW5nIEV4dHJhc1xuICAgIC8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6c3RyaW5nX2V4dHJhc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0cmluZy5wcm90b3R5cGUsIHtcbiAgICAgIHN0YXJ0c1dpdGg6IG1ldGhvZChmdW5jdGlvbihzKSB7XG4gICAgICAgcmV0dXJuIHRoaXMubGFzdEluZGV4T2YocywgMCkgPT09IDA7XG4gICAgICB9KSxcbiAgICAgIGVuZHNXaXRoOiBtZXRob2QoZnVuY3Rpb24ocykge1xuICAgICAgICB2YXIgdCA9IFN0cmluZyhzKTtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aCAtIHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbCA+PSAwICYmIHRoaXMuaW5kZXhPZih0LCBsKSA9PT0gbDtcbiAgICAgIH0pLFxuICAgICAgY29udGFpbnM6IG1ldGhvZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YocykgIT09IC0xO1xuICAgICAgfSksXG4gICAgICB0b0FycmF5OiBtZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGl0KCcnKTtcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyAxNS41LjMuNCBTdHJpbmcucmF3ICggY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gICAgJGRlZmluZVByb3BlcnR5KFN0cmluZywgJ3JhdycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihjYWxsc2l0ZSkge1xuICAgICAgICB2YXIgcmF3ID0gY2FsbHNpdGUucmF3O1xuICAgICAgICB2YXIgbGVuID0gcmF3Lmxlbmd0aCA+Pj4gMDsgIC8vIFRvVWludFxuICAgICAgICBpZiAobGVuID09PSAwKVxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgdmFyIHMgPSAnJztcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHMgKz0gcmF3W2ldO1xuICAgICAgICAgIGlmIChpICsgMSA9PT0gbGVuKVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgcyArPSBhcmd1bWVudHNbKytpXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjb3VudGVyID0gMDtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbmV3IHVuaXF1ZSBzdHJpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIG5ld1VuaXF1ZVN0cmluZygpIHtcbiAgICByZXR1cm4gJ19fJCcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTkpICsgJyQnICsgKytjb3VudGVyICsgJyRfXyc7XG4gIH1cblxuICB2YXIgbmFtZVJlID0gL15fX1xcJCg/OlxcZCspXFwkKD86XFxkKylcXCRfXyQvO1xuXG4gIHZhciBpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHByaXZhdGUgbmFtZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc3RyaW5nIE9wdGlvbmFsIHN0cmluZyB1c2VkIGZvciB0b1N0cmluZy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBOYW1lKHN0cmluZykge1xuICAgIGlmICghc3RyaW5nKVxuICAgICAgc3RyaW5nID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsIGludGVybmFsU3RyaW5nVmFsdWVOYW1lLCB7dmFsdWU6IG5ld1VuaXF1ZVN0cmluZygpfSk7XG5cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICAgICRmcmVlemUodG9TdHJpbmcpO1xuICAgICRmcmVlemUodG9TdHJpbmcucHJvdG90eXBlKTtcbiAgICB2YXIgdG9TdHJpbmdEZXNjciA9IG1ldGhvZCh0b1N0cmluZyk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsICd0b1N0cmluZycsIHRvU3RyaW5nRGVzY3IpO1xuXG4gICAgdGhpcy5wdWJsaWMgPSAkZnJlZXplKCRjcmVhdGUobnVsbCwge1xuICAgICAgdG9TdHJpbmc6IG1ldGhvZCgkZnJlZXplKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSkpXG4gICAgfSkpO1xuICAgICRmcmVlemUodGhpcy5wdWJsaWMudG9TdHJpbmcucHJvdG90eXBlKTtcblxuICAgICRmcmVlemUodGhpcyk7XG4gIH07XG4gICRmcmVlemUoTmFtZSk7XG4gICRmcmVlemUoTmFtZS5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFzc2VydE5hbWUodmFsKSB7XG4gICAgaWYgKCFOYW1lTW9kdWxlLmlzTmFtZSh2YWwpKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih2YWwgKyAnIGlzIG5vdCBhIE5hbWUnKTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBuYW1lLlxuXG4gIC8vIENvbGxlY3Rpb24gZ2V0dGVycyBhbmQgc2V0dGVyc1xuICB2YXIgZWxlbWVudERlbGV0ZU5hbWUgPSBuZXcgTmFtZSgpO1xuICB2YXIgZWxlbWVudEdldE5hbWUgPSBuZXcgTmFtZSgpO1xuICB2YXIgZWxlbWVudFNldE5hbWUgPSBuZXcgTmFtZSgpO1xuXG4gIC8vIEhBQ0s6IFdlIHNob3VsZCB1c2UgcnVudGltZS9tb2R1bGVzL3N0ZC9uYW1lLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG4gIHZhciBOYW1lTW9kdWxlID0gJGZyZWV6ZSh7XG4gICAgTmFtZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gbmV3IE5hbWUoc3RyKTtcbiAgICB9LFxuICAgIGlzTmFtZTogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBOYW1lO1xuICAgIH0sXG4gICAgZWxlbWVudEdldDogZWxlbWVudEdldE5hbWUsXG4gICAgZWxlbWVudFNldDogZWxlbWVudFNldE5hbWUsXG4gICAgZWxlbWVudERlbGV0ZTogZWxlbWVudERlbGV0ZU5hbWVcbiAgfSk7XG5cbiAgdmFyIGZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5maWx0ZXIpO1xuXG4gIC8vIE92ZXJyaWRlIGdldE93blByb3BlcnR5TmFtZXMgdG8gZmlsdGVyIG91dCBwcml2YXRlIG5hbWUga2V5cy5cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpIHtcbiAgICByZXR1cm4gZmlsdGVyKCRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCksIGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuICFuYW1lUmUudGVzdChzdHIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgT2JqZWN0LnByb3RvdHBlLmhhc093blByb3BlcnR5IHRvIGFsd2F5cyByZXR1cm4gZmFsc2UgZm9yXG4gIC8vIHByaXZhdGUgbmFtZXMuXG4gIGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkgfHwgbmFtZVJlLnRlc3QobmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudERlbGV0ZShvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAodHJhY2V1ci5vcHRpb25zLnRyYXBNZW1iZXJMb29rdXAgJiZcbiAgICAgICAgaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnREZWxldGVOYW1lKSkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5KG9iamVjdCwgZWxlbWVudERlbGV0ZU5hbWUpLmNhbGwob2JqZWN0LCBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGV0ZVByb3BlcnR5KG9iamVjdCwgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50R2V0KG9iamVjdCwgbmFtZSkge1xuICAgIGlmICh0cmFjZXVyLm9wdGlvbnMudHJhcE1lbWJlckxvb2t1cCAmJlxuICAgICAgICBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgZWxlbWVudEdldE5hbWUpKSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHkob2JqZWN0LCBlbGVtZW50R2V0TmFtZSkuY2FsbChvYmplY3QsIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvcGVydHkob2JqZWN0LCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRIYXMob2JqZWN0LCBuYW1lKSB7XG4gICAgLy8gU2hvdWxkIHdlIGFsbG93IHRyYXBwaW5nIHRoaXMgdG9vP1xuICAgIHJldHVybiBoYXMob2JqZWN0LCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRTZXQob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0cmFjZXVyLm9wdGlvbnMudHJhcE1lbWJlckxvb2t1cCAmJlxuICAgICAgICBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgZWxlbWVudFNldE5hbWUpKSB7XG4gICAgICBnZXRQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnRTZXROYW1lKS5jYWxsKG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm90TmFtZShzKSB7XG4gICAgaWYgKG5hbWVSZS50ZXN0KHMpKVxuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYWNjZXNzIHRvIHByaXZhdGUgbmFtZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKVxuICAgICAgcmV0dXJuIGRlbGV0ZSBvYmplY3RbbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV1dO1xuICAgIGlmIChuYW1lUmUudGVzdChuYW1lKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBkZWxldGUgb2JqZWN0W25hbWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKVxuICAgICAgcmV0dXJuIG9iamVjdFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV07XG4gICAgaWYgKG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gb2JqZWN0W25hbWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0gaW4gT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXMob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpIHx8IG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBuYW1lIGluIE9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyBhIGJpdCBzaW1wbGlzdGljLlxuICAvLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1zdHJhd21hbjpyZWZhY3RvcmluZ19wdXQjb2JqZWN0Ll9nZXRfc2V0X3Byb3BlcnR5X2J1aWx0LWluc1xuICBmdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9ICRnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV0pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IpXG4gICAgICAgIG9iamVjdFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV0gPSB2YWx1ZTtcbiAgICAgIGVsc2VcbiAgICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0sIG5vbkVudW0odmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0Tm90TmFtZShuYW1lKTtcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSkge1xuICAgICAgLy8gUHJpdmF0ZSBuYW1lcyBzaG91bGQgbmV2ZXIgYmUgZW51bWVyYWJsZS5cbiAgICAgIGlmIChkZXNjcmlwdG9yLmVudW1lcmFibGUpIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5jcmVhdGUoZGVzY3JpcHRvciwge1xuICAgICAgICAgIGVudW1lcmFibGU6IHt2YWx1ZTogZmFsc2V9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0sIGRlc2NyaXB0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnROb3ROYW1lKG5hbWUpO1xuICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gJGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpIHtcbiAgICB3aGlsZSAob2JqICE9PSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpO1xuICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIG9iaiA9ICRnZXRQcm90b3R5cGVPZihvYmopO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgbmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSlcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgYXNzZXJ0Tm90TmFtZShuYW1lKTtcbiAgICByZXR1cm4gJGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9seWZpbGxPYmplY3QoT2JqZWN0KSB7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jywge3ZhbHVlOiBkZWZpbmVQcm9wZXJ0eX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdkZWxldGVQcm9wZXJ0eScsIG1ldGhvZChkZWxldGVQcm9wZXJ0eSkpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRPd25Qcm9wZXJ0eU5hbWVzJyxcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiBnZXRPd25Qcm9wZXJ0eU5hbWVzfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldFByb3BlcnR5JywgbWV0aG9kKGdldFByb3BlcnR5KSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldFByb3BlcnR5RGVzY3JpcHRvcicsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZChnZXRQcm9wZXJ0eURlc2NyaXB0b3IpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnaGFzJywgbWV0aG9kKGhhcykpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdzZXRQcm9wZXJ0eScsIG1ldGhvZChzZXRQcm9wZXJ0eSkpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IGhhc093blByb3BlcnR5fSk7XG5cbiAgICAvLyBPYmplY3QuaXNcblxuICAgIC8vIFVubGlrZSA9PT0gdGhpcyByZXR1cm5zIHRydWUgZm9yIChOYU4sIE5hTikgYW5kIGZhbHNlIGZvciAoMCwgLTApLlxuICAgIGZ1bmN0aW9uIGlzKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAobGVmdCA9PT0gcmlnaHQpXG4gICAgICAgIHJldHVybiBsZWZ0ICE9PSAwIHx8IDEgLyBsZWZ0ID09PSAxIC8gcmlnaHQ7XG4gICAgICByZXR1cm4gbGVmdCAhPT0gbGVmdCAmJiByaWdodCAhPT0gcmlnaHQ7XG4gICAgfVxuXG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2lzJywgbWV0aG9kKGlzKSk7XG4gIH1cblxuICAvLyBJdGVyYXRvcnMuXG4gIHZhciBpdGVyYXRvck5hbWUgPSBuZXcgTmFtZSgnaXRlcmF0b3InKTtcblxuICB2YXIgSXRlck1vZHVsZSA9IHtcbiAgICBnZXQgaXRlcmF0b3IoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JOYW1lO1xuICAgIH1cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhlIHJlc3Qgb2YgQGl0ZXIgYW5kIG1vdmUgaXQgdG8gYSBkaWZmZXJlbnQgZmlsZSB0aGF0XG4gICAgLy8gZ2V0cyBjb21waWxlZC5cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvcihjb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGdldFByb3BlcnR5KGNvbGxlY3Rpb24sIGl0ZXJhdG9yTmFtZSkuY2FsbChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJdGVyYXRvcihvYmplY3QpIHtcbiAgICAvLyBHZW5lcmF0b3IgaW5zdGFuY2VzIGFyZSBpdGVyYWJsZS5cbiAgICBzZXRQcm9wZXJ0eShvYmplY3QsIGl0ZXJhdG9yTmFtZSwgcmV0dXJuVGhpcyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsQXJyYXkoQXJyYXkpIHtcbiAgICAvLyBNYWtlIGFycmF5cyBpdGVyYWJsZS5cbiAgICBkZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIEl0ZXJNb2R1bGUuaXRlcmF0b3IsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXgrK107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IFN0b3BJdGVyYXRpb25Mb2NhbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSk7XG4gIH1cblxuICAvLyBHZW5lcmF0b3JzOiBHZW5lcmF0b3JSZXR1cm5cbiAgdmFyIEdlbmVyYXRvclJldHVybkxvY2FsO1xuXG4gIGZ1bmN0aW9uIHNldEdlbmVyYXRvclJldHVybihHZW5lcmF0b3JSZXR1cm4sIGdsb2JhbCkge1xuICAgIHN3aXRjaCAodHlwZW9mIEdlbmVyYXRvclJldHVybikge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAvLyBTdG9wSXRlcmF0aW9uTG9jYWwgaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbCBtZWFucyB3ZSBwcm9iYWJseVxuICAgICAgICAvLyB3YW50IHRvIG1haW50YWluIHRoYXQgaW52YXJpYW50IHdoZW4gd2UgY2hhbmdlIEdlbmVyYXRvclJldHVybkxvY2FsLlxuICAgICAgICBpZiAodHlwZW9mIEdlbmVyYXRvclJldHVybkxvY2FsID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBTdG9wSXRlcmF0aW9uTG9jYWwgaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbCkge1xuICAgICAgICAgIEdlbmVyYXRvclJldHVybkxvY2FsID0gR2VuZXJhdG9yUmV0dXJuO1xuICAgICAgICAgIHNldFN0b3BJdGVyYXRpb24odW5kZWZpbmVkLCBnbG9iYWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBHZW5lcmF0b3JSZXR1cm5Mb2NhbCA9IEdlbmVyYXRvclJldHVybjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgR2VuZXJhdG9yUmV0dXJuTG9jYWwgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICAgIH07XG4gICAgICAgIEdlbmVyYXRvclJldHVybkxvY2FsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tvYmplY3QgR2VuZXJhdG9yUmV0dXJuICcgKyB0aGlzLnZhbHVlICsgJ10nO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29uc3RydWN0b3IgZnVuY3Rpb24gcmVxdWlyZWQnKTtcbiAgICB9XG4gIH1cblxuICBzZXRHZW5lcmF0b3JSZXR1cm4oKTtcblxuICAvLyBHZW5lcmF0b3JzOiBTdG9wSXRlcmF0aW9uXG4gIHZhciBTdG9wSXRlcmF0aW9uTG9jYWw7XG5cbiAgZnVuY3Rpb24gaXNTdG9wSXRlcmF0aW9uKHgpIHtcbiAgICByZXR1cm4geCA9PT0gU3RvcEl0ZXJhdGlvbkxvY2FsIHx8IHggaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0b3BJdGVyYXRpb24oU3RvcEl0ZXJhdGlvbiwgZ2xvYmFsKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgU3RvcEl0ZXJhdGlvbikge1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsID0gU3RvcEl0ZXJhdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBTdG9wSXRlcmF0aW9uTG9jYWwgPSBuZXcgR2VuZXJhdG9yUmV0dXJuTG9jYWwoKTtcbiAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdbb2JqZWN0IFN0b3BJdGVyYXRpb25dJztcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFN0b3BJdGVyYXRpb24gdHlwZS4nKTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbClcbiAgICAgIGdsb2JhbC5TdG9wSXRlcmF0aW9uID0gU3RvcEl0ZXJhdGlvbjtcbiAgfVxuXG4gIHNldFN0b3BJdGVyYXRpb24oZ2xvYmFsLlN0b3BJdGVyYXRpb24sIGdsb2JhbCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbmNlbGxlclxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIERlZmVycmVkKGNhbmNlbGxlcikge1xuICAgIHRoaXMuY2FuY2VsbGVyXyA9IGNhbmNlbGxlcjtcbiAgICB0aGlzLmxpc3RlbmVyc18gPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeShzZWxmKSB7XG4gICAgd2hpbGUgKHNlbGYubGlzdGVuZXJzXy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHNlbGYubGlzdGVuZXJzXy5zaGlmdCgpO1xuICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLnJlc3VsdF9bMV0pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmVycmJhY2spXG4gICAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQgPSBjdXJyZW50LmVycmJhY2suY2FsbCh1bmRlZmluZWQsIHNlbGYucmVzdWx0X1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhbGxiYWNrKVxuICAgICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gY3VycmVudC5jYWxsYmFjay5jYWxsKHVuZGVmaW5lZCwgc2VsZi5yZXN1bHRfWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudC5kZWZlcnJlZC5jYWxsYmFjayhjdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY3VycmVudC5kZWZlcnJlZC5lcnJiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHVudXNlZCkge31cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaXJlKHNlbGYsIHZhbHVlLCBpc0Vycm9yKSB7XG4gICAgaWYgKHNlbGYuZmlyZWRfKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGZpcmVkJyk7XG5cbiAgICBzZWxmLmZpcmVkXyA9IHRydWU7XG4gICAgc2VsZi5yZXN1bHRfID0gW3ZhbHVlLCBpc0Vycm9yXTtcbiAgICBub3RpZnkoc2VsZik7XG4gIH1cblxuICBEZWZlcnJlZC5wcm90b3R5cGUgPSB7XG4gICAgZmlyZWRfOiBmYWxzZSxcbiAgICByZXN1bHRfOiB1bmRlZmluZWQsXG5cbiAgICBjcmVhdGVQcm9taXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7dGhlbjogdGhpcy50aGVuLmJpbmQodGhpcyksIGNhbmNlbDogdGhpcy5jYW5jZWwuYmluZCh0aGlzKX07XG4gICAgfSxcblxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZmlyZSh0aGlzLCB2YWx1ZSwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBlcnJiYWNrOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGZpcmUodGhpcywgZXJyLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgdGhlbjogZnVuY3Rpb24oY2FsbGJhY2ssIGVycmJhY2spIHtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgRGVmZXJyZWQodGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmxpc3RlbmVyc18ucHVzaCh7XG4gICAgICAgIGRlZmVycmVkOiByZXN1bHQsXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgZXJyYmFjazogZXJyYmFja1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5maXJlZF8pXG4gICAgICAgIG5vdGlmeSh0aGlzKTtcbiAgICAgIHJldHVybiByZXN1bHQuY3JlYXRlUHJvbWlzZSgpO1xuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZmlyZWRfKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgZmluaXNoZWQnKTtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAodGhpcy5jYW5jZWxsZXJfKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY2FuY2VsbGVyXyh0aGlzKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICByZXN1bHQgPSBuZXcgRXJyb3IocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBFcnJvcignY2FuY2VsbGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZmlyZWRfKSB7XG4gICAgICAgIHRoaXMucmVzdWx0XyA9IFtyZXN1bHQsIHRydWVdO1xuICAgICAgICBub3RpZnkodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBtb2R1bGVzID0gJGZyZWV6ZSh7XG4gICAgZ2V0ICdAbmFtZScoKSB7XG4gICAgICByZXR1cm4gTmFtZU1vZHVsZTtcbiAgICB9LFxuICAgIGdldCAnQGl0ZXInKCkge1xuICAgICAgcmV0dXJuIEl0ZXJNb2R1bGU7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPKGFydik6IERvbid0IGV4cG9ydCB0aGlzLlxuICBnbG9iYWwuRGVmZXJyZWQgPSBEZWZlcnJlZDtcblxuICBmdW5jdGlvbiBzZXR1cEdsb2JhbHMoZ2xvYmFsKSB7XG4gICAgcG9seWZpbGxTdHJpbmcoZ2xvYmFsLlN0cmluZyk7XG4gICAgcG9seWZpbGxPYmplY3QoZ2xvYmFsLk9iamVjdCk7XG4gICAgcG9seWZpbGxBcnJheShnbG9iYWwuQXJyYXkpO1xuICB9XG5cbiAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG5cbiAgLy8gUmV0dXJuIHRoZSBydW50aW1lIG5hbWVzcGFjZS5cbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgRGVmZXJyZWQ6IERlZmVycmVkLFxuICAgIEdlbmVyYXRvclJldHVybjogR2VuZXJhdG9yUmV0dXJuTG9jYWwsXG4gICAgc2V0R2VuZXJhdG9yUmV0dXJuOiBzZXRHZW5lcmF0b3JSZXR1cm4sXG4gICAgU3RvcEl0ZXJhdGlvbjogU3RvcEl0ZXJhdGlvbkxvY2FsLFxuICAgIHNldFN0b3BJdGVyYXRpb246IHNldFN0b3BJdGVyYXRpb24sXG4gICAgaXNTdG9wSXRlcmF0aW9uOiBpc1N0b3BJdGVyYXRpb24sXG4gICAgYWRkSXRlcmF0b3I6IGFkZEl0ZXJhdG9yLFxuICAgIGFzc2VydE5hbWU6IGFzc2VydE5hbWUsXG4gICAgY3JlYXRlTmFtZTogTmFtZU1vZHVsZS5OYW1lLFxuICAgIGRlbGV0ZVByb3BlcnR5OiBkZWxldGVQcm9wZXJ0eSxcbiAgICBlbGVtZW50RGVsZXRlOiBlbGVtZW50RGVsZXRlLFxuICAgIGVsZW1lbnRHZXQ6IGVsZW1lbnRHZXQsXG4gICAgZWxlbWVudEhhczogZWxlbWVudEhhcyxcbiAgICBlbGVtZW50U2V0OiBlbGVtZW50U2V0LFxuICAgIGdldEl0ZXJhdG9yOiBnZXRJdGVyYXRvcixcbiAgICBnZXRQcm9wZXJ0eTogZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHk6IHNldFByb3BlcnR5LFxuICAgIHNldHVwR2xvYmFsczogc2V0dXBHbG9iYWxzLFxuICAgIGhhczogaGFzLFxuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gIH07XG5cbiAgLy8gVGhpcyBmaWxlIGlzIHNvbWV0aW1lcyB1c2VkIHdpdGhvdXQgdHJhY2V1ci5qcy5cbiAgaWYgKHR5cGVvZiB0cmFjZXVyICE9PSAndW5kZWZpbmVkJylcbiAgICB0cmFjZXVyLnNldFJ1bnRpbWUocnVudGltZSk7XG4gIGVsc2VcbiAgICBnbG9iYWwudHJhY2V1ciA9IHtydW50aW1lOiBydW50aW1lfTtcblxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzKTtcbiIsImNvbnNvbGUubG9nKCdzdGFydGluZyBlczZpZnkgZGVtbycpO1xuXG5sZXQgbWFrZU1vbnN0ZXIgICA9ICByZXF1aXJlKCcuL21ha2UtbW9uc3RlcicpO1xubGV0IHsgXG4gICAgYmxvY2tTY29wZVxuICAsIGRlc3RydWN0dXJpbmdcbiAgLCBnZW5lcmF0b3JzIFxuICAsIGl0ZXJhdG9yc1xuICAsIGRlZmF1bHRQYXJhbWV0ZXJzXG4gICwgcmVzdFBhcmFtZXRlcnNcbiAgLCBzcHJlYWRPcGVyYXRvclxufSA9IHJlcXVpcmUoJy4vZmVhdHVyZXMnKTtcblxuYmxvY2tTY29wZSgpO1xuZGVzdHJ1Y3R1cmluZygpO1xuZ2VuZXJhdG9ycygpO1xuY29uc3QgbW9uc3RlciA9IG1ha2VNb25zdGVyKDMsIDQsICdjb29raWUnKTtcblxuY29uc29sZS5sb2coJ0kgYW0gdGhlICVzIG1vbnN0ZXInLCBtb25zdGVyLm5hbWUpO1xubW9uc3Rlci5hdHRhY2soJ2Nvb2tpZSB0aGllZicpO1xuXG5pdGVyYXRvcnMoKTtcblxuZGVmYXVsdFBhcmFtZXRlcnMoJ0hlaW56IE11ZWxsZWltZXInLCAnQ29ib2wnLCAnR2VybWFueScpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ1Rob3JzdGVuIExvcmVueicpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ0dyYW5kcGEgT3R0bycsICdKYXZhJyk7XG5cbnJlc3RQYXJhbWV0ZXJzKCdhbmltYWxzJywgJ2NhdCcsICdkb2cnLCAnemVicmEnLCAnZ2lyYWZmZScsICdsaW9uJyk7XG5cbnNwcmVhZE9wZXJhdG9yKFsgMywgNCBdKTtcbiIsImNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIG5hbWUpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgYXR0YWNrKGNoYXJhY3Rlcikge1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcnLCBjaGFyYWN0ZXIpO1xuICB9XG59XG5cbmNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBuYW1lKSB7XG4gICAgc3VwZXIoeCwgeSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhlYWx0aF8gPSAxMDA7XG4gIH1cblxuICBhdHRhY2soY2hhcmFjdGVyKSB7XG4gICAgc3VwZXIuYXR0YWNrKGNoYXJhY3Rlcik7XG4gIH1cblxuICBnZXQgaXNBbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxuICBnZXQgaGVhbHRoKCkgeyByZXR1cm4gdGhpcy5oZWFsdGhfOyB9XG4gIHNldCBoZWFsdGgodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ0hlYWx0aCBtdXN0IGJlIG5vbi1uZWdhdGl2ZS4nKTtcbiAgICB0aGlzLmhlYWx0aF8gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4LCB5LCBuYW1lKSB7XG4gIHJldHVybiBuZXcgTW9uc3Rlcih4LCB5LCBuYW1lKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBibG9ja1Njb3BlICAgICAgICA6ICByZXF1aXJlKCcuL2Jsb2NrLXNjb3BlJylcbiAgLCBkZXN0cnVjdHVyaW5nICAgICA6ICByZXF1aXJlKCcuL2Rlc3RydWN0dXJpbmcnKVxuICAsIGdlbmVyYXRvcnMgICAgICAgIDogIHJlcXVpcmUoJy4vZ2VuZXJhdG9ycycpXG4gICwgaXRlcmF0b3JzICAgICAgICAgOiAgcmVxdWlyZSgnLi9pdGVyYXRvcnMnKVxuICAsIGRlZmF1bHRQYXJhbWV0ZXJzIDogIHJlcXVpcmUoJy4vZGVmYXVsdC1wYXJhbWV0ZXJzJylcbiAgLCByZXN0UGFyYW1ldGVycyA6ICByZXF1aXJlKCcuL3Jlc3QtcGFyYW1ldGVycycpXG4gICwgc3ByZWFkT3BlcmF0b3IgOiAgcmVxdWlyZSgnLi9zcHJlYWQtb3BlcmF0b3InKVxufTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhID0gMlxuICAgICwgYiA9IDNcbiAgICA7XG4gIHtcbiAgICBsZXQgdG1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdG1wO1xuICB9XG4gIGNvbnNvbGUubG9nKCd0bXAgaXMgdW5kZWZpbmVkOiAnLCB0eXBlb2YgdG1wID09ICd1bmRlZmluZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFthLCBbYl0sIGMsIGRdID0gWydoZWxsbycsIFsnLCAnLCAnanVuayddLCBbJ3dvcmxkJ11dO1xuICBjb25zb2xlLmxvZyhhICsgYiArIGMpOyAvLyBoZWxsbyB3b3JsZFxufTtcbiIsIiAvLyBBIGJpbmFyeSB0cmVlIGNsYXNzLlxuZnVuY3Rpb24gVHJlZShsZWZ0LCBsYWJlbCwgcmlnaHQpIHtcbiAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG59XG5cbi8vIEEgcmVjdXJzaXZlIGdlbmVyYXRvciB0aGF0IGl0ZXJhdGVzIHRoZSBUcmVlIGxhYmVscyBpbi1vcmRlci5cbmZ1bmN0aW9uKiBpbm9yZGVyKHQpIHtcbiAgaWYgKHQpIHtcbiAgICB5aWVsZCogaW5vcmRlcih0LmxlZnQpO1xuICAgIHlpZWxkIHQubGFiZWw7XG4gICAgeWllbGQqIGlub3JkZXIodC5yaWdodCk7XG4gIH1cbn1cblxuLy8gTWFrZSBhIHRyZWVcbmZ1bmN0aW9uIG1ha2UoYXJyYXkpIHtcbiAgLy8gTGVhZiBub2RlOlxuICBpZiAoYXJyYXkubGVuZ3RoID09IDEpIHJldHVybiBuZXcgVHJlZShudWxsLCBhcnJheVswXSwgbnVsbCk7XG4gIHJldHVybiBuZXcgVHJlZShtYWtlKGFycmF5WzBdKSwgYXJyYXlbMV0sIG1ha2UoYXJyYXlbMl0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0cmVlID0gbWFrZShbW1snYSddLCAnYicsIFsnYyddXSwgJ2QnLCBbWydlJ10sICdmJywgWydnJ11dXSk7XG4gIGNvbnNvbGUubG9nKCdnZW5lcmF0aW5nIHRyZWUgbGFiZWxzIGluIG9yZGVyOicpO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciBpdFxuICBmb3IgKGxldCBub2RlIG9mIGlub3JkZXIodHJlZSkpIHtcbiAgICBjb25zb2xlLmxvZyhub2RlKTsgLy8gYSwgYiwgYywgZCwgLi4uXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBbMSwgMiwgM10pIHtcbiAgICBjb25zb2xlLmxvZygnZWxlbWVudDonLCBlbGVtZW50KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUsIGNvZGVzID0gJ0phdmFTY3JpcHQnLCBsaXZlc0luID0gJ1VTQScpIHtcbiAgY29uc29sZS5sb2coJ25hbWU6ICVzLCBjb2RlczogJXMsIGxpdmVzIGluOiAlcycsIG5hbWUsIGNvZGVzLCBsaXZlc0luKTtcbn07XG4iLCIgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcmludExpc3QobGlzdG5hbWUsIC4uLml0ZW1zKSB7XG4gICBjb25zb2xlLmxvZygnbGlzdCAlcyBoYXMgdGhlIGZvbGxvd2luZyBpdGVtcycsIGxpc3RuYW1lKTtcbiAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgY29uc29sZS5sb2coaXRlbSk7IH0pO1xuIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChudW1iZXJzKSB7XG4gIGZ1bmN0aW9uIGFkZCh4LCB5KSB7XG4gICAgY29uc29sZS5sb2coJyVkICsgJWQgPSAlZCcsIHgsIHksIHggKyB5KTtcbiAgfVxuICBhZGQoLi4ubnVtYmVycyk7XG59O1xuIl19
;