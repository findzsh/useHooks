import { Dispatch, SetStateAction } from 'react';
export default function useSetState<T>(
  initValue: T | (() => T),
): [
  T,
  Dispatch<SetStateAction<T | (() => T) | Partial<T> | Record<string, any>>>,
  (arg0?: any) => void,
];
