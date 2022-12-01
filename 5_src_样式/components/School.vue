<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
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

<style>
</style>