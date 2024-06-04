import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    switchDrawer(state){
      // CAMBIA EL ESTADO DE LA BARRA LATERAL
      state.drawer = !state.drawer;
    },
  },
  modules: {}
})

export default store