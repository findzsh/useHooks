## useMemoState

- useMemoState 可以记住你的初始值，你可以在任何时候进行重置，并且可以在重置时增加、改变状态。
- state 和 setState 使用方法同原生 hook。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import { useMemoState } from 'powerful-hooks';

export default () => {
  const [state, setState, resetState] = useMemoState({
    initalValue: 'I am inital value',
  });

  const handleChange = () => {
    setState({
      changedValue: 'initalValue has been changed',
    });
  };

  const handleReset = () => {
    resetState();
  };

  const handleResetAndChange = () => {
    resetState({
      initalValue: "It's a new value",
    });
  };

  const handleResetAndAdd = () => {
    resetState({
      antherValue: 'I add a anther value',
    });
  };

  return (
    <>
      {JSON.stringify(state)}
      <Button onClick={handleChange}>Change</Button>
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={handleResetAndChange}>ResetAndChange</Button>
      <Button onClick={handleResetAndAdd}>ResetAndAdd</Button>
    </>
  );
};
```

### API

| 参数       | 说明            | 类型                  |
| ---------- | --------------- | --------------------- |
| state      | 同原生 state    | any                   |
| setState   | 同原生 setState | (newState:any)=>void  |
| resetState | 重置 state      | (anyState?:any)=>void |
