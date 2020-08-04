<template>
    <div class="center">
           <div v-for="pokemon in getPokemon" :key="pokemon.id" class="center">
                <img :src="pokemon.logo" :alt="pokemon.logo">
                <h2> {{pokemon.name}} </h2>
           </div>
    </div>
</template>


<script>

    export default{
        name: 'pokemon-view',

        data(){
            return{
                pokemonParams: this.$route.params.id
            }
        },

        computed:{
            getPokemon(){
                return this.$store.state.pokemons.filter( t => {
                    return t.id.includes(this.pokemonParams)
                })
            }
        }
    }
</script>


<style scoped>
    img{
        width: 200px;
    }
</style>