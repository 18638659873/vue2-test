// 用于创建vuex中的store

// 引入vuex
import Vuex from 'vuex'
import Vue from "vue";


import countOptions from "@/store/count";
import personOPtions from "@/store/person";


// 使用vuex
Vue.use(Vuex)

// 创建vuex的store  用于对state 进行数据加工
const store = new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOPtions
  }
})

// 暴露store
export default store