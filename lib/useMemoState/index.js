"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = require("react");
var useMerge_1 = require("../useMerge");
function useMemoState(params) {
  var initalState = (0, react_1.useRef)(params).current;
  var _a = (0, react_1.useState)(initalState),
    state = _a[0],
    setState = _a[1];
  var resetState = (0, react_1.useRef)(function (otherParams) {
    if (otherParams) {
      setState((0, useMerge_1.default)(initalState, otherParams));
    } else {
      setState(initalState);
    }
  }).current;
  return [state, setState, resetState];
}
exports.default = useMemoState;