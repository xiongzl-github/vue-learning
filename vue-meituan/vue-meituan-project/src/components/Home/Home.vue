<template>
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <div class="home">
      <!-- <h1>{{ msg }}</h1>
      <router-link to="/food">美食</router-link> -->
      <Navigation></Navigation>
      <slideshow></slideshow>
      <programa></programa>
      <ad></ad>
      <shop></shop>
    </div>
  </transition>
</template>

<script>
import Navigation from './Navigation'
import Slideshow from './Slideshow'
import Programa from './Programa'
import Ad from './Ad'
import Shop from './Shop'

export default {
  name: "Home",
  data() {
    return {
      msg: "Home.vue"
    };
  },
  components:{
    Navigation,
    Slideshow,
    Programa,
    Ad,
    Shop,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
