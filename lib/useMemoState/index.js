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

// src/useMemoState/index.ts
var useMemoState_exports = {};
__export(useMemoState_exports, {
  default: () => useMemoState,
});
module.exports = __toCommonJS(useMemoState_exports);
var import_react = require('react');
var import_useMerge = __toESM(require('../useMerge'));
function useMemoState(params) {
  const { current: initalState } = (0, import_react.useRef)(params);
  const [state, setState] = (0, import_react.useState)(initalState);
  const { current: resetState } = (0, import_react.useRef)((otherParams) => {
    if (otherParams) {
      setState((0, import_useMerge.default)(initalState, otherParams));
    } else {
      setState(initalState);
    }
  });
  return [state, setState, resetState];
}
