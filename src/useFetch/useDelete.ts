import usePost from './usePost';

function useDelete<T>(params: {
  url: string;
  data?: Record<string | number, string>;
  headers?: Record<string, string>;
  handler?: (responens: T) => any;
  manual?: boolean;
}) {
  usePost(params, 'DELETE');
}

export default useDelete;
