<template>
  <div id="content">
      <div id="iklan">
          <div class="row">
              <img :src="iklan1" alt="iklan">
              <img :src="iklan2" alt="iklan">
          </div>
           <div class="row">
              <img :src="iklan1" alt="iklan">
              <img :src="iklan2" alt="iklan">
          </div>
      </div>
      <div id="terbaru">
          <div id="terbaru-title">
              <p><b>Terbaru</b></p>
              <p><b>Lihat Semua ></b></p>
          </div>
      </div>
      <br>
      <hr>
      <div id="article">
          <h4>MODEL BAJU MUSLIM WANITA TERBARU DARI BRAND-BRAND TERBAIK</h4>
          <p>HIJUP adalah pioneer e-commerce fashion muslim pertama di Indonesia yang menjual online berbagai macam koleksi hijab, tunik, gamis, baju muslim, blouse, kaftan, long dress, celana panjang, rok plisket, rok panjang wanita dan aksesori model terbaru. HIJUP meyakini bahwa setiap Muslimah mampu menggerakan berbagai perubahan, salah satunya dengan berpenampilan yang baik.</p>
          <p>Berdiri sejak 2011, HIJUP saat ini telah menggandeng sejumlah local brand kenamaan, di antaranya Dian Pelangi, Ria Miranda, Kami., Radwah, Covering Story, Zahra Signature, Hijab Wanita Cantik, Buttonscarves, L'Mira Ethnique, Arsscarf By Anissa Hapsari, Casa Elana, HEAVEN LIGHTS, HijabChic, Jenna & Kaia, Nadjani, Noore, Pelangi Asmara, Tatuis, dan masih banyak lagi</p><br>
            <span id="ReadMore">
                Baca Selengkapannya
            </span>
      </div>
      <br><br>
      <hr>
  </div>
</template>

<script>
export default {
    data(){
        return{
            iklan1 : require('@/assets/iklan1.jpg'),
            iklan2 : require('@/assets/iklan2.jpg')
        }
    }

}
</script>

<style scoped>
#content{
    box-sizing: border-box;
    padding: 20px 150px 20px 150px;
}
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
#terbaru-title{
    width: 100%;
    display: flex;
    justify-content: space-between
}
#article {
    text-align: center;
}
#article > p{
    text-align: justify;
}
#ReadMore{
    border: 1px solid;
    border-radius: 5px;
    border-color: grey;
    width: max-content;
    padding: 10px

}

hr{
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>