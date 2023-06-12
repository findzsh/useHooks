"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = exports.isNumber = exports.isFunction = exports.isBoolean = exports.isArray = void 0;
exports.isTypeSame = isTypeSame;
exports.isUndef = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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