import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    composePath: ''
  },
  mutations: {
    updateComposePath (state, newValue) {
      state.composePath = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
