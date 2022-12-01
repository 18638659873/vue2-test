<template>
  <div>
    <h2 @click="showName">学生名称：{{name}}</h2>
    <h2>学生性别：{{age}}</h2>
    <h2>学生年龄：{{sex}}</h2>
  </div>
</template>

<script>
  import {hunhe, hunhe2} from "../mixin"

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
      },
    },
    mixins: [hunhe, hunhe2]

  }
</script>

<style>
</style>