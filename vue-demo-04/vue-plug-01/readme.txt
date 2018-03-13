vue: 自定义全局组件(插件)
  全局组件(插件): 就是指可以再main.js中使用Vue.use()进行全局引入, 然后再其他组件中就都可以使用
                 比如vue-route, import VueRouter from 'vue-route' Vue.use(VueRouter)
  普通组件(插件): 每次使用都要引入, 如axios