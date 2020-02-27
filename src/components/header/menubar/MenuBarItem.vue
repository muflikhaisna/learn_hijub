<template>
  <div id="menu-item"
  @mouseover="showContent=true"
  @mouseleave="showContent=false"
  >
    <div id="button">
      <h5 :class={active:activeMenu}>
        <slot></slot>
      </h5>
      <img :src="downIcon" v-show="dropDownItems"/>
    </div>
    <div class="content">
      <div
      class="item" 
      v-show="showContent" 
      v-for="(items,index) in dropDownItems" 
      :key="index">
        {{items}}
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    activeMenu: Boolean,
    dropDownItems: Array
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
  position: absolute;
  background-color: white;
    border-radius: 5px;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.2);
}

.item{
    padding: 10px
}
.item:hover{
    background-color: rgba(0,0,0,0.2)
}
</style>