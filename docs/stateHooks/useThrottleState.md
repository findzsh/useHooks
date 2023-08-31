## useThrottleState

### 节流 state

- 在一定时间内，多次触发 setState，只执行第一次操作。
- useThrottleState 传入初始值与时间（ms），返回 [ state, setState ]。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import { useThrottleState } from 'powerful-hooks';

export default () => {
  const [state, setState] = useThrottleState(0, 500);

  const handleChange = (e) => {
    setState((state) => {
      return ++state;
    });
  };

  return (
    <div>
      <div>点击次数：{state}</div>
      <div>
        <Button onClick={handleChange}>点击+1</Button>
      </div>
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
