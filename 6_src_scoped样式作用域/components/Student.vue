<template>
  <div class="demo">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{age}}</h2>
    <h2>学生年龄：{{sex}}</h2>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    props: {
      name: {
        require: true,
        type: String
      },
      age: {
        default: 12,
        type: Number
      },
      sex: {
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
    background-color: gray;
  }
</style>