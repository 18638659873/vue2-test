<template>
  <ul>
    <li>{{$route.query.id}}</li>
    <li>{{$route.query.title}}</li>
  </ul>

</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detail',
  }

</script>

<style>

</style>