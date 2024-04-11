import { message } from 'antd';

let interf: any = null;

class fetchBus {
  constructor() {
    if (interf != null) {
      return interf;
    } else {
      interf = this;
    }
  }

  // 成功code
  successCode: number = 0;
  // 状态处理函数
  statusHandler: Record<number | string, (res: any) => void> = {
    401: function () {
      message.error('登录状态失效，请重新登录');
    },
  };
  // 请求头
  headers: Record<string, number | string | (() => number | string)> = {
    'web-type': 1,
    'Content-Type': 'application/json',
  };
  // 返回值格式字段
  responesField: {
    code: string;
    data: string;
    msg: string;
  } = {
    code: 'code',
    data: 'data',
    msg: 'msg',
  };

  // 更改状态处理函数
  changeStatusHandler = (handlers: Record<number | string, Function>) => {
    this.statusHandler = Object.assign(Object.assign({}, this.statusHandler), handlers);
  };

  // 更改成功code
  changeSuccessCode = (code: number) => {
    this.successCode = code;
  };

  // 更改固定请求头
  changeHeaders = (headers: Record<string, number | string | (() => number | string)>) => {
    this.headers = Object.assign(Object.assign({}, this.headers), headers);
  };

  // 更改返回字段
  changeResponesField = (fields: { code?: string; data?: string; msg?: string }) => {
    this.responesField = Object.assign(Object.assign({}, this.responesField), fields);
  };
}

export default fetchBus;
