<template>
  <div id="title-bar" class="header-item">
    <h2>H I J U P</h2>
    <input type="search" name id placeholder="Search" />
    <SocialLogin class="p"></SocialLogin>
    <img :src="idr" alt="idr" id="idr" />
    <p>IDR</p>
    <p>|</p>
    <p>Sign In</p>
    <p>|</p>
    <p>Register</p>
  </div>
</template>

<script>
import SocialLogin from "@/components/header/titlebar/SocialLogin.vue";
export default {
  components: {
    SocialLogin
  },
  data() {
    return { idr: require("@/assets/indonesia.png") };
  }
};
</script>

<style scoped>
#title-bar {
  display: flex;
  align-items: center;
}
#idr {
  padding-right: 20px;
}
</style>