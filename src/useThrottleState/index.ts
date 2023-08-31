import { useState, useRef } from 'react';

const useThrottleState = <T>(initialValue: T | (() => T), wait: number) => {
  const [state, setState] = useState<T>(initialValue);

  let waitTime = wait ?? 300;

  const runing = useRef(false);

  let timeRef: ReturnType<typeof setTimeout>;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });

  const { current: setThrottleState } = useRef(function (arg: T | (() => T)) {
    if (runing.current) return;

    runing.current = true;

    timeRef = setTimeout(() => {
      setState(arg);

      runing.current = false;

      cancel();
    }, waitTime);
  });

  return [state, setThrottleState];
};

export default useThrottleState;
