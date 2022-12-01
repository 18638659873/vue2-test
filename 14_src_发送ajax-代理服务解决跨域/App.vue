<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<!--
发送ajax请求的方式有4种
1. xhr XMLHttpRequest  函数：xhr.open()，  xhr.send()
2. jQuery $.get $.post  一般jq是操作DOM的，目前主要是使用vue 或者react的 所以不使用jQuery
3. 使用 axios  可以使用，而且体积很小
4. 使用fetch IE 兼容性不太好


使用 下载js
npm install axios

使用axios发送ajax请求
1. import 引入js
2. 函数触发请求
axios.get(url).then(
  success =>{},
  error=>{}
)

解决跨域
1. cors  在被访问的服务器上配置
2. jsonp 不推荐使用
3. 代理服务器，  使用代理服务器去访问其他服务器，服务器之间的访问是不存在跨域问题的

-->

<script>


  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        msg: '你好啊'
      }
    },
    methods: {
      getStudents() {
        axios.get('http://localhost:8080/students').then(
            response => {
              console.log('success', response.data)
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