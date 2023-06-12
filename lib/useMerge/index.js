"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMerge;
var _utils = require("../utils");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function mergeObject(param1, param2) {
  var mergeParams = _objectSpread({}, param1);
  for (var key in param2) {
    if (!(0, _utils.isTypeSame)(mergeParams[key], param2[key])) {
      mergeParams[key] = param2[key];
    } else if ((0, _utils.isObject)(mergeParams[key])) {
      mergeParams[key] = mergeObject(mergeParams[key], param2[key]);
    } else if ((0, _utils.isArray)(mergeParams[key])) {
      mergeParams[key] = [].concat(_toConsumableArray(mergeParams[key]), _toConsumableArray(param2[key]));
    } else {
      mergeParams[key] = param2[key];
    }
  }
  return mergeParams;
}
function useMerge(param1, param2) {
  if (!(0, _utils.isTypeSame)(param1, param2) && !(0, _utils.isFunction)(param1) && !(0, _utils.isFunction)(param2)) return param1;
  var _merged,
    _param1 = param1,
    _param2 = param2;
  if ((0, _utils.isFunction)(param1)) {
    _param1 = param1();
  }
  if ((0, _utils.isFunction)(param2)) {
    _param2 = param2();
  }
  switch (true) {
    case (0, _utils.isObject)(_param1):
      _merged = mergeObject(_param1, _param2);
      break;
    case (0, _utils.isArray)(_param1):
      _merged = [].concat(_toConsumableArray(_param1), _toConsumableArray(_param2));
      break;
    default:
      _merged = _param2;
      break;
  }
  return _merged;
}