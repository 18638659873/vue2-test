<template>
  <ul>
    <li>{{id}}</li>
    <li>{{title}}</li>
    <!--    props 第一种写法-->
    <!--        <li>{{a}}</li>-->
    <!--        <li>{{b}}</li>-->
  </ul>

</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detail',
    // props 第一种写法
    // props: ['a', 'b']
    props: ['id', 'title']
  }

</script>

<style>

</style>