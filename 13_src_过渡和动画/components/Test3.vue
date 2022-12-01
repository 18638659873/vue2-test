<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group :appear="true"
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__backInDown"
                      leave-active-class="animate__backOutUp">
      <h1 v-show="isShow" :key="1">你好呀！</h1>
      <h1 v-show="!isShow" :key="2">我很好！</h1>
    </transition-group>
  </div>
</template>

<!--
npm 官网：https://www.npmjs.com/
搜索 animate.css
官方网址： https://animate.style/


使用第三方的库实现动画效果 animate
1. 安装第三方的库  npm install animate.css
2. import 引入使用
3. 使用时加上， name="animate__animated animate__bounce" enter-active-class="？" leave-active-class="？"
<h1 class="animate__animated animate__bounce">An animated element</h1>
-->


<script>

  import 'animate.css'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test3',
    data() {
      return {
        isShow: true
      }
    }
  }

</script>


<style scoped>
  h1 {
    background-color: orange;
  }

</style>