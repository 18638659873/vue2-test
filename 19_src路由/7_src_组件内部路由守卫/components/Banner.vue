<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试go</button>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Banner',
    methods: {
      back() {
        this.$router.back()
      },
      forward() {
        this.$router.forward()
      },
      go() {
        // 正数是前进 负数是后退
        this.$router.go(1)
      }
    }
  }

</script>

<style>

</style>