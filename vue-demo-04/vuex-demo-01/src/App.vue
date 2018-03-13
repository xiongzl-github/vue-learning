<template>
  <div id="app">
    <button v-on:click="increment">加</button>
    <button v-on:click="subtract">减</button>
    <button v-on:click="incrementAsync">异步增加</button>
    <p>当前数字为: {{count}}</p>
    <p>当前数字为: {{isEvenOrOdd}}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 方式一
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // }
  // 方式二
  computed:mapState([
    'count'
  ]),
  computed:mapGetters([
    'count',
    'isEvenOrOdd',
  ]),
  methods:mapActions([
    'increment',
    'subtract',
    'incrementAsync',
  ])


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
