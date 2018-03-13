

// 定义getters
var getters = {
  // 判断一个数是奇数还是偶数
  isEvenOrOdd(state){
    return state.user.count%2==0?'偶数':'奇数';
  },
};



export default getters;





