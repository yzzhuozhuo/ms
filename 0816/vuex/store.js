import Vue from 'vue'
import Vuex from './vuex'
import module1 from './modules/modules1'
import module2 from './modules/modules2'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    module1,
    module2
  }
})
export default store