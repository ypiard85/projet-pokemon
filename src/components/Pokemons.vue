<template>
    <div class="col s12 m4" >
      <div class="card-panel" :class="pokemon.type" 
      @mouseover="hover = true"
      @mouseleave="hover = false">
        <div class="row">
          <div class="center">
            <h4> {{pokemon.name}} </h4>
          </div>
        </div>
        <div class="row">
          <div class="center">
            <img role="pokemon" :src="pokemon.logo" alt="">
          </div>
        </div>
        <div class="row">
          <div class="center">
          <h5> {{pokemon.pv}} PV </h5>
        </div>
        <div class="center">
          <img role="type" :src="type" alt="">
        </div>
      </div>
      <button v-if="hover" class="btn blue right">VOIR PLUS</button>
      </div>
    </div>

</template>

<script>

  export default{
      name: 'pokemon-list',
      props:['pokemon'],

      data(){
          return{
              type: null,
              hover: false
          }
      },

      mounted(){
          if(this.pokemon.type == 'electrique'){
            this.type = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrSQk2WVru8_01NIH1GFXsPFRxutqq63uH9Q&usqp=CAU'
          }else if(this.pokemon.type == 'plante'){
            this.type = 'https://static3.cards-capital.com/43565-product/lot-de-10-cartes-plante-pokemon.jpg'
          }else if(this.pokemon.type == 'feux'){
            this.type = 'https://www.g33kmania.com/wp-content/uploads/feu-symbole.png'
          }
      }
  }
</script>

<style>
  .card-panel{
    text-align: left;
  }

  .electrique{
    background-color: rgba(255, 255, 0, 0.220);
  }

  .plante{
    background-color: rgba(0, 128, 0, 0.26);
  }

  .feux{
    background-color: rgba(255, 0, 0, 0.219);
  }

  button{
    animation: btn-show 0.4s ease-in;
  }

  button:hover{
    transform: scale(1.1);
    transition: 0.4s;
  }

  @keyframes btn-show{
    from{
      opacity: 0;
    }to{
      opacity: 1;
    }
  }

</style>


