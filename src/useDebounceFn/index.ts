import { useRef } from 'react';

const useDebounceFn = (fn: (...params: any[]) => any, wait: number) => {
  let timeRef: ReturnType<typeof setTimeout>;
  const { current: cancel } = useRef(() => {
    clearTimeout(timeRef);
  });
  const { current: debounceFn } = useRef(function () {
    let _arguments = arguments,
      that = this;
    cancel();
    timeRef = setTimeout(() => {
      fn.apply(that, _arguments);
      cancel();
    }, wait);
  });
  return debounceFn;
};

export default useDebounceFn;
