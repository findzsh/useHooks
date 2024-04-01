## useThrottleFn

### 节流函数

- 在一定时间内，多次触发同一个事件，只执行第一次操作。
- useThrottleFn 传入一个函数与时间（ms），返回一个节流函数。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import { useThrottleFn } from 'powerful-hooks';

export default () => {
  const [state, setState] = useState(0);

  const handleChange = useThrottleFn((e) => {
    setState((state) => {
      return ++state;
    });
  }, 500);

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

| 参数     | 说明                                  | 类型     |
| -------- | ------------------------------------- | -------- |
| 参数 1   | 要节流的函数                          | function |
| 参数 2   | 节流时间， 必须大于 0， 默认 300ms    | number   |
| 参数 3   | immediately ,是否立即执行，默认 false | boolean  |
| 返回函数 | 节流函数                              | function |
