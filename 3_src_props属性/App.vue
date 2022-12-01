<template>
  <div>
    <h1>这个一个练习</h1>
    <Student name="zhangsan" :age="12" sex="男"/>
    <hr>
    <!--    <Student/>-->
    <!--    <hr>-->
    <!--    <Student/>-->
  </div>
</template>

<!--

组件如何传递数据呢？
1. 在定义的组件时，使用props定义需要接受的参数
2. 在使用组件的时候，直接在这个DOM元素上加上属性名称和值进行传递
3. 在定义组件的使用接受参数是，可以限制他是否必传，以及默认值，和数据传递的类型
4. 进行不要传递过去的属性上进行修改， 如果一定要修改，可以在定义一个属性引入这个传递的属性

-->

<script>
  import student from "./components/Student";

  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello 你好'
      }
    },
    methods: {},
    components: {
      Student: student
    }
  }
</script>

<style>
</style>