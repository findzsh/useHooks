import { useRef } from 'react';

const useDebounceFn = (fn: (...params: any[]) => any, wait: number) => {
  let timeRef: ReturnType<typeof setTimeout>;

  const waitTime = wait ?? 300;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });
  const { current: debounceFn } = useRef(function (...args: any[]) {
    cancel();

    timeRef = setTimeout(() => {
      fn(...args);

      cancel();
    }, waitTime);
  });

  return debounceFn;
};

export default useDebounceFn;
