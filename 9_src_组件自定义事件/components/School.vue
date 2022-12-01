<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把名称交给APP</button>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
      return {
        name: 'schoolNameC',
        address: '北京'
      }
    },
    props: ['getSchoolName'],
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style>
  .school {
    background-color: skyblue;
  }
</style>