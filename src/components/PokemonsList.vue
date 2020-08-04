<template>
    <div class="row">
        <input type="text" v-model="$store.state.search_filter" placeholder="Rechercher votre pokemon">
        <div v-if="$store.state.search_filter != null " >
            <Pokemons v-for="pokemon in filters" :key="pokemon.id" :pokemon="pokemon" />
        </div>
        <div v-else>
            <Pokemons v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>
    </div>
</template>

<script>

    import Pokemons from './Pokemons'
    import {mapGetters} from 'vuex'
    export default{
        name: 'pokemon-list',

        components:{
            Pokemons
        },

        computed:{
            ...mapGetters({
                pokemons: 'pokemons',
                filters: 'filters',
            }),
        }
    }
</script>

<style scoped>

</style>