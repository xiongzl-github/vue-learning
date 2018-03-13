<template>
  <div>
    <h1>welcome to beijing mapo</h1>
    <h2>{{name}}</h2>
    <button v-on:click="change">change</button>
    <hr>
    <user></user>
  </div>
</template>

<script>

  // 导入模块
  import User from './components/User.vue'

  export default {
    data() {
      return {
        name: "tom"
      };
    },
    methods: {
      change(){
        this.name = "qiberlin";
      }
    },
    components: {
      User, // 相当于User:User.
    }
  };
</script>

<style>
  body {
    background-color: bisque;
  }
</style>




