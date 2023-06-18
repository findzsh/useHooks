## useSetState

- useSetState 可以让你在函数组件中像类组件一样使用 state 和 setState。
- 同时，useSetState 也支持重置 state。
- 并且不会限制传入 state 的类型。如果传入不是对象，则使用上和原始 useState 相同，并保留了重置方法。

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import { useSetState } from 'powerful-hooks';

export default () => {
  const [state, setState, resetState] = useSetState({
    initalValue1: 'I am inital value 1',
    initalValue2: 'I am inital value 2',
  });

  const handleChange = () => {
    setState({
      initalValue1: 'initalValue1 has been changed',
    });
  };

  const handleReset = () => {
    resetState();
  };

  const handleResetAndChange = () => {
    resetState({
      initalValue2: "It's a new value",
    });
  };

  const handleResetAndAdd = () => {
    resetState({
      antherValue3: 'I add an anther value 3',
    });
  };

  return (
    <>
      <h3>传入state为对象属性</h3>
      <div>
        <div>initalValue1 :{state.initalValue1}</div>
        <div>initalValue2 :{state.initalValue2}</div>
        <div>{!!state.antherValue3 && <>antherValue3 :{state.antherValue3}</>}</div>
        <Button onClick={handleChange}>Change Value1</Button>
        <Button onClick={handleReset}>Reset all</Button>
        <Button onClick={handleResetAndChange}>Reset and change value2 </Button>
        <Button onClick={handleResetAndAdd}>Reset and add value3</Button>
      </div>
    </>
  );
};
```

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import { useSetState } from 'powerful-hooks';

export default () => {
  const [state, setState, resetState] = useSetState('inital value');

  const handleChange = () => {
    setState('inital value has been changed');
  };

  const handleReset = () => {
    resetState();
  };

  return (
    <>
      <h3>传入state属性不为对象</h3>
      <div>
        <div>state :{state}</div>
        <Button onClick={handleChange}>Change value</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </>
  );
};
```

### API

| 参数       | 说明              | 类型                  |
| ---------- | ----------------- | --------------------- |
| state      | 同类组件 state    | any                   |
| setState   | 同类组件 setState | (newState:any)=>void  |
| resetState | 重置 state        | (anyState?:any)=>void |
