var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  getType: () => getType,
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isFunction: () => isFunction,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isString: () => isString,
  isTypeSame: () => isTypeSame,
  isUndef: () => isUndef,
});
module.exports = __toCommonJS(utils_exports);
var isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
var isArray = (value) => Array.isArray(value);
var isFunction = (value) => typeof value === 'function';
var isString = (value) => typeof value === 'string';
var isBoolean = (value) => typeof value === 'boolean';
var isNumber = (value) => typeof value === 'number';
var isUndef = (value) => typeof value === 'undefined';
function isTypeSame(param1, param2) {
  let same = false;
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
var getType = (value) => {
  if (isObject(value)) {
    return 'object';
  } else if (isArray(value)) {
    return 'array';
  } else {
    return typeof value;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    getType,
    isArray,
    isBoolean,
    isFunction,
    isNumber,
    isObject,
    isString,
    isTypeSame,
    isUndef,
  });
