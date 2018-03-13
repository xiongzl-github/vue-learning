module.exports = {
  // 配置入口文件
  entry: './main.js',
  // 配置入口文件输出位置
  output: {
    // 表示项目的根目录
    path: __dirname,
    filename: 'build.js'
  },
  // 配置模块加载器
  module: {
    rules: [
      {
        // 所有以.vue结尾的文件都由vue.loader加载
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // 所有以.js文件结尾的都由bable-loader加载, 除了node_modules以外.
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};