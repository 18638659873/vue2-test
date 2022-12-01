const personOPtions = {
  namespaced: true,
  state: {
    personList: [
      {id: '001', name: '张三'}
    ]
  },
  actions: {},
  mutations: {
    ADD_PERSON(store, person) {
      store.personList.unshift(person)
    }
  },
  getters: {}
}

export default personOPtions