<template>
<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</transition>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Me.vue'
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
