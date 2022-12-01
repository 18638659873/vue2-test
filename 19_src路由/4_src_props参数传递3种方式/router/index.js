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
          path: 'news',
          component: News,
        }, {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',//也可以给路由定义一个名字，直接使用这个名字，不写长的路径
              path: 'detail',
              component: Detail,

              // props 第一种写法 ，对象写法 key-value形式，这些值都会以props形式传递给component组件，但是只能传递一些固定的值
              // props: {
              //   a: '001',
              //   b: 'hello'
              // },

              // props 第二种写法，值为Boolean ：true 就会把路由上的所有参数params 以props形式传递给组件,但是只能传递query参数，不能传递params
              // path: 'detail/:id/:title',
              // props: true,

              // props 第三种写法， 值是一个函数
              props($route) {
                return {
                  // id: $route.params.id,
                  // title: $route.params.title,
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