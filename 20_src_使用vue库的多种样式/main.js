// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// // 引入ElementUI全部组件库
// import ElementUI from 'element-ui'
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// 按需引入，全部引入ElementUI的js会很大，
import {Button, Row} from 'element-ui';

// 关闭vue的生产提示
Vue.config.productionTip = false

//vue中使用ElementUI全部组件
// Vue.use(ElementUI)

// 按需引入需要使用的组件
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

new Vue({
  el: '#app',
  render: h => h(App),
})



