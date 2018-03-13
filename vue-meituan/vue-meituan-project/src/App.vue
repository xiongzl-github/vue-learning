<template>
  <div id="app">
    <mu-appbar title="Title">
    </mu-appbar>
    <router-view/>
  </div>

</template>

<script>
import Vue from "vue";
import "muse-components/styles/base.less"; // 加载基础的样式
import appBar from "muse-components/appBar";
// import avatar from "muse-components/avatar";
// ..
Vue.component(appBar.name, appBar);
//Vue.component(avatar.name, avatar);
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
