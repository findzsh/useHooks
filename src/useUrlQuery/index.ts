// 获取路由地址中的query参数
import { useRef } from 'react';

export default function index(Url?: string) {
  const url = Url ? Url : window.location.search;
  const query = new URLSearchParams(url);

  const { current: getQueryString } = useRef(function (name: string) {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    var result = url.substr(1).match(reg);
    if (result != null) {
      return decodeURIComponent(result[2]);
    } else {
      return null;
    }
  });

  const { current: get } = useRef((params: string) => {
    if (!params) return null;
    let res = query.get(params);
    if (res) {
      return res;
    } else {
      return getQueryString(params);
    }
  });

  const { current: getAll } = useRef(function () {
    let queryArr = url.split('?')?.pop()?.split('&') || [];
    let queryObj: Record<string, any> = {};
    queryArr.forEach((item) => {
      let itemArr = item.split('=');
      if (itemArr.length === 2) {
        queryObj[itemArr[0]] = itemArr[1];
      }
    });
    return queryObj;
  });

  return { get, getAll };
}
