<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!--          :replace="true" 设置浏览器是否可以回退，一般是可以的，设置这个值就不可以回退了-->
          <router-link :replace="true" class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Messages</router-link>
        </li>
      </ul>
      <!--      一般情况下，切出去的组件是要被销毁的，这里使用keep-alive就可以不销毁了，被包裹的全部组件都不销毁，
      也可以通过include指定某个(组件名)不销毁 缓存多个用数组 :include="['','']"

      -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
  }

</script>

<style>

</style>