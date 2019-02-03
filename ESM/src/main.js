// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引用全局css
import '@/assets/css/index.css'

// 统一设置使用axios请求路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 挂载在Vue原型上
Vue.prototype.$http = axios

// 设置使用element
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
