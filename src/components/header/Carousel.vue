<template>
  <div id="carousel">
      <img :src="images[currentImage]" alt="" class="carousel">
      <!-- <img :src="nextIcon" alt="" class="absolute"> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            nextIcon: require('@/assets/next.png'),
            images:[
               require('@/assets/carousel1.jpeg'),
               require('@/assets/carousel2.jpeg')
            ],
            currentImage:0
            }
    },
    mounted(){
        this.start()
    },
    methods:{
        start(){
            setInterval(()=>{
                if(this.currentImage){
                    this.currentImage=0
                }else{
                    this.currentImage=1
                }
            },5000)
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