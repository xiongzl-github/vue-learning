vuex简介:
1. Vuex是一个专为vue.js应用程序开发的状态管理模式, 
简单来说就是用来集中管理数据, 类似于React中的Redux, 都是基于Flux的前端状态管理框架

2. 基本用法
  2.1: 安装vuex(cnpm install vuex -S)
  2.2: 创建store.js文件, 再main.js中导入并配置store选项
  2.3: 编辑store.js文件
        Vuex的核心是Store(仓库), 相当于是一个容器, 一个store实例中包含以下属性的方法:
        state: 定义属性(状态, 数据)
        getters: 用来获取属性
        actions: 定义方法(动作)
        commit: 提交变化, 修改数据的唯一方式就是显式的提交mutations
        mutations: 定义变化
        注: 不能直接修改数据, 必须显式提交变化, 目的是为了追踪到状态的变化.
  2.4: 编辑App.vue
  再子组件中访问store对象的两种方式:
  方式一: 通过this.$store访问
  方式二: 通过mapState, mapGetters, mapActions来访问
          mapState    获取state
          mapGetters  获取属性(数据)
          mapActions  获取方法(动作)










