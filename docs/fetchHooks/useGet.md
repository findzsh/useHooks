## useGet

- useGet 用来发送 get 请求的 hook；
- useGet 的返回包含四个常用参数：data，loading，run，abort（>=v1.1.15）；

```tsx
import React from 'react';
import { useGet } from 'powerful-hooks';
import { Button, message } from 'antd';

function testPage() {
  const {
    data: resultData,
    loading: dataLoading,
    run: handleGetData,
    abort: handleAbort
  } = useGet({
    url: '/api/test/get',
    data: {
      testData: 'testData',
    },
    handler: (responese) => {
      const { code, data, msg } = responese;
      if (code == 0) {
        return data;
      } else {
        message.error(msg);
      }
    },
    manual: true,
  });

  const handleReGet = () => {
    const otherData = {
      test1: 'testData',
    };
    handleGetData(otherData);
  };

  return (
    <div>
      {dataLoading ? '加载中' : ''}
      {resultData ? JSON.stringify(resultData) : ''}
      <Button onClick={handleReGet}>发起请求</Button>
      <Button onClick={handleAbort}>终止请求</Button>
    </div>
  );
}

export default testPage;
```

### API

#### 入参

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| url | 请求地址 | - |
| data | 参数 | - |
| handler | 预处理函数。如果传入了 handler，在请求返回后先执行 handler，handler 如果有返回的话直接进行返回，不在经过预设的处理函数。如果没有返回的话还会在走预设处理函数 | - |
| manual | 是否手动触发。为 true 时，不会自动调用。使用返回的 run 函数进行调用 | - |

#### 返回参

| 参数    | 说明                                                        | 默认值 |
| ------- | ----------------------------------------------------------- | ------ |
| data    | Responese，如果 handler 有返回值的话，此处为 handler 返回值 | -      |
| loading | 是否在请求中状态                                            | false  |
| run     | 调用函数。此处可再传入参数，会和初始的 data 进行 merge      | -      |
| abort   | 终止函数。可在请求完成前终止此次请求     | -      |
