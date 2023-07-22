import usePost from './usePost';

function usePut<T>(params: {
  url: string;
  data?: Record<string | number, string>;
  headers?: Record<string, string>;
  handler?: (responens: T) => any;
  manual?: boolean;
}) {
  usePost(params, 'PUT');
}

export default usePut;
