<template>
  <div id="menu-bar" class="header-item">
    <div v-for="(items,index) in menuContent" :key="index">
      <MenuBarItem :dropDownItems="items.options" >{{items.name}}</MenuBarItem>
    </div>
  </div>
</template>

<script>
import MenuBarItem from "./menubar/MenuBarItem.vue";
export default {
  components: {
    MenuBarItem
  },
  computed:{
    menuContent(){
      return this.$store.getters.lihatMenu
    }
  }
};
</script>

<style scoped>
#menu-bar {
  display: flex;
  align-items: center;
}
</style>