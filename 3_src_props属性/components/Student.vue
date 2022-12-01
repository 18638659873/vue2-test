<template>
  <div class="schoolCss">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{age+1}}</h2>
    <h2>学生年龄：{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    //简单的声明接受
    // props: ['name', 'sex', 'age']
    // 接受的同时对数据类型进行限制
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String
    // }
    // 接受的同时对数据 进行类型 默认值指定，必要性的限制
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

<style>
</style>