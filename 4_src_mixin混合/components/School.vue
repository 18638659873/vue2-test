<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import {hunhe,hunhe2} from "../mixin"

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
    },
    mixins: [hunhe,hunhe2]

  }
</script>

<style>
</style>