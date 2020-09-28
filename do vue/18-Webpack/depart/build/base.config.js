// 专用来写Webpack的相关配置，名字固定
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// 引用一个包，其中是path
// 一旦需要在项目中使用node先关的东西，首先使用npm init
module.exports = {
  entry: './src/main.js',
  output: {
    path:path.resolve(__dirname, '../dist'),
    // 动态的获取路径
    // 使用node的语法
    // path模块中有一个函数resolve，可以对路径进行拼接
    // __dirname是一个全局变量，里面是当前这个config.js文件的路径
    // path:path.resolve(__dirname, 'dist'),这是一个绝对路径
    
    filename: 'bundle.js'
    // publicPath: 'dist/'
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
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 900000
      //         // 文件以kb为单位乘以1024，大于那个图片文件进行测试
      //         // 不要加,
      //         // 当加载的图片，小于limit时，会将图片编译成base64字符串形式 并用url-loader
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.js$/,
        // 排除以下文件，在将ES6转换为ES5时，只转换src中的文佳，其他的因为不会被打包，所以不再转换
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
       }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  
  },
  resolve: {
    // alias:别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归K所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}