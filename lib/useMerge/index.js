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

// src/useMerge/index.ts
var useMerge_exports = {};
__export(useMerge_exports, {
  default: () => useMerge,
});
module.exports = __toCommonJS(useMerge_exports);
var import_utils = require('../utils');
function mergeObject(param1, param2) {
  let mergeParams = { ...param1 };
  for (let key in param2) {
    if (!(0, import_utils.isTypeSame)(mergeParams[key], param2[key])) {
      mergeParams[key] = param2[key];
    } else if ((0, import_utils.isObject)(mergeParams[key])) {
      mergeParams[key] = mergeObject(mergeParams[key], param2[key]);
    } else if ((0, import_utils.isArray)(mergeParams[key])) {
      mergeParams[key] = [...mergeParams[key], ...param2[key]];
    } else {
      mergeParams[key] = param2[key];
    }
  }
  return mergeParams;
}
function useMerge(param1, param2) {
  if (
    !(0, import_utils.isTypeSame)(param1, param2) &&
    !(0, import_utils.isFunction)(param1) &&
    !(0, import_utils.isFunction)(param2)
  )
    return param1;
  let _merged,
    _param1 = param1,
    _param2 = param2;
  if ((0, import_utils.isFunction)(param1)) {
    _param1 = param1();
  }
  if ((0, import_utils.isFunction)(param2)) {
    _param2 = param2();
  }
  switch (true) {
    case (0, import_utils.isObject)(_param1):
      _merged = mergeObject(_param1, _param2);
      break;
    case (0, import_utils.isArray)(_param1):
      _merged = [..._param1, ..._param2];
      break;
    default:
      _merged = _param2;
      break;
  }
  return _merged;
}
