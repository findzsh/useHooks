import { message } from 'antd';
import { isFunction } from '../utils';
import BusClass from './bus';

let fetchBus = new BusClass();

function Response(code, msg, data) {
  this[fetchBus.responesField.code] = code !== null ? code : null;
  this[fetchBus.responesField.msg] = msg !== null ? msg : null;
  this[fetchBus.responesField.data] = data !== null ? data : null;
}

const handleResponse = function (response, handler) {
  let result = null;
  // 如果提供了回调函数,则优先进入回调函数逻辑
  if (typeof handler === 'function') {
    result = handler.call(this, response);
  }
  // 如果已经有回调handler处理过,则直接返回处理结果,不在处理
  if (result !== null) {
    return result;
  }
  // 如果尚未处理,则进入通用处理逻辑
  switch (response[fetchBus.responesField.code]) {
    case fetchBus.successCode:
      result = response;
      break;

    default:
      let treated = false; // eslint-disable-line
      for (let code in fetchBus.statusHandler || {}) {
        if (Number(response[fetchBus.responesField.code]) === Number(code)) {
          let _res: any = fetchBus.statusHandler[code](response);
          treated = true;
          if (_res) {
            result = _res;
            break;
          }
        }
      }
      if (response.code >= 400 && response.code < 500 && !treated) {
        message.error(response[fetchBus.responesField.msg]);
      }
      if (response.code > 500 && response.code < 599 && !treated) {
        message.error(
          `网络错误，请稍后重试。错误信息：${
            response[fetchBus.responesField.msg]
          }`,
        );
      }
      break;
  }
  return result;
};

const useFetch = async (params) => {
  const { url, options } = params;
  let _Pheaders = {};
  if (Object.entries(options.headers || {}).length) {
    for (let key in options.headers) {
      if (isFunction(options.headers[key])) {
        _Pheaders[key] = options.headers[key]?.();
      } else {
        _Pheaders[key] = options.headers[key];
      }
    }
  }
  let _Bheaders = {};
  if (Object.entries(fetchBus.headers || {}).length) {
    for (let key in fetchBus.headers) {
      if (isFunction(fetchBus.headers[key])) {
        // @ts-ignore
        _Bheaders[key] = fetchBus.headers[key]?.();
      } else {
        _Bheaders[key] = fetchBus.headers[key];
      }
    }
  }

  let _options = {
    ...options,
    headers: Object.assign(Object.assign({}, _Bheaders), _Pheaders),
  };

  let result;
  try {
    let response = await fetch(url, _options);
    let data;
    if (response.ok) {
      data = await response.json();
      result = handleResponse(data, _options.handler);
    } else {
      data = await response.text();
      // @ts-ignore
      result = handleResponse(
        new Response(response.status, data),
        _options.handler,
      );
    }
  } catch (error) {
    console.log(error);
  }
  _options.handleResponens(result);
  return result;
};

export default useFetch;
