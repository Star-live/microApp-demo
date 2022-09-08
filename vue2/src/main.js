// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Dialog } from 'element-ui'
import './public-path'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Dialog)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.$destroy()
  console.log('子应用vue2卸载啦！')
})
