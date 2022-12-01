// 用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from "@/pages/About";
import Home from "@/pages/Home";

// 创建一个路由器
const router = new VueRouter({
  // 指定路由的模式为hash模式，还有history模式
  mode: 'hash',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    }
  ]

})

// 把路由器暴露出去
export default router