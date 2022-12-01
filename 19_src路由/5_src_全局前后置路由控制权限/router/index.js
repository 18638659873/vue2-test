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
          meta: {
            isAuth: true,
            title: '新闻'
          }
        }, {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title: '消息'
          },
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

//全局前置路由的守卫，初始化的时候调用、每次切换路由之前也会调用
// 使用方式：

// 1. 使用from 和to 去控制那些页面需要控制权限
// router.beforeEach((to, from, next) => {
//   console.log('to', to, 'from', from)
//   if (to.name === 'xinwen' || to.path === '/home/message') {
//     if (localStorage.getItem('school') === 'atchong') {
//       next()
//     } else {
//       alert('名称不对，不能访问')
//     }
//   } else {
//     next()
//   }
// })

// 2. 使用route配置项身上的meta 添加一个自定义属性去控制  在路由上的meta 中配置 isAuth 属性来控制
router.beforeEach((to, from, next) => {
  // console.log('前置to', to, '前置from', from)
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'atchong') {
      console.log('权限通过，可以查看')
      next()
    } else {
      alert('名称不对，不能访问')
    }
  } else {
    next()
  }
})


//全局后置路由的守卫，初始化的时候调用、每次切换路由之后也会调用
// 使用方式：

router.afterEach((to, from) => {
  console.log('后置to', to, '后置from', from)
  document.title = to.meta.title || '崇'


})

// 把路由器暴露出去
export default router