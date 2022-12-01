<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{age}}</h2>
    <button @click="sendStudentName">把学生名字交给APP</button>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
      return {
        name: 'zhangsna',
        age: 12
      }
    },
    methods: {
      sendStudentName() {
        // 触发student组件身上的atchong事件
        this.$emit('atchong', this.name)
        // 解绑事件
        // this.$off('atchong')
        // this.$off(['atchong','demo']) // 解绑多个
        // this.$off() //解绑所有的
      }
    }
  }
</script>

<style>
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>