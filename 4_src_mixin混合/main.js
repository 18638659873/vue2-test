// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

/*// 全局都会使用
import {hunhe, hunhe2} from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)*/

// 关闭vue的生产提示
Vue.config.productionTip = false



new Vue({
  el: '#app',
  render: h => h(App)
})


