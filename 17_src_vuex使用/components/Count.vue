<template>
  <div>
    <h1>当前求和的值{{he}}</h1>
    <h1>当前值放大10倍{{$store.getters.bigSum}}</h1>
    <h1>我在{{$store.state.school}}，学习{{$store.state.subject}}</h1>
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
      // he() {
      //   return this.$store.state.sum
      // }
      // 借助 mapState 生成计算属性  第一种写法(对象写法)
      ...mapState({he: 'sum', personList: 'personList'}),

      // 借助 mapState 生成计算属性 第二种写法(数组写法),生成的计算名 和原属性上的名字必须一样
      ...mapState(['school', 'subject']),

      // 一样的逻辑 就是处理getters上的值 进行绑定在计算属性上的
      // ...mapGetters({bigSum:'bigSum'}),
      ...mapGetters(['bigSum'])
    },
    methods: {
      /*      increase(val) {
              this.$store.dispatch('add', val)
              // 如果不需要一些ajax等其他的处理 可以直接交给mutation处理,也就是跳过了action
              // this.$store.commit('ADD',this.n)
            },*/

      // 使用vuex 的mapMutations 生成函数去调用，还有数组形式 不在赘述了
      ...mapMutations({increase: 'ADD'}),
      // 使用vuex 的mapActions 生成函数去调用，还有数组形式 不在赘述了
      // ...mapActions({increase: 'add'})


    },
    mounted() {
      const x = mapState({he: 'sum'})
      console.log(x)
    }
  }

</script>

<style>

  button {
    margin-left: 10px;
  }
</style>