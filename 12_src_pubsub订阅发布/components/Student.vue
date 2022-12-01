<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{age}}</h2>
    <button @click="sendStudentName">把名称交给学校</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
      return {
        name: 'zhangsna',
        age: 12
      }
    },
    mounted() {
      pubsub.subscribe('sendSchoolName', function (data) {
        console.log('拿到学校名称:', data)
      })
    },
    methods: {
      sendStudentName() {
        pubsub.publish('sendStudentName', this.name)
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