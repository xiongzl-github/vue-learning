<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
    </h2>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <hr>
    <button v-on:click="send">发送Ajax请求</button>
    <hr>
    <MyButton v-on:click.native="send"></MyButton>

  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to mapo'
    }
  },

  methods:{
    send(){
      this.$http.get('http://localhost:8080/api/user/getUser').then(resp => {
        console.log(resp.data);
      }).catch(err => {
        console.log(err);
      });
    }
  },

  components:{
    MyButton
  },

  mounted(){
    console.log(this.$route);
  },

  watch:{
    $route:function(newValue, oldValue) {
      console.log('路由发生变化, 跳转到: ' + newValue.path);
    }
  },
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

h1, h2 {
  font-weight: normal;
}

</style>
