/**
 * 主要是配置脚手架一些参数的的解析过程
 * 官方网站如下：
 * https://cli.vuejs.org/zh/config/
 * */
const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  // 开启代理服务器：方式一
  /*  devServer: {
      // 需要代理的服务器的地址,
      // 1. 他优先会访问本地的资源，如果有就直接返回，没有的话去5000的服务器获取
      // 2. 他只能配置一个代理，不能配置多个
      proxy: 'http://localhost:5000/'
    },*/
  // 开启代理服务器：方式二
  /*  devServer: {
      proxy: {
        '/atchong': {
          target: 'http://localhost:5000/',
          pathRewrite: {//注意：这个是路径重写，会把上面的atchong去掉，访问其他服务器
            '^/atchong': ''
          },
          ws: true,//用来支持；websocket
          changeOrigin: true // 代理服务器访问其他服务器时，是否显示自己的端口号
        }
      }
    }*/
  // pages: {
  //   index: {
  //     // page 的入口 会去找到main.js 也就是页面的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // }

})
