<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<!--

样例：获取github上的样例
https://api.github.com/search/users?1=xxx

-->

<script>

  import Search from "@/components/Search";
  import List from "@/components/List";

  export default {
    name: 'App',
    components: {
      Search, List
    },
    data() {
      return {
        msg: '你好啊'
      }
    },

  }
</script>


<style>

  .album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }


</style>