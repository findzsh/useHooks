import { useRef } from 'react';

const useThrottleFn = (fn: (...params: any[]) => any, wait: number) => {
  const runing = useRef(false);

  let timeRef: ReturnType<typeof setTimeout>;

  let waitTime = wait ?? 300;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });
  const { current: throttledFn } = useRef(function (...args: any[]) {
    if (runing.current) return;

    runing.current = true;

    timeRef = setTimeout(() => {
      fn(...args);

      runing.current = false;

      cancel();
    }, waitTime);
  });

  return throttledFn;
};

export default useThrottleFn;
