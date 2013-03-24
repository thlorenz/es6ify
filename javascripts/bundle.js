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
var $__0 = require('./features'), blockScope = $__0.blockScope, destructuring = $__0.destructuring, generators = $__0.generators, iterators = $__0.iterators, defaultParameters = $__0.defaultParameters, restParameters = $__0.restParameters, spreadOperator = $__0.spreadOperator, arrowFunctions = $__0.arrowFunctions;
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
arrowFunctions('a messsage from your personal arrow function');


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
  spreadOperator: require('./spread-operator'),
  arrowFunctions: require('./arrow-functions')
};


},{"./block-scope":5,"./destructuring":6,"./generators":7,"./iterators":8,"./default-parameters":9,"./rest-parameters":10,"./spread-operator":11,"./arrow-functions":12}],8:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
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


},{}],12:[function(require,module,exports){
module.exports = (function(msg) {
  return console.log(msg);
});


},{}]},{},[1,2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIgbm9kZV9tb2R1bGVzL25vZGUtdHJhY2V1ci9zcmMvcnVudGltZS9ydW50aW1lLmpzIiwiIGV4YW1wbGUvc3JjL21haW4uanMiLCIgZXhhbXBsZS9zcmMvbWFrZS1tb25zdGVyLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2luZGV4LmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2l0ZXJhdG9ycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9kZXN0cnVjdHVyaW5nLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2dlbmVyYXRvcnMuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvYmxvY2stc2NvcGUuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvZGVmYXVsdC1wYXJhbWV0ZXJzLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL3Jlc3QtcGFyYW1ldGVycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9zcHJlYWQtb3BlcmF0b3IuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvYXJyb3ctZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFpQkEsQ0FBQyxRQUFBLENBQVMsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNSLDhFQUFBO0FBRUkscUVBQUEsUUFBQSxFQUFVLE9BQUEsQ0FBQSxNQUFBO0FBQ1YscUVBQUEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFBLGNBQUE7QUFDbEIscUVBQUEsUUFBQSxFQUFVLE9BQUEsQ0FBQSxNQUFBO0FBQ1YscUVBQUEscUJBQUEsRUFBdUIsT0FBQSxDQUFBLG1CQUFBO0FBQ3ZCLHFFQUFBLGdCQUFBLEVBQWtCLE9BQUEsQ0FBQSxjQUFBO0FBQ2xCLHFFQUFBLGdCQUFBLEVBQWtCLE9BQUEsQ0FBQSxTQUFB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QUEsa0JBQ0osVUFBQSxDQUFBLE1BQUEsMkJBQ29DLFVBQUE7QUFGcEUsU0FBQSxDQUFBLEdBQVcsQ0FBQyxpQ0FBQSxDQUFtQyxTQUFBLENBQUE7QUFDL0MsT0FBQSxDQUFBLE9BQWEsQ0FBQyxRQUFBLENBQVUsSUFBQSxDQUFNO0FBQUUsV0FBQSxDQUFBLEdBQVcsQ0FBQyxJQUFBLENBQUE7QUFBQSxHQUFBLENBQUE7QUFBQSxDQUFBOzs7O2lCQ0YvQyxTQUFBLENBQVMsS0FBQSxDQUFPO0FBQ1IsSUFBQSxFQUFJLEtBQUEsR0FBUyxLQUFBLENBQ1gsTUFBTSxVQUFTLENBQUEsQ0FBQTtBQUNqQixRQUFPLE9BQU0sQ0FBQyxLQUFBLENBQUE7QUFBQSxDQUFBO0FBSHRCLE1BQUEsQ0FBQSxPQUFBLEVBQWlCLFNBQUEsQ0FBVSxPQUFBOzs7O1NBQ3pCLFNBQUEsQ0FBYSxDQUFBLENBQUcsRUFBQSxDQUFHO0FBQ2pCLGFBQUEsQ0FBQSxHQUFXLENBQUMsY0FBQSxDQUFnQixFQUFBLENBQUcsRUFBQSxDQUFHLEVBQUEsRUFBSSxFQUFBLENBQUE7QUFBQSxLQUFBO0FBRXhDLE9BQUEsQ0FBQSx3QkFBTyxPQUFBLENBQUEsQ0FBQTtBQUFBO0FBQUEsQ0FBQTs7OztBQ0pULE1BQUEsQ0FBQSxPQUFBLGFBQWlCLEdBQUE7UUFBTyxRQUFBLENBQUEsR0FBVyxDQUFDLEdBQUEsQ0FBQTtBQUFBLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDEyIFRyYWNldXIgQXV0aG9ycy5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4vKipcbiAqIFRoZSB0cmFjZXVyIHJ1bnRpbWUuXG4gKi9cbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciAkY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRmcmVlemUgPSBPYmplY3QuZnJlZXplO1xuICB2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZnVuY3Rpb24gbm9uRW51bSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBtZXRob2QgPSBub25FbnVtO1xuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsU3RyaW5nKFN0cmluZykge1xuICAgIC8vIEhhcm1vbnkgU3RyaW5nIEV4dHJhc1xuICAgIC8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6c3RyaW5nX2V4dHJhc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN0cmluZy5wcm90b3R5cGUsIHtcbiAgICAgIHN0YXJ0c1dpdGg6IG1ldGhvZChmdW5jdGlvbihzKSB7XG4gICAgICAgcmV0dXJuIHRoaXMubGFzdEluZGV4T2YocywgMCkgPT09IDA7XG4gICAgICB9KSxcbiAgICAgIGVuZHNXaXRoOiBtZXRob2QoZnVuY3Rpb24ocykge1xuICAgICAgICB2YXIgdCA9IFN0cmluZyhzKTtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aCAtIHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbCA+PSAwICYmIHRoaXMuaW5kZXhPZih0LCBsKSA9PT0gbDtcbiAgICAgIH0pLFxuICAgICAgY29udGFpbnM6IG1ldGhvZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YocykgIT09IC0xO1xuICAgICAgfSksXG4gICAgICB0b0FycmF5OiBtZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGl0KCcnKTtcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyAxNS41LjMuNCBTdHJpbmcucmF3ICggY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gICAgJGRlZmluZVByb3BlcnR5KFN0cmluZywgJ3JhdycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihjYWxsc2l0ZSkge1xuICAgICAgICB2YXIgcmF3ID0gY2FsbHNpdGUucmF3O1xuICAgICAgICB2YXIgbGVuID0gcmF3Lmxlbmd0aCA+Pj4gMDsgIC8vIFRvVWludFxuICAgICAgICBpZiAobGVuID09PSAwKVxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgdmFyIHMgPSAnJztcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHMgKz0gcmF3W2ldO1xuICAgICAgICAgIGlmIChpICsgMSA9PT0gbGVuKVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgcyArPSBhcmd1bWVudHNbKytpXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjb3VudGVyID0gMDtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbmV3IHVuaXF1ZSBzdHJpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIG5ld1VuaXF1ZVN0cmluZygpIHtcbiAgICByZXR1cm4gJ19fJCcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTkpICsgJyQnICsgKytjb3VudGVyICsgJyRfXyc7XG4gIH1cblxuICB2YXIgbmFtZVJlID0gL15fX1xcJCg/OlxcZCspXFwkKD86XFxkKylcXCRfXyQvO1xuXG4gIHZhciBpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHByaXZhdGUgbmFtZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc3RyaW5nIE9wdGlvbmFsIHN0cmluZyB1c2VkIGZvciB0b1N0cmluZy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBOYW1lKHN0cmluZykge1xuICAgIGlmICghc3RyaW5nKVxuICAgICAgc3RyaW5nID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsIGludGVybmFsU3RyaW5nVmFsdWVOYW1lLCB7dmFsdWU6IG5ld1VuaXF1ZVN0cmluZygpfSk7XG5cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICAgICRmcmVlemUodG9TdHJpbmcpO1xuICAgICRmcmVlemUodG9TdHJpbmcucHJvdG90eXBlKTtcbiAgICB2YXIgdG9TdHJpbmdEZXNjciA9IG1ldGhvZCh0b1N0cmluZyk7XG4gICAgJGRlZmluZVByb3BlcnR5KHRoaXMsICd0b1N0cmluZycsIHRvU3RyaW5nRGVzY3IpO1xuXG4gICAgdGhpcy5wdWJsaWMgPSAkZnJlZXplKCRjcmVhdGUobnVsbCwge1xuICAgICAgdG9TdHJpbmc6IG1ldGhvZCgkZnJlZXplKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSkpXG4gICAgfSkpO1xuICAgICRmcmVlemUodGhpcy5wdWJsaWMudG9TdHJpbmcucHJvdG90eXBlKTtcblxuICAgICRmcmVlemUodGhpcyk7XG4gIH07XG4gICRmcmVlemUoTmFtZSk7XG4gICRmcmVlemUoTmFtZS5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFzc2VydE5hbWUodmFsKSB7XG4gICAgaWYgKCFOYW1lTW9kdWxlLmlzTmFtZSh2YWwpKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih2YWwgKyAnIGlzIG5vdCBhIE5hbWUnKTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBuYW1lLlxuXG4gIC8vIENvbGxlY3Rpb24gZ2V0dGVycyBhbmQgc2V0dGVyc1xuICB2YXIgZWxlbWVudERlbGV0ZU5hbWUgPSBuZXcgTmFtZSgpO1xuICB2YXIgZWxlbWVudEdldE5hbWUgPSBuZXcgTmFtZSgpO1xuICB2YXIgZWxlbWVudFNldE5hbWUgPSBuZXcgTmFtZSgpO1xuXG4gIC8vIEhBQ0s6IFdlIHNob3VsZCB1c2UgcnVudGltZS9tb2R1bGVzL3N0ZC9uYW1lLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG4gIHZhciBOYW1lTW9kdWxlID0gJGZyZWV6ZSh7XG4gICAgTmFtZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gbmV3IE5hbWUoc3RyKTtcbiAgICB9LFxuICAgIGlzTmFtZTogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBOYW1lO1xuICAgIH0sXG4gICAgZWxlbWVudEdldDogZWxlbWVudEdldE5hbWUsXG4gICAgZWxlbWVudFNldDogZWxlbWVudFNldE5hbWUsXG4gICAgZWxlbWVudERlbGV0ZTogZWxlbWVudERlbGV0ZU5hbWVcbiAgfSk7XG5cbiAgdmFyIGZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5maWx0ZXIpO1xuXG4gIC8vIE92ZXJyaWRlIGdldE93blByb3BlcnR5TmFtZXMgdG8gZmlsdGVyIG91dCBwcml2YXRlIG5hbWUga2V5cy5cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpIHtcbiAgICByZXR1cm4gZmlsdGVyKCRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCksIGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuICFuYW1lUmUudGVzdChzdHIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgT2JqZWN0LnByb3RvdHBlLmhhc093blByb3BlcnR5IHRvIGFsd2F5cyByZXR1cm4gZmFsc2UgZm9yXG4gIC8vIHByaXZhdGUgbmFtZXMuXG4gIGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkgfHwgbmFtZVJlLnRlc3QobmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudERlbGV0ZShvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAodHJhY2V1ci5vcHRpb25zLnRyYXBNZW1iZXJMb29rdXAgJiZcbiAgICAgICAgaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnREZWxldGVOYW1lKSkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5KG9iamVjdCwgZWxlbWVudERlbGV0ZU5hbWUpLmNhbGwob2JqZWN0LCBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGV0ZVByb3BlcnR5KG9iamVjdCwgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50R2V0KG9iamVjdCwgbmFtZSkge1xuICAgIGlmICh0cmFjZXVyLm9wdGlvbnMudHJhcE1lbWJlckxvb2t1cCAmJlxuICAgICAgICBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgZWxlbWVudEdldE5hbWUpKSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHkob2JqZWN0LCBlbGVtZW50R2V0TmFtZSkuY2FsbChvYmplY3QsIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvcGVydHkob2JqZWN0LCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRIYXMob2JqZWN0LCBuYW1lKSB7XG4gICAgLy8gU2hvdWxkIHdlIGFsbG93IHRyYXBwaW5nIHRoaXMgdG9vP1xuICAgIHJldHVybiBoYXMob2JqZWN0LCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRTZXQob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0cmFjZXVyLm9wdGlvbnMudHJhcE1lbWJlckxvb2t1cCAmJlxuICAgICAgICBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgZWxlbWVudFNldE5hbWUpKSB7XG4gICAgICBnZXRQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnRTZXROYW1lKS5jYWxsKG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm90TmFtZShzKSB7XG4gICAgaWYgKG5hbWVSZS50ZXN0KHMpKVxuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYWNjZXNzIHRvIHByaXZhdGUgbmFtZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKVxuICAgICAgcmV0dXJuIGRlbGV0ZSBvYmplY3RbbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV1dO1xuICAgIGlmIChuYW1lUmUudGVzdChuYW1lKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBkZWxldGUgb2JqZWN0W25hbWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKVxuICAgICAgcmV0dXJuIG9iamVjdFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV07XG4gICAgaWYgKG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gb2JqZWN0W25hbWVdO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0gaW4gT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXMob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpIHx8IG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBuYW1lIGluIE9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgLy8gVGhpcyBpcyBhIGJpdCBzaW1wbGlzdGljLlxuICAvLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1zdHJhd21hbjpyZWZhY3RvcmluZ19wdXQjb2JqZWN0Ll9nZXRfc2V0X3Byb3BlcnR5X2J1aWx0LWluc1xuICBmdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9ICRnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV0pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IpXG4gICAgICAgIG9iamVjdFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV0gPSB2YWx1ZTtcbiAgICAgIGVsc2VcbiAgICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0sIG5vbkVudW0odmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0Tm90TmFtZShuYW1lKTtcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSkge1xuICAgICAgLy8gUHJpdmF0ZSBuYW1lcyBzaG91bGQgbmV2ZXIgYmUgZW51bWVyYWJsZS5cbiAgICAgIGlmIChkZXNjcmlwdG9yLmVudW1lcmFibGUpIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5jcmVhdGUoZGVzY3JpcHRvciwge1xuICAgICAgICAgIGVudW1lcmFibGU6IHt2YWx1ZTogZmFsc2V9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV0sIGRlc2NyaXB0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnROb3ROYW1lKG5hbWUpO1xuICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gJGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpIHtcbiAgICB3aGlsZSAob2JqICE9PSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpO1xuICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIG9iaiA9ICRnZXRQcm90b3R5cGVPZihvYmopO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgbmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSlcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgYXNzZXJ0Tm90TmFtZShuYW1lKTtcbiAgICByZXR1cm4gJGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9seWZpbGxPYmplY3QoT2JqZWN0KSB7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jywge3ZhbHVlOiBkZWZpbmVQcm9wZXJ0eX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdkZWxldGVQcm9wZXJ0eScsIG1ldGhvZChkZWxldGVQcm9wZXJ0eSkpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRPd25Qcm9wZXJ0eU5hbWVzJyxcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiBnZXRPd25Qcm9wZXJ0eU5hbWVzfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldFByb3BlcnR5JywgbWV0aG9kKGdldFByb3BlcnR5KSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldFByb3BlcnR5RGVzY3JpcHRvcicsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZChnZXRQcm9wZXJ0eURlc2NyaXB0b3IpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnaGFzJywgbWV0aG9kKGhhcykpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdzZXRQcm9wZXJ0eScsIG1ldGhvZChzZXRQcm9wZXJ0eSkpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IGhhc093blByb3BlcnR5fSk7XG5cbiAgICAvLyBPYmplY3QuaXNcblxuICAgIC8vIFVubGlrZSA9PT0gdGhpcyByZXR1cm5zIHRydWUgZm9yIChOYU4sIE5hTikgYW5kIGZhbHNlIGZvciAoMCwgLTApLlxuICAgIGZ1bmN0aW9uIGlzKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAobGVmdCA9PT0gcmlnaHQpXG4gICAgICAgIHJldHVybiBsZWZ0ICE9PSAwIHx8IDEgLyBsZWZ0ID09PSAxIC8gcmlnaHQ7XG4gICAgICByZXR1cm4gbGVmdCAhPT0gbGVmdCAmJiByaWdodCAhPT0gcmlnaHQ7XG4gICAgfVxuXG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2lzJywgbWV0aG9kKGlzKSk7XG4gIH1cblxuICAvLyBJdGVyYXRvcnMuXG4gIHZhciBpdGVyYXRvck5hbWUgPSBuZXcgTmFtZSgnaXRlcmF0b3InKTtcblxuICB2YXIgSXRlck1vZHVsZSA9IHtcbiAgICBnZXQgaXRlcmF0b3IoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JOYW1lO1xuICAgIH1cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhlIHJlc3Qgb2YgQGl0ZXIgYW5kIG1vdmUgaXQgdG8gYSBkaWZmZXJlbnQgZmlsZSB0aGF0XG4gICAgLy8gZ2V0cyBjb21waWxlZC5cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvcihjb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGdldFByb3BlcnR5KGNvbGxlY3Rpb24sIGl0ZXJhdG9yTmFtZSkuY2FsbChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJdGVyYXRvcihvYmplY3QpIHtcbiAgICAvLyBHZW5lcmF0b3IgaW5zdGFuY2VzIGFyZSBpdGVyYWJsZS5cbiAgICBzZXRQcm9wZXJ0eShvYmplY3QsIGl0ZXJhdG9yTmFtZSwgcmV0dXJuVGhpcyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsQXJyYXkoQXJyYXkpIHtcbiAgICAvLyBNYWtlIGFycmF5cyBpdGVyYWJsZS5cbiAgICBkZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIEl0ZXJNb2R1bGUuaXRlcmF0b3IsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXgrK107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IFN0b3BJdGVyYXRpb25Mb2NhbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSk7XG4gIH1cblxuICAvLyBHZW5lcmF0b3JzOiBHZW5lcmF0b3JSZXR1cm5cbiAgdmFyIEdlbmVyYXRvclJldHVybkxvY2FsO1xuXG4gIGZ1bmN0aW9uIHNldEdlbmVyYXRvclJldHVybihHZW5lcmF0b3JSZXR1cm4sIGdsb2JhbCkge1xuICAgIHN3aXRjaCAodHlwZW9mIEdlbmVyYXRvclJldHVybikge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAvLyBTdG9wSXRlcmF0aW9uTG9jYWwgaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbCBtZWFucyB3ZSBwcm9iYWJseVxuICAgICAgICAvLyB3YW50IHRvIG1haW50YWluIHRoYXQgaW52YXJpYW50IHdoZW4gd2UgY2hhbmdlIEdlbmVyYXRvclJldHVybkxvY2FsLlxuICAgICAgICBpZiAodHlwZW9mIEdlbmVyYXRvclJldHVybkxvY2FsID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBTdG9wSXRlcmF0aW9uTG9jYWwgaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbCkge1xuICAgICAgICAgIEdlbmVyYXRvclJldHVybkxvY2FsID0gR2VuZXJhdG9yUmV0dXJuO1xuICAgICAgICAgIHNldFN0b3BJdGVyYXRpb24odW5kZWZpbmVkLCBnbG9iYWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBHZW5lcmF0b3JSZXR1cm5Mb2NhbCA9IEdlbmVyYXRvclJldHVybjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgR2VuZXJhdG9yUmV0dXJuTG9jYWwgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICAgIH07XG4gICAgICAgIEdlbmVyYXRvclJldHVybkxvY2FsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tvYmplY3QgR2VuZXJhdG9yUmV0dXJuICcgKyB0aGlzLnZhbHVlICsgJ10nO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29uc3RydWN0b3IgZnVuY3Rpb24gcmVxdWlyZWQnKTtcbiAgICB9XG4gIH1cblxuICBzZXRHZW5lcmF0b3JSZXR1cm4oKTtcblxuICAvLyBHZW5lcmF0b3JzOiBTdG9wSXRlcmF0aW9uXG4gIHZhciBTdG9wSXRlcmF0aW9uTG9jYWw7XG5cbiAgZnVuY3Rpb24gaXNTdG9wSXRlcmF0aW9uKHgpIHtcbiAgICByZXR1cm4geCA9PT0gU3RvcEl0ZXJhdGlvbkxvY2FsIHx8IHggaW5zdGFuY2VvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0b3BJdGVyYXRpb24oU3RvcEl0ZXJhdGlvbiwgZ2xvYmFsKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgU3RvcEl0ZXJhdGlvbikge1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsID0gU3RvcEl0ZXJhdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBTdG9wSXRlcmF0aW9uTG9jYWwgPSBuZXcgR2VuZXJhdG9yUmV0dXJuTG9jYWwoKTtcbiAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdbb2JqZWN0IFN0b3BJdGVyYXRpb25dJztcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFN0b3BJdGVyYXRpb24gdHlwZS4nKTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbClcbiAgICAgIGdsb2JhbC5TdG9wSXRlcmF0aW9uID0gU3RvcEl0ZXJhdGlvbjtcbiAgfVxuXG4gIHNldFN0b3BJdGVyYXRpb24oZ2xvYmFsLlN0b3BJdGVyYXRpb24sIGdsb2JhbCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbmNlbGxlclxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIERlZmVycmVkKGNhbmNlbGxlcikge1xuICAgIHRoaXMuY2FuY2VsbGVyXyA9IGNhbmNlbGxlcjtcbiAgICB0aGlzLmxpc3RlbmVyc18gPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeShzZWxmKSB7XG4gICAgd2hpbGUgKHNlbGYubGlzdGVuZXJzXy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHNlbGYubGlzdGVuZXJzXy5zaGlmdCgpO1xuICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLnJlc3VsdF9bMV0pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmVycmJhY2spXG4gICAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQgPSBjdXJyZW50LmVycmJhY2suY2FsbCh1bmRlZmluZWQsIHNlbGYucmVzdWx0X1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhbGxiYWNrKVxuICAgICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gY3VycmVudC5jYWxsYmFjay5jYWxsKHVuZGVmaW5lZCwgc2VsZi5yZXN1bHRfWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudC5kZWZlcnJlZC5jYWxsYmFjayhjdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY3VycmVudC5kZWZlcnJlZC5lcnJiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHVudXNlZCkge31cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaXJlKHNlbGYsIHZhbHVlLCBpc0Vycm9yKSB7XG4gICAgaWYgKHNlbGYuZmlyZWRfKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGZpcmVkJyk7XG5cbiAgICBzZWxmLmZpcmVkXyA9IHRydWU7XG4gICAgc2VsZi5yZXN1bHRfID0gW3ZhbHVlLCBpc0Vycm9yXTtcbiAgICBub3RpZnkoc2VsZik7XG4gIH1cblxuICBEZWZlcnJlZC5wcm90b3R5cGUgPSB7XG4gICAgZmlyZWRfOiBmYWxzZSxcbiAgICByZXN1bHRfOiB1bmRlZmluZWQsXG5cbiAgICBjcmVhdGVQcm9taXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7dGhlbjogdGhpcy50aGVuLmJpbmQodGhpcyksIGNhbmNlbDogdGhpcy5jYW5jZWwuYmluZCh0aGlzKX07XG4gICAgfSxcblxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZmlyZSh0aGlzLCB2YWx1ZSwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBlcnJiYWNrOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGZpcmUodGhpcywgZXJyLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgdGhlbjogZnVuY3Rpb24oY2FsbGJhY2ssIGVycmJhY2spIHtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgRGVmZXJyZWQodGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmxpc3RlbmVyc18ucHVzaCh7XG4gICAgICAgIGRlZmVycmVkOiByZXN1bHQsXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgZXJyYmFjazogZXJyYmFja1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5maXJlZF8pXG4gICAgICAgIG5vdGlmeSh0aGlzKTtcbiAgICAgIHJldHVybiByZXN1bHQuY3JlYXRlUHJvbWlzZSgpO1xuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZmlyZWRfKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgZmluaXNoZWQnKTtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAodGhpcy5jYW5jZWxsZXJfKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY2FuY2VsbGVyXyh0aGlzKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICByZXN1bHQgPSBuZXcgRXJyb3IocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBFcnJvcignY2FuY2VsbGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZmlyZWRfKSB7XG4gICAgICAgIHRoaXMucmVzdWx0XyA9IFtyZXN1bHQsIHRydWVdO1xuICAgICAgICBub3RpZnkodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBtb2R1bGVzID0gJGZyZWV6ZSh7XG4gICAgZ2V0ICdAbmFtZScoKSB7XG4gICAgICByZXR1cm4gTmFtZU1vZHVsZTtcbiAgICB9LFxuICAgIGdldCAnQGl0ZXInKCkge1xuICAgICAgcmV0dXJuIEl0ZXJNb2R1bGU7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPKGFydik6IERvbid0IGV4cG9ydCB0aGlzLlxuICBnbG9iYWwuRGVmZXJyZWQgPSBEZWZlcnJlZDtcblxuICBmdW5jdGlvbiBzZXR1cEdsb2JhbHMoZ2xvYmFsKSB7XG4gICAgcG9seWZpbGxTdHJpbmcoZ2xvYmFsLlN0cmluZyk7XG4gICAgcG9seWZpbGxPYmplY3QoZ2xvYmFsLk9iamVjdCk7XG4gICAgcG9seWZpbGxBcnJheShnbG9iYWwuQXJyYXkpO1xuICB9XG5cbiAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG5cbiAgLy8gUmV0dXJuIHRoZSBydW50aW1lIG5hbWVzcGFjZS5cbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgRGVmZXJyZWQ6IERlZmVycmVkLFxuICAgIEdlbmVyYXRvclJldHVybjogR2VuZXJhdG9yUmV0dXJuTG9jYWwsXG4gICAgc2V0R2VuZXJhdG9yUmV0dXJuOiBzZXRHZW5lcmF0b3JSZXR1cm4sXG4gICAgU3RvcEl0ZXJhdGlvbjogU3RvcEl0ZXJhdGlvbkxvY2FsLFxuICAgIHNldFN0b3BJdGVyYXRpb246IHNldFN0b3BJdGVyYXRpb24sXG4gICAgaXNTdG9wSXRlcmF0aW9uOiBpc1N0b3BJdGVyYXRpb24sXG4gICAgYWRkSXRlcmF0b3I6IGFkZEl0ZXJhdG9yLFxuICAgIGFzc2VydE5hbWU6IGFzc2VydE5hbWUsXG4gICAgY3JlYXRlTmFtZTogTmFtZU1vZHVsZS5OYW1lLFxuICAgIGRlbGV0ZVByb3BlcnR5OiBkZWxldGVQcm9wZXJ0eSxcbiAgICBlbGVtZW50RGVsZXRlOiBlbGVtZW50RGVsZXRlLFxuICAgIGVsZW1lbnRHZXQ6IGVsZW1lbnRHZXQsXG4gICAgZWxlbWVudEhhczogZWxlbWVudEhhcyxcbiAgICBlbGVtZW50U2V0OiBlbGVtZW50U2V0LFxuICAgIGdldEl0ZXJhdG9yOiBnZXRJdGVyYXRvcixcbiAgICBnZXRQcm9wZXJ0eTogZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHk6IHNldFByb3BlcnR5LFxuICAgIHNldHVwR2xvYmFsczogc2V0dXBHbG9iYWxzLFxuICAgIGhhczogaGFzLFxuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gIH07XG5cbiAgLy8gVGhpcyBmaWxlIGlzIHNvbWV0aW1lcyB1c2VkIHdpdGhvdXQgdHJhY2V1ci5qcy5cbiAgaWYgKHR5cGVvZiB0cmFjZXVyICE9PSAndW5kZWZpbmVkJylcbiAgICB0cmFjZXVyLnNldFJ1bnRpbWUocnVudGltZSk7XG4gIGVsc2VcbiAgICBnbG9iYWwudHJhY2V1ciA9IHtydW50aW1lOiBydW50aW1lfTtcblxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzKTtcbiIsImNvbnNvbGUubG9nKCdzdGFydGluZyBlczZpZnkgZGVtbycpO1xuXG5sZXQgbWFrZU1vbnN0ZXIgICA9ICByZXF1aXJlKCcuL21ha2UtbW9uc3RlcicpO1xubGV0IHsgXG4gICAgYmxvY2tTY29wZVxuICAsIGRlc3RydWN0dXJpbmdcbiAgLCBnZW5lcmF0b3JzIFxuICAsIGl0ZXJhdG9yc1xuICAsIGRlZmF1bHRQYXJhbWV0ZXJzXG4gICwgcmVzdFBhcmFtZXRlcnNcbiAgLCBzcHJlYWRPcGVyYXRvclxuICAsIGFycm93RnVuY3Rpb25zXG59ID0gcmVxdWlyZSgnLi9mZWF0dXJlcycpO1xuXG5ibG9ja1Njb3BlKCk7XG5kZXN0cnVjdHVyaW5nKCk7XG5nZW5lcmF0b3JzKCk7XG5jb25zdCBtb25zdGVyID0gbWFrZU1vbnN0ZXIoMywgNCwgJ2Nvb2tpZScpO1xuXG5jb25zb2xlLmxvZygnSSBhbSB0aGUgJXMgbW9uc3RlcicsIG1vbnN0ZXIubmFtZSk7XG5tb25zdGVyLmF0dGFjaygnY29va2llIHRoaWVmJyk7XG5cbml0ZXJhdG9ycygpO1xuXG5kZWZhdWx0UGFyYW1ldGVycygnSGVpbnogTXVlbGxlaW1lcicsICdDb2JvbCcsICdHZXJtYW55Jyk7XG5kZWZhdWx0UGFyYW1ldGVycygnVGhvcnN0ZW4gTG9yZW56Jyk7XG5kZWZhdWx0UGFyYW1ldGVycygnR3JhbmRwYSBPdHRvJywgJ0phdmEnKTtcblxucmVzdFBhcmFtZXRlcnMoJ2FuaW1hbHMnLCAnY2F0JywgJ2RvZycsICd6ZWJyYScsICdnaXJhZmZlJywgJ2xpb24nKTtcblxuc3ByZWFkT3BlcmF0b3IoWyAzLCA0IF0pO1xuXG5hcnJvd0Z1bmN0aW9ucygnYSBtZXNzc2FnZSBmcm9tIHlvdXIgcGVyc29uYWwgYXJyb3cgZnVuY3Rpb24nKTtcbiIsImNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIG5hbWUpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgYXR0YWNrKGNoYXJhY3Rlcikge1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcnLCBjaGFyYWN0ZXIpO1xuICB9XG59XG5cbmNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBuYW1lKSB7XG4gICAgc3VwZXIoeCwgeSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhlYWx0aF8gPSAxMDA7XG4gIH1cblxuICBhdHRhY2soY2hhcmFjdGVyKSB7XG4gICAgc3VwZXIuYXR0YWNrKGNoYXJhY3Rlcik7XG4gIH1cblxuICBnZXQgaXNBbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxuICBnZXQgaGVhbHRoKCkgeyByZXR1cm4gdGhpcy5oZWFsdGhfOyB9XG4gIHNldCBoZWFsdGgodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ0hlYWx0aCBtdXN0IGJlIG5vbi1uZWdhdGl2ZS4nKTtcbiAgICB0aGlzLmhlYWx0aF8gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4LCB5LCBuYW1lKSB7XG4gIHJldHVybiBuZXcgTW9uc3Rlcih4LCB5LCBuYW1lKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBibG9ja1Njb3BlICAgICAgICA6ICByZXF1aXJlKCcuL2Jsb2NrLXNjb3BlJylcbiAgLCBkZXN0cnVjdHVyaW5nICAgICA6ICByZXF1aXJlKCcuL2Rlc3RydWN0dXJpbmcnKVxuICAsIGdlbmVyYXRvcnMgICAgICAgIDogIHJlcXVpcmUoJy4vZ2VuZXJhdG9ycycpXG4gICwgaXRlcmF0b3JzICAgICAgICAgOiAgcmVxdWlyZSgnLi9pdGVyYXRvcnMnKVxuICAsIGRlZmF1bHRQYXJhbWV0ZXJzIDogIHJlcXVpcmUoJy4vZGVmYXVsdC1wYXJhbWV0ZXJzJylcbiAgLCByZXN0UGFyYW1ldGVycyAgICA6ICByZXF1aXJlKCcuL3Jlc3QtcGFyYW1ldGVycycpXG4gICwgc3ByZWFkT3BlcmF0b3IgICAgOiAgcmVxdWlyZSgnLi9zcHJlYWQtb3BlcmF0b3InKVxuICAsIGFycm93RnVuY3Rpb25zICAgIDogIHJlcXVpcmUoJy4vYXJyb3ctZnVuY3Rpb25zJylcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBlbGVtZW50IG9mIFsxLCAyLCAzXSkge1xuICAgIGNvbnNvbGUubG9nKCdlbGVtZW50OicsIGVsZW1lbnQpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBbYSwgW2JdLCBjLCBkXSA9IFsnaGVsbG8nLCBbJywgJywgJ2p1bmsnXSwgWyd3b3JsZCddXTtcbiAgY29uc29sZS5sb2coYSArIGIgKyBjKTsgLy8gaGVsbG8gd29ybGRcbn07XG4iLCIgLy8gQSBiaW5hcnkgdHJlZSBjbGFzcy5cbmZ1bmN0aW9uIFRyZWUobGVmdCwgbGFiZWwsIHJpZ2h0KSB7XG4gIHRoaXMubGVmdCA9IGxlZnQ7XG4gIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG4vLyBBIHJlY3Vyc2l2ZSBnZW5lcmF0b3IgdGhhdCBpdGVyYXRlcyB0aGUgVHJlZSBsYWJlbHMgaW4tb3JkZXIuXG5mdW5jdGlvbiogaW5vcmRlcih0KSB7XG4gIGlmICh0KSB7XG4gICAgeWllbGQqIGlub3JkZXIodC5sZWZ0KTtcbiAgICB5aWVsZCB0LmxhYmVsO1xuICAgIHlpZWxkKiBpbm9yZGVyKHQucmlnaHQpO1xuICB9XG59XG5cbi8vIE1ha2UgYSB0cmVlXG5mdW5jdGlvbiBtYWtlKGFycmF5KSB7XG4gIC8vIExlYWYgbm9kZTpcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PSAxKSByZXR1cm4gbmV3IFRyZWUobnVsbCwgYXJyYXlbMF0sIG51bGwpO1xuICByZXR1cm4gbmV3IFRyZWUobWFrZShhcnJheVswXSksIGFycmF5WzFdLCBtYWtlKGFycmF5WzJdKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgdHJlZSA9IG1ha2UoW1tbJ2EnXSwgJ2InLCBbJ2MnXV0sICdkJywgW1snZSddLCAnZicsIFsnZyddXV0pO1xuICBjb25zb2xlLmxvZygnZ2VuZXJhdGluZyB0cmVlIGxhYmVscyBpbiBvcmRlcjonKTtcblxuICAvLyBJdGVyYXRlIG92ZXIgaXRcbiAgZm9yIChsZXQgbm9kZSBvZiBpbm9yZGVyKHRyZWUpKSB7XG4gICAgY29uc29sZS5sb2cobm9kZSk7IC8vIGEsIGIsIGMsIGQsIC4uLlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhID0gMlxuICAgICwgYiA9IDNcbiAgICA7XG4gIHtcbiAgICBsZXQgdG1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdG1wO1xuICB9XG4gIGNvbnNvbGUubG9nKCd0bXAgaXMgdW5kZWZpbmVkOiAnLCB0eXBlb2YgdG1wID09ICd1bmRlZmluZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lLCBjb2RlcyA9ICdKYXZhU2NyaXB0JywgbGl2ZXNJbiA9ICdVU0EnKSB7XG4gIGNvbnNvbGUubG9nKCduYW1lOiAlcywgY29kZXM6ICVzLCBsaXZlcyBpbjogJXMnLCBuYW1lLCBjb2RlcywgbGl2ZXNJbik7XG59O1xuIiwiIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJpbnRMaXN0KGxpc3RuYW1lLCAuLi5pdGVtcykge1xuICAgY29uc29sZS5sb2coJ2xpc3QgJXMgaGFzIHRoZSBmb2xsb3dpbmcgaXRlbXMnLCBsaXN0bmFtZSk7XG4gICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IGNvbnNvbGUubG9nKGl0ZW0pOyB9KTtcbiB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobnVtYmVycykge1xuICBmdW5jdGlvbiBhZGQoeCwgeSkge1xuICAgIGNvbnNvbGUubG9nKCclZCArICVkID0gJWQnLCB4LCB5LCB4ICsgeSk7XG4gIH1cbiAgYWRkKC4uLm51bWJlcnMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbXNnID0+IGNvbnNvbGUubG9nKG1zZyk7XG4iXX0=
;