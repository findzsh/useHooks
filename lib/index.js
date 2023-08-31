var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FetchProvider: () => import_FetchProvider.default,
  useDebounceFn: () => import_useDebounceFn.default,
  useDebounceState: () => import_useDebounceState.default,
  useDelete: () => import_useDelete.default,
  useGet: () => import_useGet.default,
  useMemoState: () => import_useMemoState.default,
  useMerge: () => import_useMerge.default,
  usePost: () => import_usePost.default,
  usePut: () => import_usePut.default,
  useSetState: () => import_useSetState.default,
  useThrottleFn: () => import_useThrottleFn.default,
  useThrottleState: () => import_useThrottleState.default,
  useUpdate: () => import_useUpdate.default,
  useUrlQuery: () => import_useUrlQuery.default,
});
module.exports = __toCommonJS(src_exports);
var import_useMemoState = __toESM(require('./useMemoState'));
var import_useMerge = __toESM(require('./useMerge'));
var import_useSetState = __toESM(require('./useSetState'));
var import_FetchProvider = __toESM(require('./useFetch/FetchProvider'));
var import_useGet = __toESM(require('./useFetch/useGet'));
var import_usePost = __toESM(require('./useFetch/usePost'));
var import_usePut = __toESM(require('./useFetch/usePut'));
var import_useDelete = __toESM(require('./useFetch/useDelete'));
var import_useUpdate = __toESM(require('./useUpdate'));
var import_useUrlQuery = __toESM(require('./useUrlQuery'));
var import_useDebounceFn = __toESM(require('./useDebounceFn'));
var import_useThrottleFn = __toESM(require('./useThrottleFn'));
var import_useDebounceState = __toESM(require('./useDebounceState'));
var import_useThrottleState = __toESM(require('./useThrottleState'));
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    FetchProvider,
    useDebounceFn,
    useDebounceState,
    useDelete,
    useGet,
    useMemoState,
    useMerge,
    usePost,
    usePut,
    useSetState,
    useThrottleFn,
    useThrottleState,
    useUpdate,
    useUrlQuery,
  });
