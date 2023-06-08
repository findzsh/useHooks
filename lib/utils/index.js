"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypeSame = exports.isUndef = exports.isNumber = exports.isBoolean = exports.isString = exports.isFunction = exports.isArray = exports.isObject = void 0;
var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
};
exports.isObject = isObject;
var isArray = function isArray(value) {
  return Array.isArray(value);
};
exports.isArray = isArray;
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
exports.isFunction = isFunction;
var isString = function isString(value) {
  return typeof value === 'string';
};
exports.isString = isString;
var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
exports.isBoolean = isBoolean;
var isNumber = function isNumber(value) {
  return typeof value === 'number';
};
exports.isNumber = isNumber;
var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};
exports.isUndef = isUndef;
function isTypeSame(param1, param2) {
  var same = false;
  switch (true) {
    case (0, exports.isObject)(param1):
      same = (0, exports.isObject)(param2);
      break;
    case (0, exports.isArray)(param1):
      same = (0, exports.isArray)(param2);
      break;
    case (0, exports.isFunction)(param1):
      same = (0, exports.isFunction)(param2);
      break;
    case (0, exports.isString)(param1):
      same = (0, exports.isString)(param2);
      break;
    case (0, exports.isBoolean)(param1):
      same = (0, exports.isBoolean)(param2);
      break;
    case (0, exports.isNumber)(param1):
      same = (0, exports.isNumber)(param2);
      break;
    case (0, exports.isUndef)(param1):
      same = (0, exports.isUndef)(param2);
      break;
  }
  return same;
}
exports.isTypeSame = isTypeSame;