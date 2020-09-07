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
}