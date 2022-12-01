<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<!--
消息订阅与发布
1. 安装包 npm i pubsub-js
2. 引入 import
3. 在mounted中加载 订阅方法 pubsub.subscribe
4. 在发起者上 pubsub.publish
5. 在组件销毁是 取消订阅 pubsub.unsubscribe

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