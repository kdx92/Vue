// 专用来写Webpack的相关配置，名字固定
const path = require('path')
// 引用一个包，其中是path
// 一旦需要在项目中使用node先关的东西，首先使用npm init
module.exports = {
  entry: './src/main.js',
  output: {
    path:path.resolve(__dirname, 'dist'),
    // 动态的获取路径
    // 使用node的语法
    // path模块中有一个函数resolve，可以对路径进行拼接
    // __dirname是一个全局变量，里面是当前这个config.js文件的路径
    // path:path.resolve(__dirname, 'dist'),这是一个绝对路径
    
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 正则表达式

        // \.是转义
        // $表示结尾
        // ^开始
        // 匹配所有的css文件
        // test:做匹配
        use: [ 'style-loader','css-loader' ]
        // use:做应用
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // webpack在读取多个loader时，是从右向左读的
      }
    ]
  }
}