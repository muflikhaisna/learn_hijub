<template>
  <div id="footer-help-segment">
      <div class="p-20"><b>BUTUH BANTUAN</b>
        <br>08:00 - 17:00 WIB
        <br>(Hari Kerja)
        
        <br><img :src="email" alt="" style="width: 18px; padding-right:4px"> customer@hijup.com
        <br><img :src="pin" alt="pin" style="width: 18px; padding-right:4px"> Pejaten Barat Raya 
        <br> No. 2B Pasar Minggu, Jakarta Selatan, 12510
        <p class="hubungi-kami">HUBUNGI KAMI</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: require('@/assets/mail.png'),
            pin: require('@/assets/pin.png')
        }
    }

}
</script>

<style scoped>
.hubungi-kami{
    border: solid 2px black;
    border-radius: 5px;
    width:fit-content;
    padding: 5px;
}
</style>