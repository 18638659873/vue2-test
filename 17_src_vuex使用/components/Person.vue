<template>
  <div>
    <h1 style="color: red">Count求和为{{countSum}}</h1>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名称" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>


<script>


  import {nanoid} from 'nanoid'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    data() {
      return {
        name: '',
      }
    },
    computed: {
      personList() {
        return this.$store.state.personList
      },
      countSum() {
        return this.$store.state.sum
      }
    },
    methods: {
      add() {
        const person = {id: nanoid(), name: this.name}
        this.$store.commit('ADD_PERSON', person)
        console.log(person)
        this.name = ''
      }
    },
    mounted() {


    }
  }

</script>

<style>

</style>