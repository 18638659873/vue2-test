<template>
  <div>
    <button>原生按钮</button>
    <input type="text"/>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

  </div>
</template>

<!--

Vue 常用的UI组件库
1. 移动端常用UI组件库
  1.1 Vant https://youzan.github.io/vant
  1.2 Cube UI https://didi.github.io/cube-ui
  1.3 Mint UI http://mint-ui.github.io

2. PC端常用UI组件库
  2.1  Element UI https://element.eleme.cn
  2.2  IView UI https://www.iviewui.com


以Element UI为例
1. 安装组件库 npm i element-ui -S
2. 在main.js中引入使用
3. ElementUI的按需引入指导（全部引入js体积太大了） npm i babel-plugin-component -D
4. 再次在main.js中引入使用，部分样式和js
5. 需要修改babel.config.js中的配置

-->

<script>

  export default {
    name: 'App',
    data() {
      return {}
    },
  }
</script>

<style>

</style>