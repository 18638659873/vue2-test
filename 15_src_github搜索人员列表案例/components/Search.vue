<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>

</template>


<script>

  import axios from 'axios'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Search',
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      searchUsers() {
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
            response => {
              this.$bus.$emit('getUsers', response.data.items)
            },
            error => {
              console.log('error', error)
            }
        )
      }
    }
  }
</script>

<style>

</style>