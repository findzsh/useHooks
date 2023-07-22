import React from 'react';
import type { PropsWithChildren } from 'react';
import Bus from './bus';

interface FetchProviderProps extends PropsWithChildren {
  successCode?: number;
  statusHandler?: Record<number | string, (respones: any) => number | string>;
  headers?: Record<string, number | string | (() => number | string)>;
  responesField?: {
    code?: string;
    data?: string;
    msg?: string;
  };
}

function FetchProvider(props: FetchProviderProps) {
  if (props.statusHandler) {
    Bus.changeStatusHandler(props.statusHandler);
  }

  if (props.successCode) {
    Bus.changeSuccessCode(props.successCode);
  }

  if (props.headers) {
    Bus.changeHeaders(props.headers);
  }

  if (props.responesField) {
    Bus.changeResponesField(props.responesField);
  }

  return <div>{props.children}</div>;
}

export default FetchProvider;
