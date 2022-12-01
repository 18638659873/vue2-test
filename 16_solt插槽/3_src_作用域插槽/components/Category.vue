<template>

  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>

</template>


<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Category',
    data() {
      return {
        games: ['红色警戒', '仙剑奇侠传', '混沌之戒', '犬夜叉']
      }
    }
  }

</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }

  img {
    width: 100%;
  }

</style>