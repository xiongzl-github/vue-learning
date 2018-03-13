import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios"
import App from './App.vue'
import routerConfig from './router.config.js'

// 使用VueRouter
Vue.use(VueRouter);

// 由于axios不能使用use这种方式进行引入, 所以如果想要全局使用必须将其添加到原型方法中
Vue.prototype.$http=axios;

// 创建路由实例
const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  render: h => h(App),
  // 注入路由
  router,
});
