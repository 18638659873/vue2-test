<template>
  <ul>
    <li>{{$route.params.id}}</li>
    <li>{{$route.params.title}}</li>
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