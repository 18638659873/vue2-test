// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //给vm绑定一个事件总线，给所有组件使用
  }
})



