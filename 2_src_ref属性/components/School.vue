<template>
  <div class="schoolCss">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
      return {
        schoolName: '学校',
        address: '北京'
      }
    }
  }
</script>

<style>
  .schoolCss {
    background-color: gray;
  }
</style>