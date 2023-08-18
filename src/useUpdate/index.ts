import { useState, useRef } from 'react';

const useUpdate = function () {
  const [, setState] = useState(false);
  const { current: update } = useRef(() => {
    setState((state) => !state);
  });
  return update;
};

export default useUpdate;
