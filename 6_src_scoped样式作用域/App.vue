<template>
  <div>
    <h1>使用插件</h1>
    <Student name="zhangsan" :age="12" sex="男"/>
    <hr>
    <School name="学校" address="北京"/>
  </div>
</template>

<!--

组件中定义样式：

1. scoped是指定某一个组件重名的样式 只针对这一个组件有效果,即使重名了，也不会被其他组件的样式覆盖了
2. lang="less" 或者不写 或者 lang="css" 指定写的样式语言是什么
3. APP 一般是最外层的组件，也是包含了所有的其他子的组件，所有可以把公用的样式在这里面

如果要使用less 那就要安装
查看要安装的插件的版本命令
npm view webpack versions
npm view less-loader versions

安装指定版本的
npm i less-loader@7

-->

<script>
  import student from "./components/Student"
  import school from "./components/School"

  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello 你好'
      }
    },
    methods: {},
    components: {
      Student: student,
      School: school
    }
  }
</script>

<!--APP 一般是最外层的组件，也是包含了所有的其他子的组件，所有可以把公用的样式在这里面-->
<style>
</style>