<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School :getSchoolName="getSchoolName"/>
    <!--  方式一:   使用v-on 对atchong事件绑定一个方法-->
    <!--    <Student v-on:atchong="getStudentName"/>-->
    <!--  方式二:   根据ref 在DOM挂载的时候，绑定一个方法-->
    <Student ref="student"/>
  </div>
</template>

<!--

一个交互的小功能样例
这里安装一个uuid的生成工具
npm i nanoid

-->

<script>
  import School from "@/components/School";
  import Student from "@/components/Student";

  export default {
    name: 'App',
    components: {Student, School},
    data() {
      return {
        msg: '你好啊'
      }
    },
    methods: {
      getSchoolName(name) {
        console.log("APP收到学校name:", name)
      },
      //1. 使用v-on对atchong绑定一个getStudentName方法
      getStudentName(name) {
        console.log("APP收到学生name:", name)
      }
    },
    mounted() {
      //2. 在加载DOM挂载的时候，给atchong这个事件绑定一个getStudentName方法
      this.$refs.student.$on('atchong', this.getStudentName)
      // 只触发一次绑定
      // this.$refs.student.$once('atchong', this.getStudentName)
    }

  }
</script>


<style>
  .app {
    background-color: gray;
    padding: 5px;
  }

</style>