<template>
  <div id="footer-social-media-segment">
       <div><b>TETAP TERHUBUNG DENGAN KAMI</b>
        <br><br>
        <div class="social-media-icon">
            <img :src="fb" alt="fb">
            <img :src="ig" alt="ig">
            <img :src="sc" alt="ig">
            <img :src="tw" alt="ig">
            <img :src="yt" alt="ig">
            <img :src="li" alt="ig">
        </div>
       </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
             fb: require('@/assets/fb.png'),
            ig: require('@/assets/instagram.png'),
            sc: require('@/assets/snapchat.png'),
            tw: require('@/assets/twitter.png'),
            yt: require('@/assets/youtube.png'),
            li: require('@/assets/linkedin.png')   
            }
    }

}
</script>

<style scoped>
.social-media-icon{
    display: flex
}
.social-media-icon > img{
    display: flex;
    width: 18px;
    height: 18px;
    padding-right: 20px
}
</style>