var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/useSetState/index.ts
var useSetState_exports = {};
__export(useSetState_exports, {
  default: () => useSetState,
});
module.exports = __toCommonJS(useSetState_exports);
var import_react = require('react');
var import_utils = require('../utils');
var import_useMerge = __toESM(require('../useMerge'));
function useSetState(initValue) {
  const { current: initParams } = (0, import_react.useRef)(initValue);
  const { current: initType } = (0, import_react.useRef)((0, import_utils.getType)(initValue));
  const [state, setState] = (0, import_react.useState)(initParams);
  const { current: setNewState } = (0, import_react.useRef)((newValue) => {
    if ((0, import_utils.getType)(newValue) === initType) {
      switch (true) {
        case (0, import_utils.isObject)(newValue):
          setState((preState) => {
            return Object.assign(Object.assign({}, preState), newValue);
          });
          break;
        case (0, import_utils.isFunction)(newValue):
          setState((preState) => {
            return Object.assign(Object.assign({}, preState), newValue(preState));
          });
          break;
        default:
          setState(newValue);
          break;
      }
    } else {
      setState(newValue);
    }
  });
  const { current: reset } = (0, import_react.useRef)((resetValue) => {
    if (resetValue) {
      setState((0, import_useMerge.default)(initParams, resetValue));
    } else {
      setState(initParams);
    }
  });
  return [state, setNewState, reset];
}
