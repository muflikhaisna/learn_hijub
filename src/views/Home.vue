<template>
  <div id="home">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
  </div>

</template>

<script>
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
components:{
    Content,
    Footer,
    Header
}
}
</script>

<style>

</style>