// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log("=====vue3子应用处于微前端环境中");
  // eslint-disable-next-line
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
  console.log("====子应用下base route:", window.__MICRO_APP_BASE_ROUTE__);
}
