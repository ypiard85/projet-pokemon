<template>
  <div id="app" class="container">
    <router-link to="/"><img align="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="500" alt=""></router-link>
    <router-view></router-view>
  </div>
</template>


<script>

  export default{

  }
</script>

<style lang="scss" scoped>
  img{
    width: 400px;
    
  }
</style>
