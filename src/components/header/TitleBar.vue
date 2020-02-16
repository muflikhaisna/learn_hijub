<template>
  <div id="title-bar">
    <h2>H I J U P</h2>
    <input type="search" name id placeholder="Search" />
    <SocialLogin class="p"></SocialLogin>
    <img :src="idr" alt="idr" id="idr" />
    <p>IDR</p>
    <p class="p">|</p>
    <p>Sign In</p>
    <p class="p">|</p>
    <p>Register</p>
  </div>
</template>

<script>
import SocialLogin from "@/components/header/titleBar/SocialLogin.vue";
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
  width: 100%;
  justify-content: space-evenly;
}
#idr {
  padding-right: 20px;
}
.p {
  padding: 0px 20px 0px 20px;
}
</style>