<template>
  <div style="margin-left: 50px">
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!--    &lt;!&ndash;          原始的方式实现的路由&ndash;&gt;
              <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a>-->

          <!--   使用router库实现vue中的路由,标签router-link-->
          <!-- router-link中 这只replace方式 :replace="true" 默认是push方式 设置浏览器是否可以回退，一般是可以的，设置这个值就不可以回退了-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--            指定组件显示的位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
使用vue的路由示例  rounter

1. 需要安装路由库
npm install vue-router@3

使用过程
1. 创建router文件夹存放js文件，并编写路由规则
2. 通常把路由的组件放在pages文件下，一般的组件就放在components文件
3. 路由使用标签 router-link
4. 路由显示标签 router-view
5. 根据路由规则，被切换下来的组件是被销毁了
6. 通常一个应用只有一个router 可以通过$router获取，但是有多个route


关于前端地址栏的路由地址，后面跟上一个/#/ 这个算是一个hash值，这样的话，这个地址后面的信息就不会传给服务器了

路由器的工作模式有：
1. hash 他可以把之后的数据不会带给服务器
2. history


-->

<script>
  import Banner from "@/components/Banner";

  export default {
    name: 'App',
    components: {Banner},
    data() {
      return {}
    },
  }
</script>

<style>

</style>