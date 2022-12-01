// 用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from "@/pages/About";
import Home from "@/pages/Home";

import News from "@/pages/News";
import Message from "@/pages/Message";

import Detail from "@/pages/Detail";

// 创建一个路由器
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News,
        }, {
          path: '/home/message',
          component: Message,
          children: [
            {
              name: 'xiangqing',//也可以给路由定义一个名字，直接使用这个名字，不写长的路径
              path: '/home/message/detail/:id/:title',
              component: Detail
            }
          ]
        }
      ]
    }
  ]

})

// 把路由器暴露出去
export default router