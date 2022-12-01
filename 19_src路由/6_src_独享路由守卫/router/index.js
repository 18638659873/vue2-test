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
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          // 独享路由控制
          beforeEnter: (to, from, next) => {
            console.log('to', to, 'from', from, 'next', next)
            if (localStorage.getItem('school') === 'atchong') {
              next()
            } else {
              alert('无权查看news')
            }
          }
        }, {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              }
            }
          ]
        }
      ]
    }
  ]

})

// 把路由器暴露出去
export default router