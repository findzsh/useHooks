import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { getType, isObject, isFunction } from '../utils';
import useMerge from '../useMerge';

export default function useSetState<T>(
  initValue: T | (() => T),
): [
  T,
  Dispatch<SetStateAction<T | (() => T) | Partial<T> | Record<string, any>>>,
  (arg0?: any) => void,
] {
  const { current: initParams } = useRef(initValue);
  const { current: initType } = useRef(getType(initValue));
  const [state, setState] = useState(initParams);
  const { current: setNewState } = useRef((newValue: any) => {
    if (getType(newValue) === initType) {
      switch (true) {
        case isObject(newValue):
          setState((preState) => {
            return Object.assign(Object.assign({}, preState), newValue);
          });
          break;

        case isFunction(newValue):
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
  const { current: reset } = useRef((resetValue?: any) => {
    if (resetValue) {
      setState(useMerge(initParams, resetValue));
    } else {
      setState(initParams);
    }
  });
  return [state, setNewState, reset];
}
