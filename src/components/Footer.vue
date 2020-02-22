<template>
  <div id="footer">
      <div>
          <FooterJoinSegment></FooterJoinSegment>
          <FooterAkunSegment></FooterAkunSegment>
      </div>
      
      <FooterHelpSegment></FooterHelpSegment>
      <FooterAboutSegment></FooterAboutSegment>
      <div>
          <FooterSocialMediaSegment></FooterSocialMediaSegment>
          <FooterDownloadSegment></FooterDownloadSegment>
      </div>
  </div>
</template>

<script>
import FooterJoinSegment from "@/components/footer/FooterJoinSegment.vue";
import FooterAkunSegment from "@/components/footer/FooterAkunSegment.vue";
import FooterHelpSegment from "@/components/footer/FooterHelpSegment.vue";
import FooterAboutSegment from "@/components/footer/FooterAboutSegment.vue";
import FooterSocialMediaSegment from "@/components/footer/FooterSocialMediaSegment.vue";
import FooterDownloadSegment from "@/components/footer/FooterDownloadSegment.vue";
export default {
components:{
    FooterJoinSegment,
    FooterAkunSegment,
    FooterHelpSegment,
    FooterAboutSegment,
    FooterSocialMediaSegment,
    FooterDownloadSegment
}

}
</script>

<style>
#footer{
    box-sizing: border-box;
    padding: 20px 150px 20px 150px;
    display: flex;
    justify-content: space-between;
    width: 100%;
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