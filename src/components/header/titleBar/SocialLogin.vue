<template>
  <div id="social-login">
      <p>MASUK DENGAN</p>
      <img :src="facebook" alt="facebook">
      <img :src="gmail" alt="gmail">
  </div>
</template>

<script>
export default {
    data(){
        return{
            facebook: require('@/assets/facebook.png'),
            gmail: require('@/assets/gmail.png'),
            }
    }
}
</script>

<style>
#social-login{display: flex; align-items: center; border: solid 1px; border-radius: 5px; padding: 0px 10px 0px 10px}
img{width: 24px; height: 24px; padding-left: 10px}
</style>