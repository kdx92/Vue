// 使用CommonJS的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模块化规范
import {name, age} from "./js/info"
// 这里不用写.js
console.log(name);
console.log(age);

// 3.依赖css文件
// const require('./css/normal.css')
// css与js不同，不需要里面的变量，所以只需要写依赖
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.writeln('<p>fine</p>')

// 5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
// default不需要{}
// const App = {
//   template: `
//   <div>
//     <h2> {{ message }} </h2>
//     <button @click="btnClick">按钮</button>
//   </div>
//   `,
//   data() {
//     return {
//       message: 'Vue'
//     }
//   },
//   methods: {
//     btnClick() {

//     }
//   }
// }
new Vue({
  el: '#app',
  template: `<App/>`,
  components: {
    App
  }
})

// document.writeln('<button>按钮</button>')