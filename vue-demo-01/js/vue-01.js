// 配置是否允许vue-devtools检查代码, 方便调试, 生产环境中需要设置为false
Vue.config.devtools=false;
// 阻止vue启动时生成生产消息
Vue.config.productionTip=false;
new Vue({
  el: '#vue-demo',  // 指定关联的元素
  data: {           // 存储的数据
    msg: 'hello world!'
  }
})