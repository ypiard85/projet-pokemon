<template>
  <div id="app" class="container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="500" alt="">
    <PokemonsList />
  </div>
</template>


<script>
  import PokemonsList from '@/components/PokemonsList'
  export default{
    components:{
      PokemonsList
    }
  }
</script>

<style lang="scss" scoped>
  img{
    width: 400px;
    
  }
</style>
