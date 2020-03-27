import * as http from '@/api/role'
const state = {
  main: 0,
  eventTypeList: [],
  netType: null,
  successEvent: null
}

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main++
  },
  CHANGE_EVENT_LIST(state, payload) {
    state.eventTypeList = [...payload]
  },
  CHANGE_NET_TYPE(state, payload) {
    state.netType = payload
  },
  CHANGE_SUCCESS_EVENT_TYPE(state, payload) {
    state.successEvent = payload
  }
}

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  async getEventList({ commit }, payload) {
    let result = await http.getEventType(payload)
    commit('CHANGE_EVENT_LIST', [...result.Result])
  }
}

export default {
  state,
  mutations,
  actions
}
