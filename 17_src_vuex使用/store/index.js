// 用于创建vuex中的store

// 引入vuex
import Vuex from 'vuex'
import Vue from "vue";

// 准备actions 用于响应组件的动作
const actions = {
  add(context, value) {
    context.commit('ADD', value)
  }
}
// 准备mutations 用于操作数据 （state）
const mutations = {
  ADD(store, value) {
    store.sum += value
  },
  ADD_PERSON(store, person) {
    store.personList.unshift(person)
  }
}
// 准备state 用于存储数据
const state = {
  sum: 0,
  school: '北外',
  subject: 'web',
  personList: [
    {id: '001', name: '张三'}
  ]
}

// 准备 getter ,相当于在vuex中进行的计算属性
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
// 使用vuex
Vue.use(Vuex)

// 创建vuex的store  用于对state 进行数据加工
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})

// 暴露store
export default store