import { useState, useRef, useEffect } from 'react';
import useFetch from './useFetch';

function parseQueryParams(data) {
  let queryStr = '';
  if (data) {
    queryStr += '?';
    for (let p in data) {
      if (data[p] != null) {
        queryStr += encodeURIComponent(p) + '=' + encodeURIComponent(data[p]) + '&';
      }
    }
  }
  queryStr = queryStr.slice(0, queryStr.length - 1);
  return queryStr;
}

function useGet<T>(params: {
  url: string;
  data?: Record<string | number, string>;
  headers?: Record<string, string>;
  handler?: (responens: T) => any;
  manual?: boolean;
}) {
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
  const { current: run } = useRef(() => {
    if (loadingRef.current) {
      return;
    }
    const { url = '', data = {}, headers = {}, handler } = params;
    setLoading(true);
    loadingRef.current = true;
    useUpdate();
    const { signal, controller } = handleNewController();
    fetchInstanse.current = controller;
    useFetch({
      url: url + parseQueryParams(data),
      options: {
        headers,
        handler,
        handleResponens,
        method: 'GET',
        credentials: 'include',
        signal,
      },
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

export default useGet;
