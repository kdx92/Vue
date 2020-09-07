// 使用CommonJS的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模块化规范
import {name, age} from "./info"
// 这里不用写.js
console.log(name);
console.log(age);