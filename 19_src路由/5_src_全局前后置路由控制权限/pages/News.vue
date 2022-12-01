<template>
  <div>
    <ul>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>
<!--

路由特有的的生命周期函数
1. activated ：路由组件被激活是触发
2. deactivated ： 路由组件被切换掉时激活

-->


<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'News',
    activated() {
      console.log('New组件被激活了')
    },
    deactivated() {
      console.log('New组件被失活了')
    }
  }

</script>

<style>

</style>