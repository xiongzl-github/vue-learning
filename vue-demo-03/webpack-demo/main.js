// 使用ES6语法引入模板
// 其会在node_modules中查找vue
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#app',
  // 使用render函数进行渲染组件
  render:function(h){
    return h(App);
  }
})


























