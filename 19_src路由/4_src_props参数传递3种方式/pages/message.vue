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
        <!--        <router-link :to="`/home/message/detail`">{{m.title}}</router-link>&nbsp;&nbsp;-->


        <!--  props 传值的第一种写法 传递的值是route中写死的，所以router-link用哪个都可以获取到值-->

        <!--  props 传值的第二种写法，但是只能获取params的参数 query的不行-->
        <!--                <router-link :to="{-->
        <!--                                  name:'xiangqing',-->
        <!--                                  params:{-->
        <!--                                    id:m.id,-->
        <!--                                    title:m.title-->
        <!--                                  }-->
        <!--                                }">{{m.title}}-->
        <!--                </router-link>&nbsp;-->

        <!--  props 传值的第三种写法 都可以获取-->
        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;

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