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
console.log('starting traceurify demo');
var makeMonster = require('./make-monster');
var $__0 = require('./features'), blockScope = $__0.blockScope, destructuring = $__0.destructuring, generators = $__0.generators, iterators = $__0.iterators, tryawait = $__0.tryawait, defaultParameters = $__0.defaultParameters, restParameters = $__0.restParameters, spreadOperator = $__0.spreadOperator;
blockScope();
destructuring();
generators();
var monster = makeMonster(3, 4, 'cookie');
console.log('I am the %s monster', monster.name);
monster.attack('cookie thief');
iterators();
tryawait(window.document.getElementsByTagName('p')[0]);
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
  tryawait: require('./await'),
  defaultParameters: require('./default-parameters'),
  restParameters: require('./rest-parameters'),
  spreadOperator: require('./spread-operator')
};


},{"./block-scope":5,"./destructuring":6,"./generators":7,"./iterators":8,"./await":9,"./default-parameters":10,"./rest-parameters":11,"./spread-operator":12}],5:[function(require,module,exports){
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
function deferredTimeout(delay) {
  var deferred = new Deferred();
  window.setTimeout(function() {
    deferred.callback({});
  }, delay);
  return deferred;
}
module.exports = function deferredAnimate(element) {
  var $that = this;
  var $state = 17;
  var $storedException;
  var $finallyFallThrough;
  var i;
  var $value;
  var $err;
  var $result = new Deferred();
  var $waitTask;
  var $G = {
    GState: 0,
    current: undefined,
    yieldReturn: undefined,
    innerFunction: function($yieldSent, $yieldAction) {
      while (true) switch ($state) {
        case 17:
          console.log('starting animation');
          $state = 18;
          break;
        case 18:
          i = 0;
          $state = 6;
          break;
        case 6:
          if (i < 100) {
            $state = 4;
            break;
          } else {
            $state = 8;
            break;
          }
        case 3:
          ++i;
          $state = 6;
          break;
        case 4:
          element.style['margin-left'] = i + 'px';
          $state = 5;
          break;
        case 5:
          $waitTask = deferredTimeout(10);
          $waitTask.then($createCallback(1), $createErrback(2));
          return;
          $state = 1;
          break;
        case 1:
          $state = 3;
          break;
        case 2:
          throw $err;
          $state = 3;
          break;
        case 8:
          if (i > 0) {
            $state = 13;
            break;
          } else {
            $state = 16;
            break;
          }
        case 12:
          --i;
          $state = 8;
          break;
        case 13:
          element.style['margin-left'] = i + 'px';
          $state = 14;
          break;
        case 14:
          $waitTask = deferredTimeout(10);
          $waitTask.then($createCallback(10), $createErrback(11));
          return;
          $state = 10;
          break;
        case 10:
          $state = 12;
          break;
        case 11:
          throw $err;
          $state = 12;
          break;
        case 16:
          $result.callback(undefined);
          $state = -2;
          break;
        case -2:
          return;
        case -3:
          $result.errback($storedException);
          $state = -2;
          break;
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
          default:
            $state = -3;
            break;
        }
      }
    }
  };
  var $continuation = $G.moveNext.bind($G);
  var $createCallback = function($newState) {
    return function($0) {
      $state = $newState;
      $value = $0;
      $continuation();
    };
  };
  var $createErrback = function($newState) {
    return function($0) {
      $state = $newState;
      $err = $0;
      $continuation();
    };
  };
  $continuation();
  return $result.createPromise();
};


},{}],10:[function(require,module,exports){
module.exports = function(name) {
  var codes = arguments[1] !== (void 0) ? arguments[1]: 'JavaScript';
  var livesIn = arguments[2] !== (void 0) ? arguments[2]: 'USA';
  console.log('name: %s, codes: %s, lives in: %s', name, codes, livesIn);
};


},{}],11:[function(require,module,exports){
module.exports = function printList(listname) {
  for (var items = [], $__0 = 1; $__0 < arguments.length; $__0++) items[$__0 - 1] = arguments[$__0];
  console.log('list %s has the following items', listname);
  items.forEach(function(item) {
    console.log(item);
  });
};


},{}],12:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIgbm9kZV9tb2R1bGVzL25vZGUtdHJhY2V1ci9zcmMvcnVudGltZS9ydW50aW1lLmpzIiwiIGV4YW1wbGUvc3JjL21haW4uanMiLCIgZXhhbXBsZS9zcmMvbWFrZS1tb25zdGVyLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2luZGV4LmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2Jsb2NrLXNjb3BlLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2Rlc3RydWN0dXJpbmcuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvZ2VuZXJhdG9ycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9pdGVyYXRvcnMuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvYXdhaXQuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvZGVmYXVsdC1wYXJhbWV0ZXJzLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL3Jlc3QtcGFyYW1ldGVycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9zcHJlYWQtb3BlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWlCQSxDQUFDLFFBQUEsQ0FBUyxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1IsOEVBQUE7QUFFSSxxRUFBQSxRQUFBLEVBQVUsT0FBQSxDQUFBLE1BQUE7QUFDVixxRUFBQSxnQkFBQSxFQUFrQixPQUFBLENBQUEsY0FBQTtBQUNsQixxRUFBQSxRQUFBLEVBQVUsT0FBQSxDQUFBLE1BQUE7QUFDVixxRUFBQSxxQkFBQSxFQUF1QixPQUFBLENBQUEsbUJBQUE7QUFDdkIscUVBQUEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFBLGNBQUE7QUFDbEIscUVBQUEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFBLFNBQUEsQ0FBQSxjQUFB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QSxHQUFXLENBQUMsaUNBQUEsQ0FBbUMsU0FBQSxDQUFBO0FBQy9DLE9BQUEsQ0FBQSxPQUFhLENBQUMsUUFBQSxDQUFVLElBQUEsQ0FBTTtBQUFFLFdBQUEsQ0FBQSxHQUFXLENBQUMsSUFBQSxDQUFBO0FBQUEsR0FBQSxDQUFBO0FBQUEsQ0FBQTs7OztpQkNGL0MsU0FBQSxDQUFTLEtBQUEsQ0FBTztBQUNSLElBQUEsRUFBSSxLQUFBLEdBQVMsS0FBQSxDQUNYLE1BQU0sVUFBUyxDQUFBLENBQUE7QUFDakIsUUFBTyxPQUFNLENBQUMsS0FBQSxDQUFBO0FBQUEsQ0FBQTtBQUh0QixNQUFBLENBQUEsT0FBQSxFQUFpQixTQUFBLENBQVUsT0FBQTs7OztTQUN6QixTQUFBLENBQWEsQ0FBQSxDQUFHLEVBQUEsQ0FBRztBQUNqQixhQUFBLENBQUEsR0FBVyxDQUFDLGNBQUEsQ0FBZ0IsRUFBQSxDQUFHLEVBQUEsQ0FBRyxFQUFBLEVBQUksRUFBQSxDQUFBO0FBQUEsS0FBQTtBQUV4QyxPQUFBLENBQUEsd0JBQU8sT0FBQSxDQUFBLENBQUE7QUFBQTtBQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxMiBUcmFjZXVyIEF1dGhvcnMuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuLyoqXG4gKiBUaGUgdHJhY2V1ciBydW50aW1lLlxuICovXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgJGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4gIHZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIHZhciAkZnJlZXplID0gT2JqZWN0LmZyZWV6ZTtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gIHZhciAkZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciAkaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIG5vbkVudW0odmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICB2YXIgbWV0aG9kID0gbm9uRW51bTtcblxuICBmdW5jdGlvbiBwb2x5ZmlsbFN0cmluZyhTdHJpbmcpIHtcbiAgICAvLyBIYXJtb255IFN0cmluZyBFeHRyYXNcbiAgICAvLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OnN0cmluZ19leHRyYXNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTdHJpbmcucHJvdG90eXBlLCB7XG4gICAgICBzdGFydHNXaXRoOiBtZXRob2QoZnVuY3Rpb24ocykge1xuICAgICAgIHJldHVybiB0aGlzLmxhc3RJbmRleE9mKHMsIDApID09PSAwO1xuICAgICAgfSksXG4gICAgICBlbmRzV2l0aDogbWV0aG9kKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdmFyIHQgPSBTdHJpbmcocyk7XG4gICAgICAgIHZhciBsID0gdGhpcy5sZW5ndGggLSB0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGwgPj0gMCAmJiB0aGlzLmluZGV4T2YodCwgbCkgPT09IGw7XG4gICAgICB9KSxcbiAgICAgIGNvbnRhaW5zOiBtZXRob2QoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHMpICE9PSAtMTtcbiAgICAgIH0pLFxuICAgICAgdG9BcnJheTogbWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpdCgnJyk7XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gMTUuNS4zLjQgU3RyaW5nLnJhdyAoIGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxuICAgICRkZWZpbmVQcm9wZXJ0eShTdHJpbmcsICdyYXcnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oY2FsbHNpdGUpIHtcbiAgICAgICAgdmFyIHJhdyA9IGNhbGxzaXRlLnJhdztcbiAgICAgICAgdmFyIGxlbiA9IHJhdy5sZW5ndGggPj4+IDA7ICAvLyBUb1VpbnRcbiAgICAgICAgaWYgKGxlbiA9PT0gMClcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHZhciBzID0gJyc7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBzICs9IHJhd1tpXTtcbiAgICAgICAgICBpZiAoaSArIDEgPT09IGxlbilcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgIHMgKz0gYXJndW1lbnRzWysraV07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICB2YXIgY291bnRlciA9IDA7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIG5ldyB1bmlxdWUgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBuZXdVbmlxdWVTdHJpbmcoKSB7XG4gICAgcmV0dXJuICdfXyQnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU5KSArICckJyArICsrY291bnRlciArICckX18nO1xuICB9XG5cbiAgdmFyIG5hbWVSZSA9IC9eX19cXCQoPzpcXGQrKVxcJCg/OlxcZCspXFwkX18kLztcblxuICB2YXIgaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWUgPSBuZXdVbmlxdWVTdHJpbmcoKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwcml2YXRlIG5hbWUgb2JqZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHN0cmluZyBPcHRpb25hbCBzdHJpbmcgdXNlZCBmb3IgdG9TdHJpbmcuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gTmFtZShzdHJpbmcpIHtcbiAgICBpZiAoIXN0cmluZylcbiAgICAgIHN0cmluZyA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICAgICRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZSwge3ZhbHVlOiBuZXdVbmlxdWVTdHJpbmcoKX0pO1xuXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgICAkZnJlZXplKHRvU3RyaW5nKTtcbiAgICAkZnJlZXplKHRvU3RyaW5nLnByb3RvdHlwZSk7XG4gICAgdmFyIHRvU3RyaW5nRGVzY3IgPSBtZXRob2QodG9TdHJpbmcpO1xuICAgICRkZWZpbmVQcm9wZXJ0eSh0aGlzLCAndG9TdHJpbmcnLCB0b1N0cmluZ0Rlc2NyKTtcblxuICAgIHRoaXMucHVibGljID0gJGZyZWV6ZSgkY3JlYXRlKG51bGwsIHtcbiAgICAgIHRvU3RyaW5nOiBtZXRob2QoJGZyZWV6ZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0pKVxuICAgIH0pKTtcbiAgICAkZnJlZXplKHRoaXMucHVibGljLnRvU3RyaW5nLnByb3RvdHlwZSk7XG5cbiAgICAkZnJlZXplKHRoaXMpO1xuICB9O1xuICAkZnJlZXplKE5hbWUpO1xuICAkZnJlZXplKE5hbWUucHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBhc3NlcnROYW1lKHZhbCkge1xuICAgIGlmICghTmFtZU1vZHVsZS5pc05hbWUodmFsKSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IodmFsICsgJyBpcyBub3QgYSBOYW1lJyk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIC8vIFByaXZhdGUgbmFtZS5cblxuICAvLyBDb2xsZWN0aW9uIGdldHRlcnMgYW5kIHNldHRlcnNcbiAgdmFyIGVsZW1lbnREZWxldGVOYW1lID0gbmV3IE5hbWUoKTtcbiAgdmFyIGVsZW1lbnRHZXROYW1lID0gbmV3IE5hbWUoKTtcbiAgdmFyIGVsZW1lbnRTZXROYW1lID0gbmV3IE5hbWUoKTtcblxuICAvLyBIQUNLOiBXZSBzaG91bGQgdXNlIHJ1bnRpbWUvbW9kdWxlcy9zdGQvbmFtZS5qcyBvciBzb21ldGhpbmcgbGlrZSB0aGF0LlxuICB2YXIgTmFtZU1vZHVsZSA9ICRmcmVlemUoe1xuICAgIE5hbWU6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIG5ldyBOYW1lKHN0cik7XG4gICAgfSxcbiAgICBpc05hbWU6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgTmFtZTtcbiAgICB9LFxuICAgIGVsZW1lbnRHZXQ6IGVsZW1lbnRHZXROYW1lLFxuICAgIGVsZW1lbnRTZXQ6IGVsZW1lbnRTZXROYW1lLFxuICAgIGVsZW1lbnREZWxldGU6IGVsZW1lbnREZWxldGVOYW1lXG4gIH0pO1xuXG4gIHZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuZmlsdGVyKTtcblxuICAvLyBPdmVycmlkZSBnZXRPd25Qcm9wZXJ0eU5hbWVzIHRvIGZpbHRlciBvdXQgcHJpdmF0ZSBuYW1lIGtleXMuXG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpbHRlcigkZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpLCBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiAhbmFtZVJlLnRlc3Qoc3RyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIE9iamVjdC5wcm90b3RwZS5oYXNPd25Qcm9wZXJ0eSB0byBhbHdheXMgcmV0dXJuIGZhbHNlIGZvclxuICAvLyBwcml2YXRlIG5hbWVzLlxuICBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpIHx8IG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAkaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnREZWxldGUob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKHRyYWNldXIub3B0aW9ucy50cmFwTWVtYmVyTG9va3VwICYmXG4gICAgICAgIGhhc1ByaXZhdGVOYW1lUHJvcGVydHkob2JqZWN0LCBlbGVtZW50RGVsZXRlTmFtZSkpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnREZWxldGVOYW1lKS5jYWxsKG9iamVjdCwgbmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBkZWxldGVQcm9wZXJ0eShvYmplY3QsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudEdldChvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAodHJhY2V1ci5vcHRpb25zLnRyYXBNZW1iZXJMb29rdXAgJiZcbiAgICAgICAgaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnRHZXROYW1lKSkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5KG9iamVjdCwgZWxlbWVudEdldE5hbWUpLmNhbGwob2JqZWN0LCBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb3BlcnR5KG9iamVjdCwgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50SGFzKG9iamVjdCwgbmFtZSkge1xuICAgIC8vIFNob3VsZCB3ZSBhbGxvdyB0cmFwcGluZyB0aGlzIHRvbz9cbiAgICByZXR1cm4gaGFzKG9iamVjdCwgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50U2V0KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodHJhY2V1ci5vcHRpb25zLnRyYXBNZW1iZXJMb29rdXAgJiZcbiAgICAgICAgaGFzUHJpdmF0ZU5hbWVQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnRTZXROYW1lKSkge1xuICAgICAgZ2V0UHJvcGVydHkob2JqZWN0LCBlbGVtZW50U2V0TmFtZSkuY2FsbChvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHJvcGVydHkob2JqZWN0LCBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydE5vdE5hbWUocykge1xuICAgIGlmIChuYW1lUmUudGVzdChzKSlcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGFjY2VzcyB0byBwcml2YXRlIG5hbWUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KG9iamVjdCwgbmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSlcbiAgICAgIHJldHVybiBkZWxldGUgb2JqZWN0W25hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdXTtcbiAgICBpZiAobmFtZVJlLnRlc3QobmFtZSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZGVsZXRlIG9iamVjdFtuYW1lXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iamVjdCwgbmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSlcbiAgICAgIHJldHVybiBvYmplY3RbbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV1dO1xuICAgIGlmIChuYW1lUmUudGVzdChuYW1lKSlcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG9iamVjdFtuYW1lXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc1ByaXZhdGVOYW1lUHJvcGVydHkob2JqZWN0LCBuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdIGluIE9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzKG9iamVjdCwgbmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSB8fCBuYW1lUmUudGVzdChuYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gbmFtZSBpbiBPYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgYSBiaXQgc2ltcGxpc3RpYy5cbiAgLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9c3RyYXdtYW46cmVmYWN0b3JpbmdfcHV0I29iamVjdC5fZ2V0X3NldF9wcm9wZXJ0eV9idWlsdC1pbnNcbiAgZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSkge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSAkZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV1dKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yKVxuICAgICAgICBvYmplY3RbbmFtZVtpbnRlcm5hbFN0cmluZ1ZhbHVlTmFtZV1dID0gdmFsdWU7XG4gICAgICBlbHNlXG4gICAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdLCBub25FbnVtKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydE5vdE5hbWUobmFtZSk7XG4gICAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkpIHtcbiAgICAgIC8vIFByaXZhdGUgbmFtZXMgc2hvdWxkIG5ldmVyIGJlIGVudW1lcmFibGUuXG4gICAgICBpZiAoZGVzY3JpcHRvci5lbnVtZXJhYmxlKSB7XG4gICAgICAgIGRlc2NyaXB0b3IgPSBPYmplY3QuY3JlYXRlKGRlc2NyaXB0b3IsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB7dmFsdWU6IGZhbHNlfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdLCBkZXNjcmlwdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0Tm90TmFtZShuYW1lKTtcbiAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uICRnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKSB7XG4gICAgd2hpbGUgKG9iaiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKTtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBvYmogPSAkZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkpXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGFzc2VydE5vdE5hbWUobmFtZSk7XG4gICAgcmV0dXJuICRnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsT2JqZWN0KE9iamVjdCkge1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScsIHt2YWx1ZTogZGVmaW5lUHJvcGVydHl9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZGVsZXRlUHJvcGVydHknLCBtZXRob2QoZGVsZXRlUHJvcGVydHkpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlOYW1lcycsXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogZ2V0T3duUHJvcGVydHlOYW1lc30pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRQcm9wZXJ0eScsIG1ldGhvZChnZXRQcm9wZXJ0eSkpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRQcm9wZXJ0eURlc2NyaXB0b3InLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QoZ2V0UHJvcGVydHlEZXNjcmlwdG9yKSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2hhcycsIG1ldGhvZChoYXMpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnc2V0UHJvcGVydHknLCBtZXRob2Qoc2V0UHJvcGVydHkpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ2hhc093blByb3BlcnR5JyxcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiBoYXNPd25Qcm9wZXJ0eX0pO1xuXG4gICAgLy8gT2JqZWN0LmlzXG5cbiAgICAvLyBVbmxpa2UgPT09IHRoaXMgcmV0dXJucyB0cnVlIGZvciAoTmFOLCBOYU4pIGFuZCBmYWxzZSBmb3IgKDAsIC0wKS5cbiAgICBmdW5jdGlvbiBpcyhsZWZ0LCByaWdodCkge1xuICAgICAgaWYgKGxlZnQgPT09IHJpZ2h0KVxuICAgICAgICByZXR1cm4gbGVmdCAhPT0gMCB8fCAxIC8gbGVmdCA9PT0gMSAvIHJpZ2h0O1xuICAgICAgcmV0dXJuIGxlZnQgIT09IGxlZnQgJiYgcmlnaHQgIT09IHJpZ2h0O1xuICAgIH1cblxuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdpcycsIG1ldGhvZChpcykpO1xuICB9XG5cbiAgLy8gSXRlcmF0b3JzLlxuICB2YXIgaXRlcmF0b3JOYW1lID0gbmV3IE5hbWUoJ2l0ZXJhdG9yJyk7XG5cbiAgdmFyIEl0ZXJNb2R1bGUgPSB7XG4gICAgZ2V0IGl0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yTmFtZTtcbiAgICB9XG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHRoZSByZXN0IG9mIEBpdGVyIGFuZCBtb3ZlIGl0IHRvIGEgZGlmZmVyZW50IGZpbGUgdGhhdFxuICAgIC8vIGdldHMgY29tcGlsZWQuXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3IoY29sbGVjdGlvbikge1xuICAgIHJldHVybiBnZXRQcm9wZXJ0eShjb2xsZWN0aW9uLCBpdGVyYXRvck5hbWUpLmNhbGwoY29sbGVjdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5UaGlzKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSXRlcmF0b3Iob2JqZWN0KSB7XG4gICAgLy8gR2VuZXJhdG9yIGluc3RhbmNlcyBhcmUgaXRlcmFibGUuXG4gICAgc2V0UHJvcGVydHkob2JqZWN0LCBpdGVyYXRvck5hbWUsIHJldHVyblRoaXMpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBwb2x5ZmlsbEFycmF5KEFycmF5KSB7XG4gICAgLy8gTWFrZSBhcnJheXMgaXRlcmFibGUuXG4gICAgZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBJdGVyTW9kdWxlLml0ZXJhdG9yLCBtZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGFycmF5ID0gdGhpcztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4KytdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBTdG9wSXRlcmF0aW9uTG9jYWw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkpO1xuICB9XG5cbiAgLy8gR2VuZXJhdG9yczogR2VuZXJhdG9yUmV0dXJuXG4gIHZhciBHZW5lcmF0b3JSZXR1cm5Mb2NhbDtcblxuICBmdW5jdGlvbiBzZXRHZW5lcmF0b3JSZXR1cm4oR2VuZXJhdG9yUmV0dXJuLCBnbG9iYWwpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBHZW5lcmF0b3JSZXR1cm4pIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgLy8gU3RvcEl0ZXJhdGlvbkxvY2FsIGluc3RhbmNlb2YgR2VuZXJhdG9yUmV0dXJuTG9jYWwgbWVhbnMgd2UgcHJvYmFibHlcbiAgICAgICAgLy8gd2FudCB0byBtYWludGFpbiB0aGF0IGludmFyaWFudCB3aGVuIHdlIGNoYW5nZSBHZW5lcmF0b3JSZXR1cm5Mb2NhbC5cbiAgICAgICAgaWYgKHR5cGVvZiBHZW5lcmF0b3JSZXR1cm5Mb2NhbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsIGluc3RhbmNlb2YgR2VuZXJhdG9yUmV0dXJuTG9jYWwpIHtcbiAgICAgICAgICBHZW5lcmF0b3JSZXR1cm5Mb2NhbCA9IEdlbmVyYXRvclJldHVybjtcbiAgICAgICAgICBzZXRTdG9wSXRlcmF0aW9uKHVuZGVmaW5lZCwgZ2xvYmFsKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgR2VuZXJhdG9yUmV0dXJuTG9jYWwgPSBHZW5lcmF0b3JSZXR1cm47XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIEdlbmVyYXRvclJldHVybkxvY2FsID0gZnVuY3Rpb24odikge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2O1xuICAgICAgICB9O1xuICAgICAgICBHZW5lcmF0b3JSZXR1cm5Mb2NhbC5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbb2JqZWN0IEdlbmVyYXRvclJldHVybiAnICsgdGhpcy52YWx1ZSArICddJztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbnN0cnVjdG9yIGZ1bmN0aW9uIHJlcXVpcmVkJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0R2VuZXJhdG9yUmV0dXJuKCk7XG5cbiAgLy8gR2VuZXJhdG9yczogU3RvcEl0ZXJhdGlvblxuICB2YXIgU3RvcEl0ZXJhdGlvbkxvY2FsO1xuXG4gIGZ1bmN0aW9uIGlzU3RvcEl0ZXJhdGlvbih4KSB7XG4gICAgcmV0dXJuIHggPT09IFN0b3BJdGVyYXRpb25Mb2NhbCB8fCB4IGluc3RhbmNlb2YgR2VuZXJhdG9yUmV0dXJuTG9jYWw7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdG9wSXRlcmF0aW9uKFN0b3BJdGVyYXRpb24sIGdsb2JhbCkge1xuICAgIHN3aXRjaCAodHlwZW9mIFN0b3BJdGVyYXRpb24pIHtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIFN0b3BJdGVyYXRpb25Mb2NhbCA9IFN0b3BJdGVyYXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgU3RvcEl0ZXJhdGlvbkxvY2FsID0gbmV3IEdlbmVyYXRvclJldHVybkxvY2FsKCk7XG4gICAgICAgIFN0b3BJdGVyYXRpb25Mb2NhbC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnW29iamVjdCBTdG9wSXRlcmF0aW9uXSc7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBTdG9wSXRlcmF0aW9uIHR5cGUuJyk7XG4gICAgfVxuICAgIGlmIChnbG9iYWwpXG4gICAgICBnbG9iYWwuU3RvcEl0ZXJhdGlvbiA9IFN0b3BJdGVyYXRpb247XG4gIH1cblxuICBzZXRTdG9wSXRlcmF0aW9uKGdsb2JhbC5TdG9wSXRlcmF0aW9uLCBnbG9iYWwpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYW5jZWxsZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBEZWZlcnJlZChjYW5jZWxsZXIpIHtcbiAgICB0aGlzLmNhbmNlbGxlcl8gPSBjYW5jZWxsZXI7XG4gICAgdGhpcy5saXN0ZW5lcnNfID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnkoc2VsZikge1xuICAgIHdoaWxlIChzZWxmLmxpc3RlbmVyc18ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBzZWxmLmxpc3RlbmVyc18uc2hpZnQoKTtcbiAgICAgIHZhciBjdXJyZW50UmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc2VsZi5yZXN1bHRfWzFdKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5lcnJiYWNrKVxuICAgICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gY3VycmVudC5lcnJiYWNrLmNhbGwodW5kZWZpbmVkLCBzZWxmLnJlc3VsdF9bMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5jYWxsYmFjaylcbiAgICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IGN1cnJlbnQuY2FsbGJhY2suY2FsbCh1bmRlZmluZWQsIHNlbGYucmVzdWx0X1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnQuZGVmZXJyZWQuY2FsbGJhY2soY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGN1cnJlbnQuZGVmZXJyZWQuZXJyYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh1bnVzZWQpIHt9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlyZShzZWxmLCB2YWx1ZSwgaXNFcnJvcikge1xuICAgIGlmIChzZWxmLmZpcmVkXylcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBmaXJlZCcpO1xuXG4gICAgc2VsZi5maXJlZF8gPSB0cnVlO1xuICAgIHNlbGYucmVzdWx0XyA9IFt2YWx1ZSwgaXNFcnJvcl07XG4gICAgbm90aWZ5KHNlbGYpO1xuICB9XG5cbiAgRGVmZXJyZWQucHJvdG90eXBlID0ge1xuICAgIGZpcmVkXzogZmFsc2UsXG4gICAgcmVzdWx0XzogdW5kZWZpbmVkLFxuXG4gICAgY3JlYXRlUHJvbWlzZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge3RoZW46IHRoaXMudGhlbi5iaW5kKHRoaXMpLCBjYW5jZWw6IHRoaXMuY2FuY2VsLmJpbmQodGhpcyl9O1xuICAgIH0sXG5cbiAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGZpcmUodGhpcywgdmFsdWUsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgZXJyYmFjazogZnVuY3Rpb24oZXJyKSB7XG4gICAgICBmaXJlKHRoaXMsIGVyciwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHRoZW46IGZ1bmN0aW9uKGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IERlZmVycmVkKHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5saXN0ZW5lcnNfLnB1c2goe1xuICAgICAgICBkZWZlcnJlZDogcmVzdWx0LFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIGVycmJhY2s6IGVycmJhY2tcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZmlyZWRfKVxuICAgICAgICBub3RpZnkodGhpcyk7XG4gICAgICByZXR1cm4gcmVzdWx0LmNyZWF0ZVByb21pc2UoKTtcbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmZpcmVkXylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGZpbmlzaGVkJyk7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKHRoaXMuY2FuY2VsbGVyXykge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmNhbmNlbGxlcl8odGhpcyk7XG4gICAgICAgIGlmICghcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEVycm9yKHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmZpcmVkXykge1xuICAgICAgICB0aGlzLnJlc3VsdF8gPSBbcmVzdWx0LCB0cnVlXTtcbiAgICAgICAgbm90aWZ5KHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgbW9kdWxlcyA9ICRmcmVlemUoe1xuICAgIGdldCAnQG5hbWUnKCkge1xuICAgICAgcmV0dXJuIE5hbWVNb2R1bGU7XG4gICAgfSxcbiAgICBnZXQgJ0BpdGVyJygpIHtcbiAgICAgIHJldHVybiBJdGVyTW9kdWxlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETyhhcnYpOiBEb24ndCBleHBvcnQgdGhpcy5cbiAgZ2xvYmFsLkRlZmVycmVkID0gRGVmZXJyZWQ7XG5cbiAgZnVuY3Rpb24gc2V0dXBHbG9iYWxzKGdsb2JhbCkge1xuICAgIHBvbHlmaWxsU3RyaW5nKGdsb2JhbC5TdHJpbmcpO1xuICAgIHBvbHlmaWxsT2JqZWN0KGdsb2JhbC5PYmplY3QpO1xuICAgIHBvbHlmaWxsQXJyYXkoZ2xvYmFsLkFycmF5KTtcbiAgfVxuXG4gIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuXG4gIC8vIFJldHVybiB0aGUgcnVudGltZSBuYW1lc3BhY2UuXG4gIHZhciBydW50aW1lID0ge1xuICAgIERlZmVycmVkOiBEZWZlcnJlZCxcbiAgICBHZW5lcmF0b3JSZXR1cm46IEdlbmVyYXRvclJldHVybkxvY2FsLFxuICAgIHNldEdlbmVyYXRvclJldHVybjogc2V0R2VuZXJhdG9yUmV0dXJuLFxuICAgIFN0b3BJdGVyYXRpb246IFN0b3BJdGVyYXRpb25Mb2NhbCxcbiAgICBzZXRTdG9wSXRlcmF0aW9uOiBzZXRTdG9wSXRlcmF0aW9uLFxuICAgIGlzU3RvcEl0ZXJhdGlvbjogaXNTdG9wSXRlcmF0aW9uLFxuICAgIGFkZEl0ZXJhdG9yOiBhZGRJdGVyYXRvcixcbiAgICBhc3NlcnROYW1lOiBhc3NlcnROYW1lLFxuICAgIGNyZWF0ZU5hbWU6IE5hbWVNb2R1bGUuTmFtZSxcbiAgICBkZWxldGVQcm9wZXJ0eTogZGVsZXRlUHJvcGVydHksXG4gICAgZWxlbWVudERlbGV0ZTogZWxlbWVudERlbGV0ZSxcbiAgICBlbGVtZW50R2V0OiBlbGVtZW50R2V0LFxuICAgIGVsZW1lbnRIYXM6IGVsZW1lbnRIYXMsXG4gICAgZWxlbWVudFNldDogZWxlbWVudFNldCxcbiAgICBnZXRJdGVyYXRvcjogZ2V0SXRlcmF0b3IsXG4gICAgZ2V0UHJvcGVydHk6IGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5OiBzZXRQcm9wZXJ0eSxcbiAgICBzZXR1cEdsb2JhbHM6IHNldHVwR2xvYmFscyxcbiAgICBoYXM6IGhhcyxcbiAgICBtb2R1bGVzOiBtb2R1bGVzLFxuICB9O1xuXG4gIC8vIFRoaXMgZmlsZSBpcyBzb21ldGltZXMgdXNlZCB3aXRob3V0IHRyYWNldXIuanMuXG4gIGlmICh0eXBlb2YgdHJhY2V1ciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgdHJhY2V1ci5zZXRSdW50aW1lKHJ1bnRpbWUpO1xuICBlbHNlXG4gICAgZ2xvYmFsLnRyYWNldXIgPSB7cnVudGltZTogcnVudGltZX07XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdGhpcyk7XG4iLCJjb25zb2xlLmxvZygnc3RhcnRpbmcgdHJhY2V1cmlmeSBkZW1vJyk7XG5cbmxldCBtYWtlTW9uc3RlciAgID0gIHJlcXVpcmUoJy4vbWFrZS1tb25zdGVyJyk7XG5sZXQgeyBcbiAgICBibG9ja1Njb3BlXG4gICwgZGVzdHJ1Y3R1cmluZ1xuICAsIGdlbmVyYXRvcnMgXG4gICwgaXRlcmF0b3JzXG4gICwgdHJ5YXdhaXRcbiAgLCBkZWZhdWx0UGFyYW1ldGVyc1xuICAsIHJlc3RQYXJhbWV0ZXJzXG4gICwgc3ByZWFkT3BlcmF0b3Jcbn0gPSByZXF1aXJlKCcuL2ZlYXR1cmVzJyk7XG5cbmJsb2NrU2NvcGUoKTtcbmRlc3RydWN0dXJpbmcoKTtcbmdlbmVyYXRvcnMoKTtcbmNvbnN0IG1vbnN0ZXIgPSBtYWtlTW9uc3RlcigzLCA0LCAnY29va2llJyk7XG5cbmNvbnNvbGUubG9nKCdJIGFtIHRoZSAlcyBtb25zdGVyJywgbW9uc3Rlci5uYW1lKTtcbm1vbnN0ZXIuYXR0YWNrKCdjb29raWUgdGhpZWYnKTtcblxuaXRlcmF0b3JzKCk7XG5cbnRyeWF3YWl0KHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdKTtcblxuZGVmYXVsdFBhcmFtZXRlcnMoJ0hlaW56IE11ZWxsZWltZXInLCAnQ29ib2wnLCAnR2VybWFueScpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ1Rob3JzdGVuIExvcmVueicpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ0dyYW5kcGEgT3R0bycsICdKYXZhJyk7XG5cbnJlc3RQYXJhbWV0ZXJzKCdhbmltYWxzJywgJ2NhdCcsICdkb2cnLCAnemVicmEnLCAnZ2lyYWZmZScsICdsaW9uJyk7XG5cbnNwcmVhZE9wZXJhdG9yKFsgMywgNCBdKTtcbiIsImNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIG5hbWUpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgYXR0YWNrKGNoYXJhY3Rlcikge1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcnLCBjaGFyYWN0ZXIpO1xuICB9XG59XG5cbmNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBuYW1lKSB7XG4gICAgc3VwZXIoeCwgeSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhlYWx0aF8gPSAxMDA7XG4gIH1cblxuICBhdHRhY2soY2hhcmFjdGVyKSB7XG4gICAgc3VwZXIuYXR0YWNrKGNoYXJhY3Rlcik7XG4gIH1cblxuICBnZXQgaXNBbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxuICBnZXQgaGVhbHRoKCkgeyByZXR1cm4gdGhpcy5oZWFsdGhfOyB9XG4gIHNldCBoZWFsdGgodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ0hlYWx0aCBtdXN0IGJlIG5vbi1uZWdhdGl2ZS4nKTtcbiAgICB0aGlzLmhlYWx0aF8gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4LCB5LCBuYW1lKSB7XG4gIHJldHVybiBuZXcgTW9uc3Rlcih4LCB5LCBuYW1lKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBibG9ja1Njb3BlICAgICAgICA6ICByZXF1aXJlKCcuL2Jsb2NrLXNjb3BlJylcbiAgLCBkZXN0cnVjdHVyaW5nICAgICA6ICByZXF1aXJlKCcuL2Rlc3RydWN0dXJpbmcnKVxuICAsIGdlbmVyYXRvcnMgICAgICAgIDogIHJlcXVpcmUoJy4vZ2VuZXJhdG9ycycpXG4gICwgaXRlcmF0b3JzICAgICAgICAgOiAgcmVxdWlyZSgnLi9pdGVyYXRvcnMnKVxuICAsIHRyeWF3YWl0ICAgICAgICAgIDogIHJlcXVpcmUoJy4vYXdhaXQnKVxuICAsIGRlZmF1bHRQYXJhbWV0ZXJzIDogIHJlcXVpcmUoJy4vZGVmYXVsdC1wYXJhbWV0ZXJzJylcbiAgLCByZXN0UGFyYW1ldGVycyA6ICByZXF1aXJlKCcuL3Jlc3QtcGFyYW1ldGVycycpXG4gICwgc3ByZWFkT3BlcmF0b3IgOiAgcmVxdWlyZSgnLi9zcHJlYWQtb3BlcmF0b3InKVxufTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhID0gMlxuICAgICwgYiA9IDNcbiAgICA7XG4gIHtcbiAgICBsZXQgdG1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdG1wO1xuICB9XG4gIGNvbnNvbGUubG9nKCd0bXAgaXMgdW5kZWZpbmVkOiAnLCB0eXBlb2YgdG1wID09ICd1bmRlZmluZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFthLCBbYl0sIGMsIGRdID0gWydoZWxsbycsIFsnLCAnLCAnanVuayddLCBbJ3dvcmxkJ11dO1xuICBjb25zb2xlLmxvZyhhICsgYiArIGMpOyAvLyBoZWxsbyB3b3JsZFxufTtcbiIsIiAvLyBBIGJpbmFyeSB0cmVlIGNsYXNzLlxuZnVuY3Rpb24gVHJlZShsZWZ0LCBsYWJlbCwgcmlnaHQpIHtcbiAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG59XG5cbi8vIEEgcmVjdXJzaXZlIGdlbmVyYXRvciB0aGF0IGl0ZXJhdGVzIHRoZSBUcmVlIGxhYmVscyBpbi1vcmRlci5cbmZ1bmN0aW9uKiBpbm9yZGVyKHQpIHtcbiAgaWYgKHQpIHtcbiAgICB5aWVsZCogaW5vcmRlcih0LmxlZnQpO1xuICAgIHlpZWxkIHQubGFiZWw7XG4gICAgeWllbGQqIGlub3JkZXIodC5yaWdodCk7XG4gIH1cbn1cblxuLy8gTWFrZSBhIHRyZWVcbmZ1bmN0aW9uIG1ha2UoYXJyYXkpIHtcbiAgLy8gTGVhZiBub2RlOlxuICBpZiAoYXJyYXkubGVuZ3RoID09IDEpIHJldHVybiBuZXcgVHJlZShudWxsLCBhcnJheVswXSwgbnVsbCk7XG4gIHJldHVybiBuZXcgVHJlZShtYWtlKGFycmF5WzBdKSwgYXJyYXlbMV0sIG1ha2UoYXJyYXlbMl0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0cmVlID0gbWFrZShbW1snYSddLCAnYicsIFsnYyddXSwgJ2QnLCBbWydlJ10sICdmJywgWydnJ11dXSk7XG4gIGNvbnNvbGUubG9nKCdnZW5lcmF0aW5nIHRyZWUgbGFiZWxzIGluIG9yZGVyOicpO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciBpdFxuICBmb3IgKGxldCBub2RlIG9mIGlub3JkZXIodHJlZSkpIHtcbiAgICBjb25zb2xlLmxvZyhub2RlKTsgLy8gYSwgYiwgYywgZCwgLi4uXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBbMSwgMiwgM10pIHtcbiAgICBjb25zb2xlLmxvZygnZWxlbWVudDonLCBlbGVtZW50KTtcbiAgfVxufTtcbiIsImZ1bmN0aW9uIGRlZmVycmVkVGltZW91dChkZWxheSkge1xuICAgIHZhciBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBkZWZlcnJlZC5jYWxsYmFjayh7fSk7XG4gICAgfSxcbiAgICBkZWxheSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmVycmVkQW5pbWF0ZShlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydGluZyBhbmltYXRpb24nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7ICsraSkge1xuICAgIGVsZW1lbnQuc3R5bGVbJ21hcmdpbi1sZWZ0J10gPSBpICsgJ3B4JztcbiAgICBhd2FpdCBkZWZlcnJlZFRpbWVvdXQoMTApO1xuICB9XG5cbiAgZm9yICg7IGkgPiAwOyAtLWkpIHtcbiAgICBlbGVtZW50LnN0eWxlWydtYXJnaW4tbGVmdCddID0gaSArICdweCc7XG4gICAgYXdhaXQgZGVmZXJyZWRUaW1lb3V0KDEwKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUsIGNvZGVzID0gJ0phdmFTY3JpcHQnLCBsaXZlc0luID0gJ1VTQScpIHtcbiAgY29uc29sZS5sb2coJ25hbWU6ICVzLCBjb2RlczogJXMsIGxpdmVzIGluOiAlcycsIG5hbWUsIGNvZGVzLCBsaXZlc0luKTtcbn07XG4iLCIgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcmludExpc3QobGlzdG5hbWUsIC4uLml0ZW1zKSB7XG4gICBjb25zb2xlLmxvZygnbGlzdCAlcyBoYXMgdGhlIGZvbGxvd2luZyBpdGVtcycsIGxpc3RuYW1lKTtcbiAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgY29uc29sZS5sb2coaXRlbSk7IH0pO1xuIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChudW1iZXJzKSB7XG4gIGZ1bmN0aW9uIGFkZCh4LCB5KSB7XG4gICAgY29uc29sZS5sb2coJyVkICsgJWQgPSAlZCcsIHgsIHksIHggKyB5KTtcbiAgfVxuICBhZGQoLi4ubnVtYmVycyk7XG59O1xuIl19
;