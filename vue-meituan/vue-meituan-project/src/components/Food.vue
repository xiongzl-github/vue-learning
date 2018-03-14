<template>
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="back">return</button>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'Food',
  data () {
    return {
      msg: 'Food.vue'
    }
  },
  methods:{
    back(){
      this.$router.back();
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
