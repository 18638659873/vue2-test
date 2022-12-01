<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点击输出上方DOM</button>
    <School ref="sch"></School>
  </div>
</template>

<!--
ref 可以让vue获取到当前的元素，可以理解为js中的id
获取方式1： Vue.$refs.xxx
获取方式2： this.$refs.xxx
-->

<script>
  import School from "./components/School";

  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello 你好'
      }
    },
    methods: {
      showDOM() {
        console.log(this.$refs.title)// 真是的DOM
        console.log(this.$refs.sch)// school组件的实例对象
      }

    },
    components: {
      School: School
    }
  }
</script>

<style>
</style>