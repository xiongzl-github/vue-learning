Element UI(http://element.eleme.io/#/zh-CN)
1. 简介
   Element UI 是饿了么团队提供的一套基于vue2.0的组件库, 可以快速搭建网站, 提高开发效率
   Element UI pc端
   Mint UI    mobile端

2. 如何使用
   2-1 安装element ui
   cnpm install element-ui -S

   2-2 在main.js中引入并使用组件
   import ElementUI from 'element-ui'
   import 'element-ui/lib/theme-default/index.css' // 该样式文件需要单独引入
   Vue.use(ElementUI);
   这种方式引入了ElementUI中所有的组件

   2-3 在webpack.config.js中添加loader
   在当前版本中, 已经配置了style-loader, 有些较低的版本并没有配, 这个要注意
   另外在webpack.config.js中并没有指定字体文件要使用那个loader, 需要进行添加.
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
    }

    2-4 使用less
    如果想要使用less, 需要两个loader: less, less-loader
    安装: cnpm install less less-loader --save -D
    并且还要再webpack.config.js中进行配置
    {
      test:/\.less$/,
      loader:'less-loader',
    }
