<template>

  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <!--    appear 是页面一开始就会有动画， 简写模式就是直接  appear -->

    <transition :appear="true">
      <h1 v-show="isShow" class="come">你好呀！</h1>
    </transition>

    <!--  如果transition 有name属性了，name他的样式名字就必须是 test-enter-active
      <transition name="test">
        <h1 v-show="isShow" class="come">你好呀！</h1>
      </transition>-->

  </div>


</template>


<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
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

  .v-enter-active {
    animation: atchong 1s;
  }

  .v-leave-active {
    animation: atchong 1s reverse;
  }

  @keyframes atchong {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }

  }

</style>