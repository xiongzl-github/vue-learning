/**
 * 用户模块
 */
import types from '../types.js'

const state={
  count:6,
}

// 定义getters
var getters = {
  count(state) {
    return state.count;
  },
};

// 定义actions, 要执行的操作, 如流程判断, 异步请求...
const actions = {
  increment({ commit, state }) {
    // 提交一个名为increment的变化,
    // 名称可自定义, 可以认为是类型名
    commit(types.INCREMENT);
  },
  subtract({ commit, state }) {
    if (state.count > 10) {
      commit(types.SUBTRACT);
    }
  },
};

// 定义mutations, 处理状态(数据)的改变
const mutations = {
  [types.INCREMENT](state) {
    state.count++;
  },
  [types.SUBTRACT](state) {
    state.count--;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}

