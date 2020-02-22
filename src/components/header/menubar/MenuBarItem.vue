<template>
  <div id="menu-item"
  @mouseover="showContent=true"
  @mouseleave="showContent=false"
  >
    <div id="button">
      <h5  :class={active:activeMenu}>
        <slot></slot>
      </h5>
      <img :src="downIcon" v-show="!hideDropdown" />
    </div>
    <ItemContent class="content" v-show="showContent"></ItemContent>
  </div>
</template>

<script>
import ItemContent from './content/itemContent.vue'
export default {
  components:{
    ItemContent
  },
  props: {
    hideDropdown: Boolean,
    activeMenu: Boolean
  },
  methods:{

  },
  data() {
    return {
      downIcon: require("@/assets/down.png"),
      showContent: false
    };
  }
};
</script>

<style scoped>
img {
  height: 10px;
  width: 10px;
  margin-left: 5px;
}
#button {
  align-items: center;
  display: flex;
  
}
.active{
  color: red;
}
h5:hover{
  border-bottom: 2px solid;
}
.content{
  position: absolute
}
</style>