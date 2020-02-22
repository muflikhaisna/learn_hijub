<template>
  <div id="footer">
      <hr>
      <div class="p-20"><b>BERGABUNG SEBAGAI TENANT</b>
        <p class="join">Join Now!</p>
        <br>
        <p><b>AKUN</b></p>
        <p>Sign In <br> Register</p>
      </div>
      <div class="p-20"><b>BUTUH BANTUAN</b>
        <br>08:00 - 17:00 WIB
        <br>(Hari Kerja)
        
        <br><img :src="email" alt="" style="width: 18px; padding-right:4px"> customer@hijup.com
        <br><img :src="pin" alt="pin" style="width: 18px; padding-right:4px"> Pejaten Barat Raya 
        <br> No. 2B Pasar Minggu, Jakarta Selatan, 12510
        <p class="hubungi-kami">HUBUNGI KAMI</p>
      </div>
      <div class="p-20"><b>TELUSURI KAMI</b>
        <br>Tentang HIJUP
        <br>Press
        <br>Kebijakan
        <br>Syarat dan Ketentuan
        <br>Karir
        <br>Kontak Kami
        <br>Indeks Produk
        <br>HIJUP Warehouse Storestyle="width: 18px; padding-right:4px"
        <br>Pengiriman Internasional
        <br>FAQ
        <br>Size Guide
        <br>Panduan Material
      </div>
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
        <br><br><br><b>DAPATKAN APLIKASI KAMI</b>
        <br>Download Aplikasi HIJUP Sekarang Juga!
        <img :src="googleplay" alt="gplay" style="width: 45%">
        <img :src="appstore" alt="gplay" style="width: 45%">
        </div>
        <hr>
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
        li: require('@/assets/linkedin.png'),
        email: require('@/assets/mail.png'),
        pin: require('@/assets/pin.png'),
        googleplay: require('@/assets/googleplay.svg'),
        appstore: require('@/assets/appstore.svg')
    }
}
}
</script>

<style scoped>
#footer{
    box-sizing: border-box;
    padding: 20px 150px 20px 150px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.join{
    color: white;
    background-color: indianred;
    border-radius: 5px;
    padding: 5px;
    width: fit-content
}
.hubungi-kami{
    border: solid 2px black;
    border-radius: 5px;
    width:fit-content;
    padding: 5px;
}
.social-media-icon{
    display: flex
}
.social-media-icon > img{
    display: flex;
    width: 18px;
    height: 18px;
    padding-right: 20px
}
hr{
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.p-20{
    padding-right: 20px
}
</style>