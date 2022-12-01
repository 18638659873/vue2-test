<template>

  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="test" appear>
      <h1 v-show="isShow" :key="1">你好呀！</h1>
      <h1 v-show="!isShow" :key="2">我很好！</h1>
    </transition-group>
  </div>


</template>


<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test2',
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
    /*transition: 0.5s linear;*/
  }

  /*进入的起点, 离开的终点*/
  .test-enter, .test-leave-to {
    transform: translateX(-100%);
  }

  /*进入的终点, 离开的起点*/
  .test-enter-to, .test-leave {
    transform: translateX(0);
  }

  .test-enter-active, .test-leave-active {
    transition: 0.5s linear;
  }

</style>