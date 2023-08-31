import { useState, useRef } from 'react';

const useDebounceState = <T>(initialValue: T | (() => T), wait: number) => {
  const [state, setState] = useState<T>(initialValue);

  const waitTime = wait ?? 300;

  let timeRef: ReturnType<typeof setTimeout>;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });

  const { current: setDebounceState } = useRef((arg: T | (() => T)) => {
    cancel();

    timeRef = setTimeout(() => {
      setState(arg);

      cancel();
    }, waitTime);
  });

  return [state, setDebounceState];
};

export default useDebounceState;
