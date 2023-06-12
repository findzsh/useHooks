(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.powerfulHooks = {}, global.react));
}(this, (function (exports, react) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var isObject = function isObject(value) {
    return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
  };
  var isArray = function isArray(value) {
    return Array.isArray(value);
  };
  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };
  var isString = function isString(value) {
    return typeof value === 'string';
  };
  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };
  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };
  var isUndef = function isUndef(value) {
    return typeof value === 'undefined';
  };
  function isTypeSame(param1, param2) {
    var same = false;
    switch (true) {
      case isObject(param1):
        same = isObject(param2);
        break;
      case isArray(param1):
        same = isArray(param2);
        break;
      case isFunction(param1):
        same = isFunction(param2);
        break;
      case isString(param1):
        same = isString(param2);
        break;
      case isBoolean(param1):
        same = isBoolean(param2);
        break;
      case isNumber(param1):
        same = isNumber(param2);
        break;
      case isUndef(param1):
        same = isUndef(param2);
        break;
    }
    return same;
  }

  function mergeObject(param1, param2) {
    var mergeParams = _objectSpread2({}, param1);
    for (var key in param2) {
      if (!isTypeSame(mergeParams[key], param2[key])) {
        mergeParams[key] = param2[key];
      } else if (isObject(mergeParams[key])) {
        mergeParams[key] = mergeObject(mergeParams[key], param2[key]);
      } else if (isArray(mergeParams[key])) {
        mergeParams[key] = [].concat(_toConsumableArray(mergeParams[key]), _toConsumableArray(param2[key]));
      } else {
        mergeParams[key] = param2[key];
      }
    }
    return mergeParams;
  }
  function useMerge(param1, param2) {
    if (!isTypeSame(param1, param2) && !isFunction(param1) && !isFunction(param2)) return param1;
    var _merged,
      _param1 = param1,
      _param2 = param2;
    if (isFunction(param1)) {
      _param1 = param1();
    }
    if (isFunction(param2)) {
      _param2 = param2();
    }
    switch (true) {
      case isObject(_param1):
        _merged = mergeObject(_param1, _param2);
        break;
      case isArray(_param1):
        _merged = [].concat(_toConsumableArray(_param1), _toConsumableArray(_param2));
        break;
      default:
        _merged = _param2;
        break;
    }
    return _merged;
  }

  function useMemoState(params) {
    var _useRef = react.useRef(params),
      initalState = _useRef.current;
    var _useState = react.useState(initalState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
    var _useRef2 = react.useRef(function (otherParams) {
        if (otherParams) {
          setState(useMerge(initalState, otherParams));
        } else {
          setState(initalState);
        }
      }),
      resetState = _useRef2.current;
    return [state, setState, resetState];
  }

  exports.useMemoState = useMemoState;
  exports.useMerge = useMerge;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
