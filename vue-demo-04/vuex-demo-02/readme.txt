1. 更好的组织Vuex项目结构
src
  store
    index.js
    getters.js
    actions.js
    mutations.js
    modules // 分为多个模块, 每个模块都可以拥有自己的state, getters, actions, mutations
      user.js
      cart.js
      goods.js
      ...