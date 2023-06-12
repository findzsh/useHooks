export default {
  target: 'browser',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    minFile: true,
    sourcemap: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ],
  ],
};