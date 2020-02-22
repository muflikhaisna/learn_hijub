<template>
  <div id="menu-bar" class="header-item">
    <MenuBarItem hideDropdown>TERBARU</MenuBarItem>
    <MenuBarItem>HIJAB</MenuBarItem>
    <MenuBarItem>PAKAIAN</MenuBarItem>
    <MenuBarItem>AKSESORIS</MenuBarItem>
    <MenuBarItem>HIJUP EKLUSIF</MenuBarItem>
    <MenuBarItem>BRANDS</MenuBarItem>
    <MenuBarItem hideDropdown activeMenu>SALE</MenuBarItem>
  </div>
</template>

<script>
import MenuBarItem from "./menubar/MenuBarItem.vue";
export default {
  components: {
    MenuBarItem
  }
};
</script>

<style scoped>
#menu-bar {
  display: flex;
  align-items: center;
}
</style>