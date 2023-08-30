import { useRef } from 'react';

const useThrottleFn = (fn: (...params: any[]) => any, wait: number) => {
  const runing = useRef(false);
  let timeRef: ReturnType<typeof setTimeout>;
  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });
  const { current: throttledFn } = useRef(function () {
    let _arguments = arguments,
      that = this;
    if (runing.current) return;
    runing.current = true;
    timeRef = setTimeout(() => {
      fn.apply(that, _arguments);
      runing.current = false;
      cancel();
    }, wait);
  });

  return throttledFn;
};

export default useThrottleFn;
