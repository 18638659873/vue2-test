<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg"/>
      <a slot="footer" href="www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>

    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts.gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4></h4>
      </template>
    </Category>
  </div>
</template>

<!--


-->

<script>

  import Category from "@/components/Count";

  export default {
    name: 'App',
    components: {Category},
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '仙剑奇侠传', '混沌之戒'],
        films: ['《仙剑奇侠传》', '《第六感》', '《你好》']
      }
    },

  }
</script>


<style>
  .container, .foot {
    display: flex;
    justify-content: space-around;
  }

  video {
    width: 100%;
  }

  h4 {
    text-align: center;
  }
</style>