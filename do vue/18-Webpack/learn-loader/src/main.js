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