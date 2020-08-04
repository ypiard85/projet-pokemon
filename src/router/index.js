import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonsList from '@/components/PokemonsList'
import PokemonView from '@/components/PokemonView'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'PokemonsList',
      component: PokemonsList
    },
    {
      path: '/view/:id',
      name: 'view',
      component: PokemonView
    },
   ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
