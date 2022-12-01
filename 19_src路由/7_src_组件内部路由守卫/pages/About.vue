<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
    // 必须是根据路由进入这个组件，才会触发这个函数
    beforeRouteEnter(to, from, next) {
      console.log(to, from, next)
      next()
    },
    // 通过路由规则，离开该组件时，触发和这个函数
    beforeRouteLeave(to, from, next) {
      console.log(to, from, next)
      next()
    }
  }

</script>

<style>

</style>