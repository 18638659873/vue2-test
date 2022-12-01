<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--        跳转路由并携带query参数，方式一 to的字符串写法  -->
        <!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->

        <!--        跳转路由并携带query参数，方式二  to的对象写法  -->
        <!--        <router-link :to="{-->
        <!--          // path:'/home/message/detail',-->
        <!--          name:'xiangqing',-->
        <!--          query:{-->
        <!--            id:m.id,-->
        <!--            title:m.title-->
        <!--          }-->
        <!--        }">{{m.title}}-->
        <!--        </router-link>&nbsp;-->

        <!--        使用params传递参数，方式一 to的字符串形式-->
        <!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->


        <!--        使用params传递参数，只能使用name，不能使用path，path会报错  方式二 to的对象形式-->
        <router-link :to="{
                          name:'xiangqing',
                          params:{
                            id:m.id,
                            title:m.title
                          }
                        }">{{m.title}}
        </router-link>&nbsp;

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Message',
    data() {
      return {
        messageList: [
          {id: '001', title: '消息001'},
          {id: '002', title: '消息002'},
          {id: '003', title: '消息003'},
        ]
      }
    },
  }

</script>

<style>

</style>