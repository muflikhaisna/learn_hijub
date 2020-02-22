<template>
  <div id="footer-download-segment">
      <br><br><br><b>DAPATKAN APLIKASI KAMI</b>
        <br>Download Aplikasi HIJUP Sekarang Juga!
        <div class="image">
            <img :src="googleplay" alt="gplay">
        <img :src="appstore" alt="gplay">
        </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        googleplay: require('@/assets/googleplay.svg'),
        appstore: require('@/assets/appstore.svg')
    }
}
}
</script>

<style scoped>
.image{
    display: flex; 
}
img{
    width: 30%;
    padding: 0px 10px 0px 0px;
}
</style>