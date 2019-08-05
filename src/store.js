import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    details: {},
    sender: ""
  },
  mutations: {
    SET_DETAILS(state, data){
      state.details = data;
    },
    SET_SENDER(state, data){
      state.sender = data;
    }
  },
  actions: {

  }
})
