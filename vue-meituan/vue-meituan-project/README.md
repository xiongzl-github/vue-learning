### 环境的搭建
1. 初始化项目  
   `vue init webpack vue-meituan-project`
2. 安装依赖  
  `npm install vuex -S`
3. 运行项目  
  `npm run dev`
### 集成Ul库
1. 集成muse-ui  
  `npm install muse-ui -S`
2. 配置muse-ui  
  因为**muse-ui**依赖**less**, 所以我们需要安装配置**less**  
  `npm install less less-loader -S`
  另外根据**muse-ui**的配置, 我们需要修改utils.js配置文件, 
  修改为: 
    <pre>  
      return { 
        css: generateLoaders(), 
        postcss: generateLoaders(), 
        less: generateLoaders(
          "less",
          {
            globalVars: {
              museUiTheme: `'${museUiThemePath}'`
            }
          }),
        ......
    }
    </pre>
   此外还要加上museUiThemePath
    <pre>
        const museUiThemePath = path.join(
        __dirname,
        "..",
        "node_modules",
        "muse-ui",
        "src/styles/themes/variables/teal.less"
      );
    </pre>
### 底部导航栏
1. 编写Home, Me, Nearby, Order, Stroll等底部导航栏

2. 配置路由
  