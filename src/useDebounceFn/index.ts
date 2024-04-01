import { useRef } from 'react';

const useDebounceFn = (fn: (...params: any[]) => any, wait?: number, immediately?: boolean) => {
  let timeRef: ReturnType<typeof setTimeout>;

  const waitTime = wait ?? 300;

  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
    timeRef = 0;
  });

  const { current: debounceFn } = useRef(function (...args: any[]) {
    cancel();

    timeRef = setTimeout(() => {
      fn(...args);

      cancel();
    }, waitTime);
  });

  // 立即执行
  const { current: ImmDebounceFn } = useRef(function (...args: any[]) {
    cancel();

    if (!timeRef) {
      fn(...args);

      timeRef = setTimeout(cancel, waitTime);
    } else {
      timeRef = setTimeout(() => {
        fn(...args);

        cancel();
      }, waitTime);
    }
  });

  return immediately ? ImmDebounceFn : debounceFn;
};

export default useDebounceFn;
