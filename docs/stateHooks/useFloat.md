## useFloat

- useFloat是专门用来计算浮点数的方法集合，解决js精度问题。
- 包括基本的加（add）减（subtract）乘（multiply）除（divide）运算
- 可传入2至多个运算数
- 注意：对于除运算，0 不能作为分母，如果第一项参数为 0 ，则结果为 0 ，第二项及以后任意项为 0 则会报错。


```tsx
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useFloat } from 'powerful-hooks';

export default () => {
  const { add, subtract, multiply, divide } = useFloat;
  const [ addState, setAddState] = useState('');
  const [ floatAddState, setFloatAddState] = useState('');

  const handleAdd=(type)=>{
    if(type==='origin'){
        setAddState(0.1+0.2+0.3)
    }else{
        setFloatAddState(add(0.1,0.2,0.3))
    }
  }



  return (
    <>
        <div>计算 0.1 + 0.2 + 0.3</div>
        <div>原生计算结果： {addState}</div>
        <div>UseFloat计算结果： {floatAddState}</div>
        <Button onClick={handleAdd.bind(null,'origin')}>原生计算</Button> 
        <Button onClick={handleAdd.bind(null,'float')}>Float计算</Button>
    </>
  );
};
```

### API

| 参数       | 说明            | 
| ---------- | --------------- | 
| add      |   加法  | 
| subtract   | 减法 | 
| multiply | 乘法     | 
| divide | 除法      | 
