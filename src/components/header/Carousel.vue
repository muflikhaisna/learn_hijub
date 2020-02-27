<template>
  <div id="carousel">
      <img :src="photos[currentImage]" alt="" class="carousel">
  </div>
</template>

<script>
export default {
    data(){
        return{
            nextIcon: require('@/assets/next.png'),
            currentImage: 0
            }
    },
    mounted(){
        this.start();
    },
    methods:{
        start(){
            setInterval(()=>{
                if(this.currentImage==this.photos.length-1){//this->file vue
                    this.currentImage=0
                }else{
                    this.currentImage=this.currentImage + 1
                }
            },5000)
        }
    },
    computed:{
        photos(){//
            return this.$store.getters.lihatCarrousel
        }   
    }
}
</script>

<style scoped>
#carousel{
    width: 100%;
    display: flex;
}
.carousel{
    width: 100%
}
.absolute{
    align-content: center;
    position: absolute
}
</style>