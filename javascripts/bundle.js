;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function(msg) {
  return console.log(msg);
});


},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
module.exports = function(name) {
  var codes = arguments[1] !== (void 0) ? arguments[1]: 'JavaScript';
  var livesIn = arguments[2] !== (void 0) ? arguments[2]: 'USA';
  console.log('name: %s, codes: %s, lives in: %s', name, codes, livesIn);
};


},{}],4:[function(require,module,exports){
module.exports = function() {
  var $__0 = ['hello', [', ', 'junk'], ['world']], a = $__0[0], b = $__0[1][0], c = $__0[2], d = $__0[3];
  console.log(a + b + c);
};


},{}],5:[function(require,module,exports){
var $__generatorWrap = function(generator) {
  return $traceurRuntime.addIterator({
    next: function(x) {
      switch (generator.GState) {
        case 1:
          throw new Error('"next" on executing generator');
        case 3:
          throw new Error('"next" on closed generator');
        case 0:
          if (x !== undefined) {
            throw new TypeError('Sent value to newborn generator');
          }
        case 2:
          generator.GState = 1;
          if (generator.moveNext(x, 0)) {
            generator.GState = 2;
            return {
              value: generator.current,
              done: false
            };
          }
          generator.GState = 3;
          return {
            value: generator.yieldReturn,
            done: true
          };
      }
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
            return {
              value: generator.current,
              done: false
            };
          }
          generator.GState = 3;
          return {
            value: generator.yieldReturn,
            done: true
          };
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
  var $state = 40;
  var $storedException;
  var $finallyFallThrough;
  var $__2;
  var $__3;
  var $__4;
  var $__5;
  var $G = {
    GState: 0,
    current: undefined,
    yieldReturn: undefined,
    innerFunction: function($yieldSent, $yieldAction) {
      while (true) switch ($state) {
        case 40:
          if (t) {
            $state = 10;
            break;
          } else {
            $state = 31;
            break;
          }
        case 10:
          $__2 = $traceurRuntime.getIterator(inorder(t.left));
          $state = 11;
          break;
        case 11:
          ;
          $state = 13;
          break;
        case 13:
          $yieldSent = void 0;
          $state = 15;
          break;
        case 15:
          $yieldAction = 0;
          $state = 17;
          break;
        case 17:
          if (true) {
            $state = 2;
            break;
          } else {
            $state = 9;
            break;
          }
        case 2:
          if ($yieldAction == 0) {
            $__3 = $__2.next($yieldSent);
          } else {
            $__3 = $__2.throw ($yieldSent);
          }
          $state = 3;
          break;
        case 3:
          if ($__3.done) {
            $state = 6;
            break;
          } else {
            $state = 5;
            break;
          }
        case 6:
          $yieldSent = $__3.value;
          $state = 9;
          break;
        case 5:
          this.current = $__3.value;
          $state = 17;
          return true;
        case 9:
          this.current = t.label;
          $state = 19;
          return true;
        case 19:
          if ($yieldAction == 1) {
            $yieldAction = 0;
            throw $yieldSent;
          }
          $state = 21;
          break;
        case 21:
          $__4 = $traceurRuntime.getIterator(inorder(t.right));
          $state = 33;
          break;
        case 33:
          ;
          $state = 35;
          break;
        case 35:
          $yieldSent = void 0;
          $state = 37;
          break;
        case 37:
          $yieldAction = 0;
          $state = 39;
          break;
        case 39:
          if (true) {
            $state = 24;
            break;
          } else {
            $state = 31;
            break;
          }
        case 24:
          if ($yieldAction == 0) {
            $__5 = $__4.next($yieldSent);
          } else {
            $__5 = $__4.throw ($yieldSent);
          }
          $state = 25;
          break;
        case 25:
          if ($__5.done) {
            $state = 28;
            break;
          } else {
            $state = 27;
            break;
          }
        case 28:
          $yieldSent = $__5.value;
          $state = 31;
          break;
        case 27:
          this.current = $__5.value;
          $state = 39;
          return true;
        case 31:
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
  var tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
  console.log('generating tree labels in order:');
  for (var $__0 = $traceurRuntime.getIterator(inorder(tree)), $__1; !($__1 = $__0.next()).done;) {
    try {
      throw undefined;
    } catch (node) {
      node = $__1.value;
      {
        console.log(node);
      }
    }
  }
};


},{}],6:[function(require,module,exports){
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


},{"./arrow-functions":1,"./block-scope":2,"./default-parameters":3,"./destructuring":4,"./generators":5,"./iterators":7,"./rest-parameters":8,"./spread-operator":9}],7:[function(require,module,exports){
module.exports = function() {
  for (var $__0 = $traceurRuntime.getIterator([1, 2, 3]), $__1; !($__1 = $__0.next()).done;) {
    try {
      throw undefined;
    } catch (element) {
      element = $__1.value;
      {
        console.log('element:', element);
      }
    }
  }
};


},{}],8:[function(require,module,exports){
module.exports = function printList(listname) {
  for (var items = [], $__0 = 1; $__0 < arguments.length; $__0++) items[$__0 - 1] = arguments[$__0];
  console.log('list %s has the following items', listname);
  items.forEach(function(item) {
    console.log(item);
  });
};


},{}],9:[function(require,module,exports){
var $__toObject = function(value) {
  if (value == null) throw TypeError();
  return Object(value);
};
module.exports = function(numbers) {
  function add(x, y) {
    console.log('%d + %d = %d', x, y, x + y);
  }
  add.apply(null, $__toObject(numbers));
};


},{}],10:[function(require,module,exports){
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


},{"./features":6,"./make-monster":11}],11:[function(require,module,exports){
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


},{}],12:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};(function(global) {
  'use strict';
  var $create = Object.create;
  var $defineProperty = Object.defineProperty;
  var $freeze = Object.freeze;
  var $getOwnPropertyNames = Object.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var method = nonEnum;
  function polyfillString(String) {
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
  }
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var nameRe = /^__\$(?:\d+)\$(?:\d+)\$__$/;
  var internalStringValueName = newUniqueString();
  function Name(string) {
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
  }
  ;
  $freeze(Name);
  $freeze(Name.prototype);
  function assertName(val) {
    if (!NameModule.isName(val)) throw new TypeError(val + ' is not a Name');
    return val;
  }
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
  function getOwnPropertyNames(object) {
    return filter($getOwnPropertyNames(object), function(str) {
      return !nameRe.test(str);
    });
  }
  function hasOwnProperty(name) {
    if (NameModule.isName(name) || nameRe.test(name)) return false;
    return $hasOwnProperty.call(this, name);
  }
  function elementDelete(object, name) {
    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementDeleteName)) {
      return getProperty(object, elementDeleteName).call(object, name);
    }
    return deleteProperty(object, name);
  }
  function elementGet(object, name) {
    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementGetName)) {
      return getProperty(object, elementGetName).call(object, name);
    }
    return getProperty(object, name);
  }
  function elementHas(object, name) {
    return has(object, name);
  }
  function elementSet(object, name, value) {
    if (traceur.options.trapMemberLookup && hasPrivateNameProperty(object, elementSetName)) {
      getProperty(object, elementSetName).call(object, name, value);
    } else {
      setProperty(object, name, value);
    }
    return value;
  }
  function assertNotName(s) {
    if (nameRe.test(s)) throw Error('Invalid access to private name');
  }
  function deleteProperty(object, name) {
    if (NameModule.isName(name)) return delete object[name[internalStringValueName]];
    if (nameRe.test(name)) return true;
    return delete object[name];
  }
  function getProperty(object, name) {
    if (NameModule.isName(name)) return object[name[internalStringValueName]];
    if (nameRe.test(name)) return undefined;
    return object[name];
  }
  function hasPrivateNameProperty(object, name) {
    return name[internalStringValueName]in Object(object);
  }
  function has(object, name) {
    if (NameModule.isName(name) || nameRe.test(name)) return false;
    return name in Object(object);
  }
  function setProperty(object, name, value) {
    if (NameModule.isName(name)) {
      var descriptor = $getPropertyDescriptor(object, [name[internalStringValueName]]);
      if (descriptor) object[name[internalStringValueName]] = value; else $defineProperty(object, name[internalStringValueName], nonEnum(value));
    } else {
      assertNotName(name);
      object[name] = value;
    }
  }
  function defineProperty(object, name, descriptor) {
    if (NameModule.isName(name)) {
      if (descriptor.enumerable) {
        descriptor = Object.create(descriptor, {enumerable: {value: false}});
      }
      $defineProperty(object, name[internalStringValueName], descriptor);
    } else {
      assertNotName(name);
      $defineProperty(object, name, descriptor);
    }
  }
  function $getPropertyDescriptor(obj, name) {
    while (obj !== null) {
      var result = Object.getOwnPropertyDescriptor(obj, name);
      if (result) return result;
      obj = $getPrototypeOf(obj);
    }
    return undefined;
  }
  function getPropertyDescriptor(obj, name) {
    if (NameModule.isName(name)) return undefined;
    assertNotName(name);
    return $getPropertyDescriptor(obj, name);
  }
  function polyfillObject(Object) {
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
  }
  var iteratorName = new Name('iterator');
  var IterModule = {get iterator() {
      return iteratorName;
    }};
  function getIterator(collection) {
    return getProperty(collection, iteratorName).call(collection);
  }
  function returnThis() {
    return this;
  }
  function addIterator(object) {
    setProperty(object, iteratorName, returnThis);
    return object;
  }
  function polyfillArray(Array) {
    defineProperty(Array.prototype, IterModule.iterator, method(function() {
      var index = 0;
      var array = this;
      return {next: function() {
          if (index < array.length) {
            return {
              value: array[index++],
              done: false
            };
          }
          return {
            value: undefined,
            done: true
          };
        }};
    }));
  }
  function Deferred(canceller) {
    this.canceller_ = canceller;
    this.listeners_ = [];
  }
  function notify(self) {
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
  }
  function fire(self, value, isError) {
    if (self.fired_) throw new Error('already fired');
    self.fired_ = true;
    self.result_ = [value, isError];
    notify(self);
  }
  Deferred.prototype = {
    constructor: Deferred,
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
  function setupGlobals(global) {
    polyfillString(global.String);
    polyfillObject(global.Object);
    polyfillArray(global.Array);
  }
  setupGlobals(global);
  var runtime = {
    Deferred: Deferred,
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
  global.$traceurRuntime = runtime;
})(typeof global !== 'undefined' ? global: this);


},{}]},{},[12,10])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvYXJyb3ctZnVuY3Rpb25zLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2Jsb2NrLXNjb3BlLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2RlZmF1bHQtcGFyYW1ldGVycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9kZXN0cnVjdHVyaW5nLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL2dlbmVyYXRvcnMuanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvaW5kZXguanMiLCIgZXhhbXBsZS9zcmMvZmVhdHVyZXMvaXRlcmF0b3JzLmpzIiwiIGV4YW1wbGUvc3JjL2ZlYXR1cmVzL3Jlc3QtcGFyYW1ldGVycy5qcyIsIiBleGFtcGxlL3NyYy9mZWF0dXJlcy9zcHJlYWQtb3BlcmF0b3IuanMiLCIgZXhhbXBsZS9zcmMvbWFpbi5qcyIsIiBleGFtcGxlL3NyYy9tYWtlLW1vbnN0ZXIuanMiLCIgbm9kZV9tb2R1bGVzL3RyYWNldXIvc3JjL3J1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBQSxDQUFBLE9BQUEsYUFBaUIsR0FBQTtRQUFPLFFBQUEsQ0FBQSxHQUFXLENBQUMsR0FBQSxDQUFBO0FBQUEsQ0FBQSxDQUFBOzs7O0FDQXBDLE1BQUEsQ0FBQSxPQUFBLEVBQWlCLFNBQUEsQ0FBVTtBQUNyQixLQUFBLEVBQUEsRUFBSSxFQUFBLENBQ0osRUFBQSxFQUFJLEVBQUE7QUFDTjs7Ozs7V0FFVSxFQUFBO0FBQ1YsT0FBQSxFQUFJLEVBQUE7QUFDSixPQUFBLEVBQUksSUFBQTtBQUFBO0FBQUE7QUFFTixTQUFBLENBQUEsR0FBVyxDQUFDLG9CQUFBLENBQXNCLE9BQU8sSUFBQSxHQUFPLFlBQUEsQ0FBQTtBQUFBLENBQUE7Ozs7QUNUbEQsTUFBQSxDQUFBLE9BQUEsRUFBaUIsU0FBQSxDQUFVLElBQUEsQ0FBNkM7S0FBdkMs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O0FBQ1osWUFBTyxXQUFBO0FBQUE7QUFBQSxHQUFBLENBQUE7QUFLWCxRQUFBLENBQUEsUUFBQSxFQUFrQixTQUFBO0FBRWxCLFVBQVMsYUFBQSxDQUFhLE1BQUEsQ0FBUTtBQUM1QixrQkFBYyxDQUFDLE1BQUEsQ0FBQSxNQUFBLENBQUE7QUFDZixrQkFBYyxDQUFDLE1BQUEsQ0FBQSxNQUFBLENBQUE7QUFDZixpQkFBYSxDQUFDLE1BQUEsQ0FBQSxLQUFBLENBQUE7QUFBQTtBQUdoQixjQUFZLENBQUMsTUFBQSxDQUFBO0FBR1QsS0FBQSxRQUFBLEVBQVU7QUFDWixZQUFBLENBQVUsU0FBQTtBQUNWLGVBQUEsQ0FBYSxZQUFBO0FBQ2IsY0FBQSxDQUFZLFdBQUE7QUFDWixjQUFBLENBQVksV0FBQSxDQUFBLElBQUE7QUFDWixrQkFBQSxDQUFnQixlQUFBO0FBQ2hCLGlCQUFBLENBQWUsY0FBQTtBQUNmLGNBQUEsQ0FBWSxXQUFBO0FBQ1osY0FBQSxDQUFZLFdBQUE7QUFDWixjQUFBLENBQVksV0FBQTtBQUNaLGVBQUEsQ0FBYSxZQUFBO0FBQ2IsZUFBQSxDQUFhLFlBQUE7QUFDYixlQUFBLENBQWEsWUFBQTtBQUNiLGdCQUFBLENBQWMsYUFBQTtBQUNkLE9BQUEsQ0FBSyxJQUFBO0FBQ0wsV0FBQSxDQUFTO0FBQUEsR0FBQTtBQUlYLFFBQUEsQ0FBQSxlQUFBLEVBQXlCLFFBQUE7QUFBQSxDQUFBLENBRXpCLENBQUMsTUFBTyxPQUFBLElBQVcsWUFBQSxFQUFjLE9BQUEsQ0FBUyxLQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IG1zZyA9PiBjb25zb2xlLmxvZyhtc2cpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhID0gMlxuICAgICwgYiA9IDNcbiAgICA7XG4gIHtcbiAgICBsZXQgdG1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdG1wO1xuICB9XG4gIGNvbnNvbGUubG9nKCd0bXAgaXMgdW5kZWZpbmVkOiAnLCB0eXBlb2YgdG1wID09ICd1bmRlZmluZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lLCBjb2RlcyA9ICdKYXZhU2NyaXB0JywgbGl2ZXNJbiA9ICdVU0EnKSB7XG4gIGNvbnNvbGUubG9nKCduYW1lOiAlcywgY29kZXM6ICVzLCBsaXZlcyBpbjogJXMnLCBuYW1lLCBjb2RlcywgbGl2ZXNJbik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBbYSwgW2JdLCBjLCBkXSA9IFsnaGVsbG8nLCBbJywgJywgJ2p1bmsnXSwgWyd3b3JsZCddXTtcbiAgY29uc29sZS5sb2coYSArIGIgKyBjKTsgLy8gaGVsbG8gd29ybGRcbn07XG4iLCIgLy8gQSBiaW5hcnkgdHJlZSBjbGFzcy5cbmZ1bmN0aW9uIFRyZWUobGVmdCwgbGFiZWwsIHJpZ2h0KSB7XG4gIHRoaXMubGVmdCA9IGxlZnQ7XG4gIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufVxuXG4vLyBBIHJlY3Vyc2l2ZSBnZW5lcmF0b3IgdGhhdCBpdGVyYXRlcyB0aGUgVHJlZSBsYWJlbHMgaW4tb3JkZXIuXG5mdW5jdGlvbiogaW5vcmRlcih0KSB7XG4gIGlmICh0KSB7XG4gICAgeWllbGQqIGlub3JkZXIodC5sZWZ0KTtcbiAgICB5aWVsZCB0LmxhYmVsO1xuICAgIHlpZWxkKiBpbm9yZGVyKHQucmlnaHQpO1xuICB9XG59XG5cbi8vIE1ha2UgYSB0cmVlXG5mdW5jdGlvbiBtYWtlKGFycmF5KSB7XG4gIC8vIExlYWYgbm9kZTpcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PSAxKSByZXR1cm4gbmV3IFRyZWUobnVsbCwgYXJyYXlbMF0sIG51bGwpO1xuICByZXR1cm4gbmV3IFRyZWUobWFrZShhcnJheVswXSksIGFycmF5WzFdLCBtYWtlKGFycmF5WzJdKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgdHJlZSA9IG1ha2UoW1tbJ2EnXSwgJ2InLCBbJ2MnXV0sICdkJywgW1snZSddLCAnZicsIFsnZyddXV0pO1xuICBjb25zb2xlLmxvZygnZ2VuZXJhdGluZyB0cmVlIGxhYmVscyBpbiBvcmRlcjonKTtcblxuICAvLyBJdGVyYXRlIG92ZXIgaXRcbiAgZm9yIChsZXQgbm9kZSBvZiBpbm9yZGVyKHRyZWUpKSB7XG4gICAgY29uc29sZS5sb2cobm9kZSk7IC8vIGEsIGIsIGMsIGQsIC4uLlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYmxvY2tTY29wZSAgICAgICAgOiAgcmVxdWlyZSgnLi9ibG9jay1zY29wZScpXG4gICwgZGVzdHJ1Y3R1cmluZyAgICAgOiAgcmVxdWlyZSgnLi9kZXN0cnVjdHVyaW5nJylcbiAgLCBnZW5lcmF0b3JzICAgICAgICA6ICByZXF1aXJlKCcuL2dlbmVyYXRvcnMnKVxuICAsIGl0ZXJhdG9ycyAgICAgICAgIDogIHJlcXVpcmUoJy4vaXRlcmF0b3JzJylcbiAgLCBkZWZhdWx0UGFyYW1ldGVycyA6ICByZXF1aXJlKCcuL2RlZmF1bHQtcGFyYW1ldGVycycpXG4gICwgcmVzdFBhcmFtZXRlcnMgICAgOiAgcmVxdWlyZSgnLi9yZXN0LXBhcmFtZXRlcnMnKVxuICAsIHNwcmVhZE9wZXJhdG9yICAgIDogIHJlcXVpcmUoJy4vc3ByZWFkLW9wZXJhdG9yJylcbiAgLCBhcnJvd0Z1bmN0aW9ucyAgICA6ICByZXF1aXJlKCcuL2Fycm93LWZ1bmN0aW9ucycpXG59O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBbMSwgMiwgM10pIHtcbiAgICBjb25zb2xlLmxvZygnZWxlbWVudDonLCBlbGVtZW50KTtcbiAgfVxufTtcbiIsIiBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByaW50TGlzdChsaXN0bmFtZSwgLi4uaXRlbXMpIHtcbiAgIGNvbnNvbGUubG9nKCdsaXN0ICVzIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zJywgbGlzdG5hbWUpO1xuICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkgeyBjb25zb2xlLmxvZyhpdGVtKTsgfSk7XG4gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG51bWJlcnMpIHtcbiAgZnVuY3Rpb24gYWRkKHgsIHkpIHtcbiAgICBjb25zb2xlLmxvZygnJWQgKyAlZCA9ICVkJywgeCwgeSwgeCArIHkpO1xuICB9XG4gIGFkZCguLi5udW1iZXJzKTtcbn07XG4iLCJjb25zb2xlLmxvZygnc3RhcnRpbmcgZXM2aWZ5IGRlbW8nKTtcblxubGV0IG1ha2VNb25zdGVyICAgPSAgcmVxdWlyZSgnLi9tYWtlLW1vbnN0ZXInKTtcbmxldCB7IFxuICAgIGJsb2NrU2NvcGVcbiAgLCBkZXN0cnVjdHVyaW5nXG4gICwgZ2VuZXJhdG9ycyBcbiAgLCBpdGVyYXRvcnNcbiAgLCBkZWZhdWx0UGFyYW1ldGVyc1xuICAsIHJlc3RQYXJhbWV0ZXJzXG4gICwgc3ByZWFkT3BlcmF0b3JcbiAgLCBhcnJvd0Z1bmN0aW9uc1xufSA9IHJlcXVpcmUoJy4vZmVhdHVyZXMnKTtcblxuYmxvY2tTY29wZSgpO1xuZGVzdHJ1Y3R1cmluZygpO1xuZ2VuZXJhdG9ycygpO1xuY29uc3QgbW9uc3RlciA9IG1ha2VNb25zdGVyKDMsIDQsICdjb29raWUnKTtcblxuY29uc29sZS5sb2coJ0kgYW0gdGhlICVzIG1vbnN0ZXInLCBtb25zdGVyLm5hbWUpO1xubW9uc3Rlci5hdHRhY2soJ2Nvb2tpZSB0aGllZicpO1xuXG5pdGVyYXRvcnMoKTtcblxuZGVmYXVsdFBhcmFtZXRlcnMoJ0hlaW56IE11ZWxsZWltZXInLCAnQ29ib2wnLCAnR2VybWFueScpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ1Rob3JzdGVuIExvcmVueicpO1xuZGVmYXVsdFBhcmFtZXRlcnMoJ0dyYW5kcGEgT3R0bycsICdKYXZhJyk7XG5cbnJlc3RQYXJhbWV0ZXJzKCdhbmltYWxzJywgJ2NhdCcsICdkb2cnLCAnemVicmEnLCAnZ2lyYWZmZScsICdsaW9uJyk7XG5cbnNwcmVhZE9wZXJhdG9yKFsgMywgNCBdKTtcblxuYXJyb3dGdW5jdGlvbnMoJ2EgbWVzc3NhZ2UgZnJvbSB5b3VyIHBlcnNvbmFsIGFycm93IGZ1bmN0aW9uJyk7XG4iLCJjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBuYW1lKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG4gIGF0dGFjayhjaGFyYWN0ZXIpIHtcbiAgICBjb25zb2xlLmxvZygnYXR0YWNraW5nJywgY2hhcmFjdGVyKTtcbiAgfVxufVxuXG5jbGFzcyBNb25zdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgbmFtZSkge1xuICAgIHN1cGVyKHgsIHkpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oZWFsdGhfID0gMTAwO1xuICB9XG5cbiAgYXR0YWNrKGNoYXJhY3Rlcikge1xuICAgIHN1cGVyLmF0dGFjayhjaGFyYWN0ZXIpO1xuICB9XG5cbiAgZ2V0IGlzQWxpdmUoKSB7IHJldHVybiB0aGlzLmhlYWx0aCA+IDA7IH1cbiAgZ2V0IGhlYWx0aCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoXzsgfVxuICBzZXQgaGVhbHRoKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdIZWFsdGggbXVzdCBiZSBub24tbmVnYXRpdmUuJyk7XG4gICAgdGhpcy5oZWFsdGhfID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeCwgeSwgbmFtZSkge1xuICByZXR1cm4gbmV3IE1vbnN0ZXIoeCwgeSwgbmFtZSk7XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTIgVHJhY2V1ciBBdXRob3JzLlxuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8qKlxuICogVGhlIHRyYWNldXIgcnVudGltZS5cbiAqL1xuKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyICRjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICB2YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgJGZyZWV6ZSA9IE9iamVjdC5mcmVlemU7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICB2YXIgJGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmdW5jdGlvbiBub25FbnVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdmFyIG1ldGhvZCA9IG5vbkVudW07XG5cbiAgZnVuY3Rpb24gcG9seWZpbGxTdHJpbmcoU3RyaW5nKSB7XG4gICAgLy8gSGFybW9ueSBTdHJpbmcgRXh0cmFzXG4gICAgLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTpzdHJpbmdfZXh0cmFzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3RyaW5nLnByb3RvdHlwZSwge1xuICAgICAgc3RhcnRzV2l0aDogbWV0aG9kKGZ1bmN0aW9uKHMpIHtcbiAgICAgICByZXR1cm4gdGhpcy5sYXN0SW5kZXhPZihzLCAwKSA9PT0gMDtcbiAgICAgIH0pLFxuICAgICAgZW5kc1dpdGg6IG1ldGhvZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciB0ID0gU3RyaW5nKHMpO1xuICAgICAgICB2YXIgbCA9IHRoaXMubGVuZ3RoIC0gdC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBsID49IDAgJiYgdGhpcy5pbmRleE9mKHQsIGwpID09PSBsO1xuICAgICAgfSksXG4gICAgICBjb250YWluczogbWV0aG9kKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzKSAhPT0gLTE7XG4gICAgICB9KSxcbiAgICAgIHRvQXJyYXk6IG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXQoJycpO1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vIDE1LjUuMy40IFN0cmluZy5yYXcgKCBjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgICAkZGVmaW5lUHJvcGVydHkoU3RyaW5nLCAncmF3Jywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGNhbGxzaXRlKSB7XG4gICAgICAgIHZhciByYXcgPSBjYWxsc2l0ZS5yYXc7XG4gICAgICAgIHZhciBsZW4gPSByYXcubGVuZ3RoID4+PiAwOyAgLy8gVG9VaW50XG4gICAgICAgIGlmIChsZW4gPT09IDApXG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgcyA9ICcnO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgcyArPSByYXdbaV07XG4gICAgICAgICAgaWYgKGkgKyAxID09PSBsZW4pXG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICBzICs9IGFyZ3VtZW50c1srK2ldO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNvdW50ZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBuZXcgdW5pcXVlIHN0cmluZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gbmV3VW5pcXVlU3RyaW5nKCkge1xuICAgIHJldHVybiAnX18kJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkgKyAnJCcgKyArK2NvdW50ZXIgKyAnJF9fJztcbiAgfVxuXG4gIHZhciBuYW1lUmUgPSAvXl9fXFwkKD86XFxkKylcXCQoPzpcXGQrKVxcJF9fJC87XG5cbiAgdmFyIGludGVybmFsU3RyaW5nVmFsdWVOYW1lID0gbmV3VW5pcXVlU3RyaW5nKCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcHJpdmF0ZSBuYW1lIG9iamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzdHJpbmcgT3B0aW9uYWwgc3RyaW5nIHVzZWQgZm9yIHRvU3RyaW5nLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIE5hbWUoc3RyaW5nKSB7XG4gICAgaWYgKCFzdHJpbmcpXG4gICAgICBzdHJpbmcgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWUsIHt2YWx1ZTogbmV3VW5pcXVlU3RyaW5nKCl9KTtcblxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgJGZyZWV6ZSh0b1N0cmluZyk7XG4gICAgJGZyZWV6ZSh0b1N0cmluZy5wcm90b3R5cGUpO1xuICAgIHZhciB0b1N0cmluZ0Rlc2NyID0gbWV0aG9kKHRvU3RyaW5nKTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgJ3RvU3RyaW5nJywgdG9TdHJpbmdEZXNjcik7XG5cbiAgICB0aGlzLnB1YmxpYyA9ICRmcmVlemUoJGNyZWF0ZShudWxsLCB7XG4gICAgICB0b1N0cmluZzogbWV0aG9kKCRmcmVlemUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICB9KSlcbiAgICB9KSk7XG4gICAgJGZyZWV6ZSh0aGlzLnB1YmxpYy50b1N0cmluZy5wcm90b3R5cGUpO1xuXG4gICAgJGZyZWV6ZSh0aGlzKTtcbiAgfTtcbiAgJGZyZWV6ZShOYW1lKTtcbiAgJGZyZWV6ZShOYW1lLnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gYXNzZXJ0TmFtZSh2YWwpIHtcbiAgICBpZiAoIU5hbWVNb2R1bGUuaXNOYW1lKHZhbCkpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHZhbCArICcgaXMgbm90IGEgTmFtZScpO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICAvLyBQcml2YXRlIG5hbWUuXG5cbiAgLy8gQ29sbGVjdGlvbiBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG4gIHZhciBlbGVtZW50RGVsZXRlTmFtZSA9IG5ldyBOYW1lKCk7XG4gIHZhciBlbGVtZW50R2V0TmFtZSA9IG5ldyBOYW1lKCk7XG4gIHZhciBlbGVtZW50U2V0TmFtZSA9IG5ldyBOYW1lKCk7XG5cbiAgLy8gSEFDSzogV2Ugc2hvdWxkIHVzZSBydW50aW1lL21vZHVsZXMvc3RkL25hbWUuanMgb3Igc29tZXRoaW5nIGxpa2UgdGhhdC5cbiAgdmFyIE5hbWVNb2R1bGUgPSAkZnJlZXplKHtcbiAgICBOYW1lOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBuZXcgTmFtZShzdHIpO1xuICAgIH0sXG4gICAgaXNOYW1lOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geCBpbnN0YW5jZW9mIE5hbWU7XG4gICAgfSxcbiAgICBlbGVtZW50R2V0OiBlbGVtZW50R2V0TmFtZSxcbiAgICBlbGVtZW50U2V0OiBlbGVtZW50U2V0TmFtZSxcbiAgICBlbGVtZW50RGVsZXRlOiBlbGVtZW50RGVsZXRlTmFtZVxuICB9KTtcblxuICB2YXIgZmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLmZpbHRlcik7XG5cbiAgLy8gT3ZlcnJpZGUgZ2V0T3duUHJvcGVydHlOYW1lcyB0byBmaWx0ZXIgb3V0IHByaXZhdGUgbmFtZSBrZXlzLlxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkge1xuICAgIHJldHVybiBmaWx0ZXIoJGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSwgZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gIW5hbWVSZS50ZXN0KHN0cik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPdmVycmlkZSBPYmplY3QucHJvdG90cGUuaGFzT3duUHJvcGVydHkgdG8gYWx3YXlzIHJldHVybiBmYWxzZSBmb3JcbiAgLy8gcHJpdmF0ZSBuYW1lcy5cbiAgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkobmFtZSkge1xuICAgIGlmIChOYW1lTW9kdWxlLmlzTmFtZShuYW1lKSB8fCBuYW1lUmUudGVzdChuYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50RGVsZXRlKG9iamVjdCwgbmFtZSkge1xuICAgIGlmICh0cmFjZXVyLm9wdGlvbnMudHJhcE1lbWJlckxvb2t1cCAmJlxuICAgICAgICBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgZWxlbWVudERlbGV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHkob2JqZWN0LCBlbGVtZW50RGVsZXRlTmFtZSkuY2FsbChvYmplY3QsIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZXRlUHJvcGVydHkob2JqZWN0LCBuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRHZXQob2JqZWN0LCBuYW1lKSB7XG4gICAgaWYgKHRyYWNldXIub3B0aW9ucy50cmFwTWVtYmVyTG9va3VwICYmXG4gICAgICAgIGhhc1ByaXZhdGVOYW1lUHJvcGVydHkob2JqZWN0LCBlbGVtZW50R2V0TmFtZSkpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eShvYmplY3QsIGVsZW1lbnRHZXROYW1lKS5jYWxsKG9iamVjdCwgbmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudEhhcyhvYmplY3QsIG5hbWUpIHtcbiAgICAvLyBTaG91bGQgd2UgYWxsb3cgdHJhcHBpbmcgdGhpcyB0b28/XG4gICAgcmV0dXJuIGhhcyhvYmplY3QsIG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudFNldChvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRyYWNldXIub3B0aW9ucy50cmFwTWVtYmVyTG9va3VwICYmXG4gICAgICAgIGhhc1ByaXZhdGVOYW1lUHJvcGVydHkob2JqZWN0LCBlbGVtZW50U2V0TmFtZSkpIHtcbiAgICAgIGdldFByb3BlcnR5KG9iamVjdCwgZWxlbWVudFNldE5hbWUpLmNhbGwob2JqZWN0LCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnROb3ROYW1lKHMpIHtcbiAgICBpZiAobmFtZVJlLnRlc3QocykpXG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBhY2Nlc3MgdG8gcHJpdmF0ZSBuYW1lJyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eShvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkpXG4gICAgICByZXR1cm4gZGVsZXRlIG9iamVjdFtuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXV07XG4gICAgaWYgKG5hbWVSZS50ZXN0KG5hbWUpKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGRlbGV0ZSBvYmplY3RbbmFtZV07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkpXG4gICAgICByZXR1cm4gb2JqZWN0W25hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdXTtcbiAgICBpZiAobmFtZVJlLnRlc3QobmFtZSkpXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBvYmplY3RbbmFtZV07XG4gIH1cblxuICBmdW5jdGlvbiBoYXNQcml2YXRlTmFtZVByb3BlcnR5KG9iamVjdCwgbmFtZSkge1xuICAgIHJldHVybiBuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXSBpbiBPYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhcyhvYmplY3QsIG5hbWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkgfHwgbmFtZVJlLnRlc3QobmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG5hbWUgaW4gT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIGEgYml0IHNpbXBsaXN0aWMuXG4gIC8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPXN0cmF3bWFuOnJlZmFjdG9yaW5nX3B1dCNvYmplY3QuX2dldF9zZXRfcHJvcGVydHlfYnVpbHQtaW5zXG4gIGZ1bmN0aW9uIHNldFByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoTmFtZU1vZHVsZS5pc05hbWUobmFtZSkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gJGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdXSk7XG4gICAgICBpZiAoZGVzY3JpcHRvcilcbiAgICAgICAgb2JqZWN0W25hbWVbaW50ZXJuYWxTdHJpbmdWYWx1ZU5hbWVdXSA9IHZhbHVlO1xuICAgICAgZWxzZVxuICAgICAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXSwgbm9uRW51bSh2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnROb3ROYW1lKG5hbWUpO1xuICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKSB7XG4gICAgICAvLyBQcml2YXRlIG5hbWVzIHNob3VsZCBuZXZlciBiZSBlbnVtZXJhYmxlLlxuICAgICAgaWYgKGRlc2NyaXB0b3IuZW51bWVyYWJsZSkge1xuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmNyZWF0ZShkZXNjcmlwdG9yLCB7XG4gICAgICAgICAgZW51bWVyYWJsZToge3ZhbHVlOiBmYWxzZX1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lW2ludGVybmFsU3RyaW5nVmFsdWVOYW1lXSwgZGVzY3JpcHRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydE5vdE5hbWUobmFtZSk7XG4gICAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiAkZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgbmFtZSkge1xuICAgIHdoaWxlIChvYmogIT09IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgbmFtZSk7XG4gICAgICBpZiAocmVzdWx0KVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgb2JqID0gJGdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKSB7XG4gICAgaWYgKE5hbWVNb2R1bGUuaXNOYW1lKG5hbWUpKVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBhc3NlcnROb3ROYW1lKG5hbWUpO1xuICAgIHJldHVybiAkZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgbmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2x5ZmlsbE9iamVjdChPYmplY3QpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknLCB7dmFsdWU6IGRlZmluZVByb3BlcnR5fSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2RlbGV0ZVByb3BlcnR5JywgbWV0aG9kKGRlbGV0ZVByb3BlcnR5KSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldE93blByb3BlcnR5TmFtZXMnLFxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IGdldE93blByb3BlcnR5TmFtZXN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0UHJvcGVydHknLCBtZXRob2QoZ2V0UHJvcGVydHkpKTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0UHJvcGVydHlEZXNjcmlwdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kKGdldFByb3BlcnR5RGVzY3JpcHRvcikpO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdoYXMnLCBtZXRob2QoaGFzKSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ3NldFByb3BlcnR5JywgbWV0aG9kKHNldFByb3BlcnR5KSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogaGFzT3duUHJvcGVydHl9KTtcblxuICAgIC8vIE9iamVjdC5pc1xuXG4gICAgLy8gVW5saWtlID09PSB0aGlzIHJldHVybnMgdHJ1ZSBmb3IgKE5hTiwgTmFOKSBhbmQgZmFsc2UgZm9yICgwLCAtMCkuXG4gICAgZnVuY3Rpb24gaXMobGVmdCwgcmlnaHQpIHtcbiAgICAgIGlmIChsZWZ0ID09PSByaWdodClcbiAgICAgICAgcmV0dXJuIGxlZnQgIT09IDAgfHwgMSAvIGxlZnQgPT09IDEgLyByaWdodDtcbiAgICAgIHJldHVybiBsZWZ0ICE9PSBsZWZ0ICYmIHJpZ2h0ICE9PSByaWdodDtcbiAgICB9XG5cbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnaXMnLCBtZXRob2QoaXMpKTtcbiAgfVxuXG4gIC8vIEl0ZXJhdG9ycy5cbiAgdmFyIGl0ZXJhdG9yTmFtZSA9IG5ldyBOYW1lKCdpdGVyYXRvcicpO1xuXG4gIHZhciBJdGVyTW9kdWxlID0ge1xuICAgIGdldCBpdGVyYXRvcigpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvck5hbWU7XG4gICAgfSxcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhlIHJlc3Qgb2YgQGl0ZXIgYW5kIG1vdmUgaXQgdG8gYSBkaWZmZXJlbnQgZmlsZSB0aGF0XG4gICAgLy8gZ2V0cyBjb21waWxlZC5cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvcihjb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGdldFByb3BlcnR5KGNvbGxlY3Rpb24sIGl0ZXJhdG9yTmFtZSkuY2FsbChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJdGVyYXRvcihvYmplY3QpIHtcbiAgICAvLyBHZW5lcmF0b3IgaW5zdGFuY2VzIGFyZSBpdGVyYWJsZS5cbiAgICBzZXRQcm9wZXJ0eShvYmplY3QsIGl0ZXJhdG9yTmFtZSwgcmV0dXJuVGhpcyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvbHlmaWxsQXJyYXkoQXJyYXkpIHtcbiAgICAvLyBNYWtlIGFycmF5cyBpdGVyYWJsZS5cbiAgICBkZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIEl0ZXJNb2R1bGUuaXRlcmF0b3IsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBhcnJheVtpbmRleCsrXSwgZG9uZTogZmFsc2V9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYW5jZWxsZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBEZWZlcnJlZChjYW5jZWxsZXIpIHtcbiAgICB0aGlzLmNhbmNlbGxlcl8gPSBjYW5jZWxsZXI7XG4gICAgdGhpcy5saXN0ZW5lcnNfID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnkoc2VsZikge1xuICAgIHdoaWxlIChzZWxmLmxpc3RlbmVyc18ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBzZWxmLmxpc3RlbmVyc18uc2hpZnQoKTtcbiAgICAgIHZhciBjdXJyZW50UmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc2VsZi5yZXN1bHRfWzFdKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5lcnJiYWNrKVxuICAgICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gY3VycmVudC5lcnJiYWNrLmNhbGwodW5kZWZpbmVkLCBzZWxmLnJlc3VsdF9bMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5jYWxsYmFjaylcbiAgICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IGN1cnJlbnQuY2FsbGJhY2suY2FsbCh1bmRlZmluZWQsIHNlbGYucmVzdWx0X1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnQuZGVmZXJyZWQuY2FsbGJhY2soY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGN1cnJlbnQuZGVmZXJyZWQuZXJyYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh1bnVzZWQpIHt9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlyZShzZWxmLCB2YWx1ZSwgaXNFcnJvcikge1xuICAgIGlmIChzZWxmLmZpcmVkXylcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBmaXJlZCcpO1xuXG4gICAgc2VsZi5maXJlZF8gPSB0cnVlO1xuICAgIHNlbGYucmVzdWx0XyA9IFt2YWx1ZSwgaXNFcnJvcl07XG4gICAgbm90aWZ5KHNlbGYpO1xuICB9XG5cbiAgRGVmZXJyZWQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBEZWZlcnJlZCxcblxuICAgIGZpcmVkXzogZmFsc2UsXG4gICAgcmVzdWx0XzogdW5kZWZpbmVkLFxuXG4gICAgY3JlYXRlUHJvbWlzZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge3RoZW46IHRoaXMudGhlbi5iaW5kKHRoaXMpLCBjYW5jZWw6IHRoaXMuY2FuY2VsLmJpbmQodGhpcyl9O1xuICAgIH0sXG5cbiAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGZpcmUodGhpcywgdmFsdWUsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgZXJyYmFjazogZnVuY3Rpb24oZXJyKSB7XG4gICAgICBmaXJlKHRoaXMsIGVyciwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHRoZW46IGZ1bmN0aW9uKGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IERlZmVycmVkKHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5saXN0ZW5lcnNfLnB1c2goe1xuICAgICAgICBkZWZlcnJlZDogcmVzdWx0LFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIGVycmJhY2s6IGVycmJhY2tcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZmlyZWRfKVxuICAgICAgICBub3RpZnkodGhpcyk7XG4gICAgICByZXR1cm4gcmVzdWx0LmNyZWF0ZVByb21pc2UoKTtcbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmZpcmVkXylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGZpbmlzaGVkJyk7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKHRoaXMuY2FuY2VsbGVyXykge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmNhbmNlbGxlcl8odGhpcyk7XG4gICAgICAgIGlmICghcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEVycm9yKHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBuZXcgRXJyb3IoJ2NhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmZpcmVkXykge1xuICAgICAgICB0aGlzLnJlc3VsdF8gPSBbcmVzdWx0LCB0cnVlXTtcbiAgICAgICAgbm90aWZ5KHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgbW9kdWxlcyA9ICRmcmVlemUoe1xuICAgIGdldCAnQG5hbWUnKCkge1xuICAgICAgcmV0dXJuIE5hbWVNb2R1bGU7XG4gICAgfSxcbiAgICBnZXQgJ0BpdGVyJygpIHtcbiAgICAgIHJldHVybiBJdGVyTW9kdWxlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETyhhcnYpOiBEb24ndCBleHBvcnQgdGhpcy5cbiAgZ2xvYmFsLkRlZmVycmVkID0gRGVmZXJyZWQ7XG5cbiAgZnVuY3Rpb24gc2V0dXBHbG9iYWxzKGdsb2JhbCkge1xuICAgIHBvbHlmaWxsU3RyaW5nKGdsb2JhbC5TdHJpbmcpO1xuICAgIHBvbHlmaWxsT2JqZWN0KGdsb2JhbC5PYmplY3QpO1xuICAgIHBvbHlmaWxsQXJyYXkoZ2xvYmFsLkFycmF5KTtcbiAgfVxuXG4gIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuXG4gIC8vIFJldHVybiB0aGUgcnVudGltZSBuYW1lc3BhY2UuXG4gIHZhciBydW50aW1lID0ge1xuICAgIERlZmVycmVkOiBEZWZlcnJlZCxcbiAgICBhZGRJdGVyYXRvcjogYWRkSXRlcmF0b3IsXG4gICAgYXNzZXJ0TmFtZTogYXNzZXJ0TmFtZSxcbiAgICBjcmVhdGVOYW1lOiBOYW1lTW9kdWxlLk5hbWUsXG4gICAgZGVsZXRlUHJvcGVydHk6IGRlbGV0ZVByb3BlcnR5LFxuICAgIGVsZW1lbnREZWxldGU6IGVsZW1lbnREZWxldGUsXG4gICAgZWxlbWVudEdldDogZWxlbWVudEdldCxcbiAgICBlbGVtZW50SGFzOiBlbGVtZW50SGFzLFxuICAgIGVsZW1lbnRTZXQ6IGVsZW1lbnRTZXQsXG4gICAgZ2V0SXRlcmF0b3I6IGdldEl0ZXJhdG9yLFxuICAgIGdldFByb3BlcnR5OiBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eTogc2V0UHJvcGVydHksXG4gICAgc2V0dXBHbG9iYWxzOiBzZXR1cEdsb2JhbHMsXG4gICAgaGFzOiBoYXMsXG4gICAgbW9kdWxlczogbW9kdWxlcyxcbiAgfTtcblxuICAvLyBUaGlzIGZpbGUgaXMgc29tZXRpbWVzIHVzZWQgd2l0aG91dCB0cmFjZXVyLmpzLlxuICBnbG9iYWwuJHRyYWNldXJSdW50aW1lID0gcnVudGltZTtcblxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzKTtcbiJdfQ==
;