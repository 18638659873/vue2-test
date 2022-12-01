<template>
  <div>
    <h1>使用混合js</h1>
    <Student name="zhangsan" :age="12" sex="男"/>
    <hr>
    <School name="学校" address="北京"/>
  </div>
</template>

<!--

何时使用混合？
1. 当有多个组件会使用到相同的数据，或者是方法时

如何定义混合？
1. 新建一个mixin.js 文件
2. 编辑需要公用的数据、函数等
3. 在需要的组件中引入就可以使用了

注意：
1. 一般混合组件中data有值了，和混合js冲突了，那就优先使用各组组件的数据
2. 当使用mount函数是，每个组件挂在都会被使用，而且混合js还要比其他组件调用的早一些
3. 当Vue的所有组件都要使用混合js时，可以定义全局的，（不常用）
    在main.js中引入，然后使用

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