import * as _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import costemFetch from './useFetch';

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

  const update = () => {
    useStatus((status) => !!!status); // eslint-disable-line
  };

  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const { current: handleResponens } = useRef((responens: T | undefined) => {
    setResponens(responens);
    setLoading(false);
    loadingRef.current = false;
    update();
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
    update();
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
        // @ts-ignore
        options.body = '';
        // @ts-ignore
        options.data = _data;
        options.headers = {
          ...headers,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        };
      } else {
        // @ts-ignore
        options.body = JSON.stringify(
          _.has(_data, 'isform') ? _.omit(_data, 'isform') : _data,
        );
        options.headers = {
          ...headers,
          'Content-Type': 'application/json',
        };
      }
    }
    costemFetch({
      url,
      options,
    });
  });

  const handleAbort = useCallback(() => {
    fetchInstanse.current?.abort();
  }, [fetchInstanse.current]);

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
    abort: handleAbort,
  };
}

export default usePost;
