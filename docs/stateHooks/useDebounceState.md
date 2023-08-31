## useDebounceState

### 防抖状态

- 在一定时间内，多次触发改变 state，只执行最后一次。
- useDebounceState 传入一个初始值与时间（ms），返回 [ state, setState ]。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'antd';
import { useDebounceState } from 'powerful-hooks';

export default () => {
  const [state, setState] = useDebounceState(null, 500);

  const handleChange = (e) => {
    setState(e?.target?.value);
  };

  return (
    <div>
      <div>
        <Input onChange={handleChange}></Input>
      </div>
      <div>防抖后：{state}</div>
    </div>
  );
};
```

### API

| 参数     | 说明                                        | 类型   |
| -------- | ------------------------------------------- | ------ |
| 参数 1   | 初始值，必填，如果初始值为空，也需要传 null | any    |
| 参数 2   | 防抖时间，必须大于 0， 默认 300ms           | number |
| 返回参数 | [state, setState]                           | 同原生 |
