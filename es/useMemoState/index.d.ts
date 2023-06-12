import { Dispatch, SetStateAction } from 'react';
export default function useMemoState<T>(params: T | (() => T)): [T, Dispatch<SetStateAction<T>>, (arg0: any) => void];
