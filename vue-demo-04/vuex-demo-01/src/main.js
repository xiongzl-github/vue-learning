import Vue from 'vue'
import App from './App.vue'
// 导入store对象
import store from './store.js'

new Vue({
  // 配置store选项, 指定为store对象, 会自动将store对象注入到所有子组件中
  // 再子组件中通过this.$store访问该store对象
  store,
  el: '#app',
  render: h => h(App)
})
