<template>
    <div class="row">
        <input type="text" v-model="search_filter" placeholder="Rechercher votre pokemon">
        <Pokemons v-for="(pokemon, index) in filters" :key="index" :pokemon="pokemon" />
    </div>
</template>

<script>
    import pokemons from './data.js'
    import Pokemons from './Pokemons'

    export default{
        name: 'pokemon-list',

        components:{
            Pokemons,
        }, 

        data(){
            return{
                pokemons,
                search_filter: ' '
            }
        },

        computed:{
            filters(){
                return this.pokemons.filter( a => {
                    return a.name.toLowerCase().includes(this.search_filter.toLowerCase())
                })
            }
        }
    }
</script>

<style scoped>

</style>