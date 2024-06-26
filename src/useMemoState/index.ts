import { useState, useRef, Dispatch, SetStateAction } from 'react';
import merge from '../useMerge';

export default function useMemoState<T>(
  params: T | (() => T),
): [T, Dispatch<SetStateAction<T>>, (arg0: any) => void] {
  const { current: initalState } = useRef(params);
  const [state, setState] = useState(initalState);
  const { current: resetState } = useRef((otherParams?: any) => {
    if (otherParams) {
        setState(merge(initalState, otherParams));
    } else {
      setState(initalState);
    }
  });
  return [state, setState, resetState];
}
