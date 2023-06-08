"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils_1 = require("../utils");
function mergeObject(param1, param2) {
  var mergeParams = __assign({}, param1);
  for (var key in param2) {
    if (!(0, utils_1.isTypeSame)(mergeParams[key], param2[key])) {
      mergeParams[key] = param2[key];
    } else if ((0, utils_1.isObject)(mergeParams[key])) {
      mergeParams[key] = mergeObject(mergeParams[key], param2[key]);
    } else if ((0, utils_1.isArray)(mergeParams[key])) {
      mergeParams[key] = __spreadArray(__spreadArray([], mergeParams[key], true), param2[key], true);
    } else {
      mergeParams[key] = param2[key];
    }
  }
  return mergeParams;
}
function useMerge(param1, param2) {
  if (!(0, utils_1.isTypeSame)(param1, param2) && !(0, utils_1.isFunction)(param1) && !(0, utils_1.isFunction)(param2)) return param1;
  var _merged,
    _param1 = param1,
    _param2 = param2;
  if ((0, utils_1.isFunction)(param1)) {
    _param1 = param1();
  }
  if ((0, utils_1.isFunction)(param2)) {
    _param2 = param2();
  }
  switch (true) {
    case (0, utils_1.isObject)(_param1):
      _merged = mergeObject(_param1, _param2);
      break;
    case (0, utils_1.isArray)(_param1):
      _merged = __spreadArray(__spreadArray([], _param1, true), _param2, true);
      break;
    default:
      _merged = _param2;
      break;
  }
  return _merged;
}
exports.default = useMerge;