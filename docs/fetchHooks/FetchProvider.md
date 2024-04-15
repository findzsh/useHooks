## FetchProvider

- FetchProvider 用来为请求配置默认参数，或返回某些特定 code 值时的操作方法；
- 可以配置 successCode（代表成功的 code）、headers、statusHandler（特定 code 的处理方法）、responesField（返回字段配置）；
- 建议放在入口 index.ts 中配置。
- fetch 请求 hooks 需要最低版本 @1.1.0。

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { FetchProvider } from 'powerful-hooks';

ReactDOM.render(
    <div>
        <FetchProvider
            statusHandler={{
                404: function () {
                    console.log('啊哦~页面不见了')
                }
            }}
            successCode={0}
            headers={{
                'X-Auth-Token': ()=>localStorage.getItem("X-Auth-Token")
            }}
            responesField={{
                code:'code',
                data:'data',
                msg:'msg'
            }}
        >
            <App />
        </FetchProvider>
    </div>,
    container.querySelector('#auth-app')
);
```

### API

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| responesField | 返回字段名称.fetchHook 可以对返回做预处理，所以需要约定返回格式。code 用来判断做何种预处理；data 返回的数据；msg 错误信息 | - |
| successCode | 代表成功的 code. 根据配置，判断返回的 code，做预处理。例：返回 code=404，提示页面找不到了。 | 默认 0 |
| statusHandler | 状态处理函数 | - |
| headers | 预设置 header.结构为 Object。key 为 string。value 可以是数字、字符串，为了保持数据的新鲜性，也支持函数返回。例如在需要携带 storage 中的 token 时，可以使用函数返回 token，保证在切换登录后也使用的是最新 token | - |
