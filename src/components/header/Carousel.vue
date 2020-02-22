<template>
  <div id="carousel">
      <img :src="photos.carrousel[currentImage]" alt="" class="carousel">
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            nextIcon: require('@/assets/next.png'),
            currentImage:0
            }
    },
    mounted(){
        this.start();
        // this.loadImages()
    },
    computed:mapState(['photos']),
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
        // loadImages(){
        //     fetch("http://localhost:3000/carrousel").then(result=>{
        //         result.json().then(data=>{
        //             this.images=data
        //         })
        //         console.log(result)
        //         }
        //     )
        // }
    },
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