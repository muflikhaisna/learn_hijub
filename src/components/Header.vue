<template>
  <div id="header">
      <TitleBar></TitleBar>
      <MenuBar></MenuBar>
  </div>
</template>

<script>
import TitleBar from '@/components/header/TitleBar.vue'
import MenuBar from '@/components/header/MenuBar.vue'
export default {
    components:{
        TitleBar,
        MenuBar
    }
}
</script>

<style>

</style>