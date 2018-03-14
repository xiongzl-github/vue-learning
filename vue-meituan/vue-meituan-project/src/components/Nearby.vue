<template>
 <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
  <div class="nearby">
    <h1>{{ msg }}</h1>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'nearby',
  data () {
    return {
      msg: 'Nearby.vue'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
