// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

import VueRouter from 'vue-router'

// 引入路由器
import router from "@/router";

// 应用插件
Vue.use(VueRouter)


// 关闭vue的生产提示
Vue.config.productionTip = false
// 引入插件

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})



