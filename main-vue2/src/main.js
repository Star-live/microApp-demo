// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import microApp from '@micro-zoe/micro-app'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

microApp.start({
  'disable-memory-router': true,
  'disable-patch-request': true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
