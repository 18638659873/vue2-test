<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<!--
全局事件总线 BUS
定义：是为了方便各个组件之间进行传递数据使用的
使用
1. 在main的vm上绑定一个属性$bus
2. 在需要接受值的组件上绑定一个事件 this.$bug.$on
3. 在传值的组件上发送数据 this.$bus.$emit
4. 尽量把绑定事件放在mounted上做
5. 组件销毁前最好进行解绑beforeDestory  this.$bus.$off

-->

<script>
  import School from "@/components/School";
  import Student from "@/components/Student";

  export default {
    name: 'App',
    components: {Student, School},
    data() {
      return {
        msg: '你好啊'
      }
    }
  }
</script>


<style>
  .app {
    background-color: gray;
    padding: 5px;
  }

</style>