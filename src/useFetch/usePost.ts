import { useState, useRef, useEffect } from 'react';
import useFetch from './useFetch';
import * as _ from 'lodash';

function usePost<T>(
  params: {
    url: string;
    data?: Record<string | number, string>;
    headers?: Record<string, string>;
    handler?: (responens: T) => any;
    manual?: boolean;
  },
  method: 'POST' | 'PUT' | 'DELETE' = 'POST',
) {
  const [responens, setResponens] = useState<T | undefined>();
  const [, useStatus] = useState(true);

  const useUpdate = () => {
    useStatus((status) => !!!status);
  };

  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const { current: handleResponens } = useRef((responens: T | undefined) => {
    setResponens(responens);
    setLoading(false);
    loadingRef.current = false;
    useUpdate();
  });
  const fetchInstanse = useRef<any>();

  const handleNewController = () => {
    const controller = new AbortController();
    const { signal } = controller;
    return { signal, controller };
  };
  const { current: run } = useRef((newData: Record<string, any> | void) => {
    if (loadingRef.current) {
      return;
    }
    const { url = '', data = {}, headers = {}, handler } = params;
    setLoading(true);
    loadingRef.current = true;
    useUpdate();
    const { signal, controller } = handleNewController();
    fetchInstanse.current = controller;
    let options = {
      headers,
      handler,
      handleResponens,
      method,
      credentials: 'include',
      signal,
    };
    let _data = Object.assign(Object.assign({}, data), newData);
    if (_data && Object.entries(_data).length) {
      if (_data.isform) {
        options.body = '';
        options.data = _data;
        options.headers = {
          ...headers,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        };
      } else {
        options.body = JSON.stringify(_.has(_data, 'isform') ? _.omit(_data, 'isform') : _data);
        options.headers = {
          ...headers,
          'Content-Type': 'application/json',
        };
      }
    }
    useFetch({
      url,
      options,
    });
  });

  useEffect(() => {
    const { manual = false } = params;
    if (!manual) {
      run();
    }

    return () => {
      fetchInstanse.current?.abort();
    };
  }, []);

  return {
    data: responens,
    loading,
    run,
  };
}

export default usePost;
