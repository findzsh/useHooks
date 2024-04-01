## useDebounceFn

### 防抖函数

- 在一定时间内，多次触发事件，只执行最后一次。
- useDebounceFn 传入一个函数与时间（ms），返回一个防抖函数。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'antd';
import { useDebounceFn } from 'powerful-hooks';

export default () => {
  const [state, setState] = useState();

  const handleDebounceChange = useDebounceFn((value) => {
    setState(value);
  }, 500);

  const handleChange = (e) => {
    handleDebounceChange(e?.target?.value);
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

| 参数     | 说明                                  | 类型     |
| -------- | ------------------------------------- | -------- |
| 参数 1   | 要防抖的函数                          | function |
| 参数 2   | 防抖时间， 必须大于 0， 默认 300ms    | number   |
| 参数 3   | immediately ,是否立即执行，默认 false | boolean  |
| 返回函数 | 防抖函数                              | function |
