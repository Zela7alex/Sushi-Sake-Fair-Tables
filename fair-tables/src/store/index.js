import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    tables: [],
    pastSections: [],
    partiesScheduled: [],
  },
  getters: {
    people: (state) => {
      return state.people
    },
  },
  mutations: {
    solidifyPerson(state, payload) {
      state.people = payload
    },
  },
  actions: {
    createNewServer(context, payload) {
      const currentPeople = context.state.people
      currentPeople.push(payload)
      context.commit('solidifyPerson', currentPeople)
    },
  },
  modules: {},
})
