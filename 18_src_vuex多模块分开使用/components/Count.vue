<template>
  <div>
    <h1>当前求和的值{{sum}}</h1>
    <h1>当前值放大10倍{{bigSum}}</h1>
    <h1>我在{{school}}，学习{{subject}}</h1>
    <h1 style="color: red">Person人数为:{{personList.length}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button>-</button>
    <button>当前求和为奇数再加</button>
    <button>等一等再加</button>
  </div>

</template>


<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Category',
    data() {
      return {
        n: 1
      }
    },
    computed: {
      ...mapState('countAbout', ['sum', 'school', 'subject']),
      ...mapState('personAbout', ['personList']),

      // 一样的逻辑 就是处理getters上的值 进行绑定在计算属性上的
      ...mapGetters('countAbout', ['bigSum'])
    },
    methods: {

      // 使用vuex 的mapMutations 生成函数去调用，还有数组形式 不在赘述了
      ...mapMutations('countAbout', {increase: 'ADD'}),


    },
    mounted() {
    }
  }

</script>

<style>

  button {
    margin-left: 10px;
  }
</style>