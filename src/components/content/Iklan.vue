<template>
  <div id="iklan">
          <div class="row">
              <img :src="photos[0]" alt="iklan">
              <img :src="photos[1]" alt="iklan">
          </div>
           <div class="row">
              <img :src="photos[2]" alt="iklan">
              <img :src="photos[3]" alt="iklan">
          </div>
      </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         photos:[]
    //     }
    // },
    computed:{
        photos(){//
            return this.$store.getters.lihatContent
        }   
    },
     
}
</script>

<style scoped>
.row{
    display: flex;
    justify-content: space-evenly;
    width: 100%
}
.row >img{
    width: 50%;
    padding: 0px 10px 20px 10px;
}

#iklan{
    width: 100%;
}
</style>