<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    props: {
      name: {
        require: true,
        type: String
      },
      address: {
        type: String,
        require: true
      }
    }
  }
</script>

<!--scoped是指定这个重名的样式 只针对这个组件有效果
lang="less" 或者不写 或者 lang="css" 指定写的样式语言是什么-->
<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>