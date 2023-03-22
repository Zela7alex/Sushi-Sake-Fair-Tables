import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'
const partiesUrl = `${baseUrl}/parties`
const sectionsUrl = `${baseUrl}/sections`

export default new Vuex.Store({
  state: {
    people: [],
    tables: [],
    sections: [],
    parties: [],
  },
  getters: {
    people: (state) => {
      return state.people
    },
  },
  mutations: {
    solidifyPerson(state, newServer) {
      state.people = newServer
    },
    solidifyTable(state, newTable) {
      state.tables = newTable
    },
    solidifyParty(state, partyEntry) {
      state.parties = partyEntry
    },
    setAllParties(state, allParties) {
      state.parties = allParties
    },
    solidifySections(state, sectionsEntry) {
      state.sections = sectionsEntry
    },
    setAllSections(state, allSections) {
      state.sections = allSections
    },
    removeParty(state, partyById) {
      //finding the party selected from Parties Calendar
      const index = state.parties.findIndex(
        (partyItem) => partyItem._id == partyById
      )
      // Party will be removed as long as there is a party starting at index 1
      if (index != -1) {
        state.parties.splice(index, 1)
      }
    },
    removeSection(state, sectionById) {
      //finding the party selected from Parties Calendar
      const index = state.sections.findIndex(
        (sectionItem) => sectionItem._id == sectionById
      )
      // Party will be removed as long as there is a party starting at index 1
      if (index != -1) {
        state.sections.splice(index, 1)
      }
    },
    removeServer(state, serverById) {
      //finding the party selected from Parties Calendar
      const index = state.people.findIndex(
        (serverItem) => serverItem.id == serverById
      )
      // Party will be removed as long as there is a party starting at index 1
      if (index != -1) {
        state.people.splice(index, 1)
      }
    },
    //^ Add customer count to server
    addGuestCount(state, serverData) {
      const serverIndex = state.people.find(
        (serverIndex) => serverIndex.id == serverData.id
      )

      if (serverIndex != null) {
        let parsedGuestCount = parseInt(serverData.numOfGuests)
        serverIndex.guestCount += parsedGuestCount
      }
    },

    setServerData(state, data) {
      state.people = data
    },
    setTableData(state, data) {
      state.tables = data
    },
    deleteParty(state, partyEntry) {
      state.parties = partyEntry
    },
  },
  actions: {
    // parties actions
    createNewServer(context, payload) {
      const currentPeople = context.state.people
      currentPeople.push(payload)
      context.commit('solidifyPerson', currentPeople)
    },
    createNewTable(context, payload) {
      const currentTables = context.state.tables
      currentTables.push(payload)
      context.commit('solidifyTable', currentTables)
    },
    async createNewParty(context, partyEntry) {
      const currentParties = context.state.parties
      currentParties.unshift(partyEntry)
      context.commit('solidifyParty', currentParties)
      return (await Axios.post(partiesUrl, partyEntry)).data.id
    },
    //^ Action to retrieve only "all parties"
    async setAllPartiesAction(context) {
      context.commit('setAllParties', (await Axios.get(partiesUrl)).data)
    },
    async deletePartyAction(context, partyById) {
      context.commit('deleteParty', await Axios.delete(partiesUrl, partyById))
    },
    // sections actions
    async createNewSections(context, sectionsEntry) {
      const currentSections = context.state.sections
      currentSections.unshift(sectionsEntry)
      context.commit('solidifySections', currentSections)
      return (await Axios.post(sectionsUrl, sectionsEntry)).data.id
    },
    //^ Action to retrieve only "all sections"
    async setAllSectionsAction(context) {
      context.commit('setAllSections', (await Axios.get(sectionsUrl)).data)
    },

    //^
    loadServerData(context) {
      const data = localStorage.getItem('server')
      if (data != null) {
        context.commit('setServerData', JSON.parse(data))
      }
    },
    loadTableData(context) {
      const data = localStorage.getItem('table')
      if (data != null) {
        context.commit('setTableData', JSON.parse(data))
      }
    },

    storeServerData(context) {
      localStorage.setItem('server', JSON.stringify(context.state.people))
    },
    storeTableData(context) {
      localStorage.setItem('table', JSON.stringify(context.state.tables))
    },

    initializeServerData(context, store) {
      context.dispatch('loadServerData')
      store.watch(
        (state) => state.people,
        () => context.dispatch('storeServerData'),
        { deep: true }
      )
    },
    initializeTableData(context, store) {
      context.dispatch('loadTableData')
      store.watch(
        (state) => state.tables,
        () => context.dispatch('storeTableData'),
        { deep: true }
      )
    },
    //^ Clearing cart data
    clearServers(context) {
      context.commit('setServerData', [])
    },
  },
  modules: {},
})
