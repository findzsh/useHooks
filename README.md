# useHooks

More powerful React hooks

### useMemoState

It's a state hook that can remember your initial value.

```ts
const [state, setState, resetState] = useMemoState(initValue);
```

```ts
const [state, setState, resetState] = useSetState(initValue);
```

```ts
const { data, loading, run } = useGet({
  url: '/api/url',
  data: { key: 'value' },
  headers: { key: 'value' },
  handler: (responens) => {},
  manual: true,
});
```

```ts
const { get, getAll } = useUrlQuery();
get('key');
getAll();
```
