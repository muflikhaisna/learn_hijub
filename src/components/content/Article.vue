<template>
  <div id="article">
          <h4>{{article.title}}</h4>
          <div v-for="(paragraph,index) in article.description" :key="index">
             <p v-if="index!=3">{{paragraph}}</p>
          </div>
            <span id="ReadMore">
                Baca Selengkapannya
            </span>
      <br><br>
      <hr>
      </div>
</template>

<script>
export default {    
    computed:{
        article(){
            return this.$store.getters.lihatInfo
        }
    }
}
</script>

<style scoped>

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

</style>