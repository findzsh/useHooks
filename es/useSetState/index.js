function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import { useState, useRef } from 'react';
import { getType, isObject, isFunction } from '../utils';
import useMerge from '../useMerge';
export default function useSetState(initValue) {
  var _useRef = useRef(initValue),
    initParams = _useRef.current;
  var _useRef2 = useRef(getType(initValue)),
    initType = _useRef2.current;
  var _useState = useState(initParams),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useRef3 = useRef(function (newValue) {
      if (getType(newValue) === initType) {
        switch (true) {
          case isObject(newValue):
            setState(function (preState) {
              return Object.assign(Object.assign({}, preState), newValue);
            });
            break;
          case isFunction(newValue):
            setState(function (preState) {
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
    }),
    setNewState = _useRef3.current;
  var _useRef4 = useRef(function (resetValue) {
      if (resetValue) {
        setState(useMerge(initParams, resetValue));
      } else {
        setState(initParams);
      }
    }),
    reset = _useRef4.current;
  return [state, setNewState, reset];
}
