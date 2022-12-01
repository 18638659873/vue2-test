// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 引入vuex定义的store
import store from './store/index'

// 关闭vue的生产提示
Vue.config.productionTip = false
// 引入插件

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})



