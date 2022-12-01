<template>
  <div class="container">
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<!--

vuex是什么
1. 实现集中式状态（数据）管理一个vue插件，对vue应用中多个组件的共享状态进行集中式管理，也是一种组件之间的通讯的方式，且适用于任何组件简的通讯
2. Github https://github.com/vuejs/vuex

安装vuex
npm install vuex@3

使用场景：
1. 多个组件依赖于同一个状态
2. 来自不同组件的行为需要变更同一状态

-->

<script>

  import Count from "@/components/Count";
  import Person from "@/components/Person";

  export default {
    name: 'App',
    components: {Person, Count},
    data() {
      return {}
    },

  }
</script>


<style>

</style>