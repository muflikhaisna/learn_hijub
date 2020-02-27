<template>
  <div id="content">
      <Iklan></Iklan>
      <Terbaru></Terbaru>
      <Article></Article>
  </div>
</template>

<script>
import Iklan from "@/components/content/Iklan.vue";
import Terbaru from "@/components/content/Terbaru.vue";
import Article from "@/components/content/Article.vue";
export default {
    components:{
        Iklan,
        Terbaru,
        Article
    }
}
</script>

<style scoped>
#content{
    box-sizing: border-box;
    padding: 20px 150px 20px 150px;
}

hr{
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>