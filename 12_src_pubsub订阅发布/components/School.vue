<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把名称交给学生</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
      return {
        name: 'schoolNameC',
        address: '北京'
      }
    },
    mounted() {
      this.pubId = pubsub.subscribe('sendStudentName', function (data) {
        console.log('拿到学生名称:', data)
      })
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId)
    },
    methods: {
      sendSchoolName() {
        pubsub.publish('sendSchoolName', this.name)
      }
    }
  }
</script>

<style>
  .school {
    background-color: skyblue;
  }
</style>