/*该文件是整个vue的入口文件
*
*
* */
//引入vue
import Vue from 'vue'
//引入app的组件，是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示语
Vue.config.productionTip = false

new Vue({
  //将app组件放入容器中
  render: h => h(App),
  // render(createElement) { //完整版函数
  //   return createElement('h1', 'hello')
  // },
}).$mount('#app')
