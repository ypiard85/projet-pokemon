import Vue from 'vue'
import Vuex from 'vuex'
import pokemons from '@/components/data.js'
Vue.use(Vuex)

export default new Vuex.Store({
 
  state: {
    pokemons,
    search_filter: null,
  },

  getters:{
    pokemons(state){
      return state.pokemons
    },

    filters(state){
      return state.pokemons.filter( a => {
          return a.name.toLowerCase().includes(state.search_filter.toLowerCase())
      })
  },

  },

  mutations: {
    
  },
  actions: {

  },

  modules: {
  }
})
