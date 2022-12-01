<template>
  <div>
    <h1>使用插件</h1>
    <Student name="zhangsan" :age="12" sex="男"/>
    <hr>
    <School name="学校xxxxxxxx" address="北京"/>
  </div>
</template>

<!--
插件使用：
功能： 用于增强Vue
本质： 包含install方法的一个对象，install的第一个参数就是Vue，第二个之后可以自定义一些参数

定义插件：定义一个对象，里面写上函数等

使用插件：
1. 在main中 import 引入
2. Vue.user(plugins)

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

<style>
</style>