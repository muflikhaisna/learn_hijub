<template>
  <div id="header">
    <TitleBar></TitleBar>
    <MenuBar></MenuBar>
    <Carousel></Carousel>
  </div>
</template>

<script>
import TitleBar from "@/components/header/TitleBar.vue";
import MenuBar from "@/components/header/MenuBar.vue";
import Carousel from "@/components/header/Carousel.vue";
export default {
  components: {
    TitleBar,
    MenuBar,
    Carousel
  }
};
</script>

<style>
.header-item {
  width: 100%;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0px 200px 0px 200px;
}
</style>