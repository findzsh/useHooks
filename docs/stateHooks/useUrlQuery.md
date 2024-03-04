## useUrlQuery

### 获取路由地址中的 query 参数

- 可以单个获取也可以一次获取全部。
- 同时支持传入 url。默认取当前 url。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button, Input } from 'antd';
import { useUrlQuery } from 'powerful-hooks';

export default () => {
  const [state, setState] = useState('');
  const [url, setUrl] = useState('');
  const { get, getAll } = useUrlQuery();
  const { getAll: customUrlGetAll } = useUrlQuery();

  const handleGetQuery = () => {
    let query = get('name');
    setState(query);
  };

  const handleGetAllQuery = () => {
    let query = getAll();
    setState(JSON.stringify(query));
  };

  const handleChange = (e) => {
    setUrl(e?.target?.value);
  };

  const handleCustomGetAllQuery = () => {
    let query = customUrlGetAll();
    setState(JSON.stringify(query));
  };

  useEffect(() => {
    window.history.replaceState(
      {},
      null,
      window.location.pathname + '?name=powerfulHooks&id=101123',
    );
  }, []);

  return (
    <div>
      <div>参数：{state}</div>
      <div>
        <Button onClick={handleGetQuery}>点击获取url中的name参数</Button>
        <Button onClick={handleGetAllQuery}>点击获取url中所有参数</Button>
      </div>
      <div>手动输入url地址</div>
      <div>
        <Input
          value={url}
          onChange={handleChange}
          placeholder="请输入带有query参数的url地址"
        ></Input>
      </div>
      <div>
        <Button onClick={handleCustomGetAllQuery}>点击获取url中所有参数</Button>
      </div>
    </div>
  );
};
```

### API

| 参数   | 说明                        | 类型   |
| ------ | --------------------------- | ------ |
| 参数 1 | 可选。手动输入的 url 地址。 | string |
