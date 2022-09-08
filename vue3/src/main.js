import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './public-path'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.unmount()
  console.log('微应用child-vue3卸载了')
})
