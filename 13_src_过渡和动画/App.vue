<template>
  <div>

    <Test/>
    <Test2/>
    <Test3/>

  </div>
</template>

<!--

vue中控制动画的步骤如下：
进入
1. v-enter  : 进入动画开始
2. v-enter-active :进入动画后的活跃过渡时期
3. v-enter-to: 进入动画的终止

离开
1. v-leave  : 离开动画的开始
2. v-leave-active : 离开动画的活跃过渡时期
3. v-leave-to : 离开动画的终止

一般情况下就只需要使用 active的就可以了

vue使用单个元素
<transition><transition/>
vue使用数组
<transition-group><transition-group/>

-->

<script>

  import Test from "@/components/Test";

  import Test2 from "@/components/Test2";

  import Test3 from "@/components/Test3";


  export default {
    name: 'App',
    components: {Test, Test2, Test3},
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