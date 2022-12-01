const countOptions = {
  namespaced: true,
  state: {
    sum: 0,
    school: '北外',
    subject: 'web',
  },
  actions: {
    add(context, value) {
      context.commit('ADD', value)
    }
  },
  mutations: {
    ADD(store, value) {
      store.sum += value
    },
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}

export default countOptions