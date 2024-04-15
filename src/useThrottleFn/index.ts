import { useRef } from 'react';

const useThrottleFn = (
  fn: (...params: any[]) => any,
  wait: number,
  immediately?: boolean,
) => {
  let timeRef: ReturnType<typeof setTimeout>;

  let waitTime = wait ?? 300;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);

    timeRef = null;
  });

  const { current: throttledFn } = useRef(function (...args: any[]) {
    if (timeRef) return;

    timeRef = setTimeout(() => {
      fn(...args);

      cancel();
    }, waitTime);
  });

  // 立即执行
  const { current: immeThrottledFn } = useRef(function (...args: any[]) {
    if (timeRef) return;

    fn(...args);

    timeRef = setTimeout(() => {
      cancel();
    }, waitTime);
  });

  return immediately ? immeThrottledFn : throttledFn;
};

export default useThrottleFn;
