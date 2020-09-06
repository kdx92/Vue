var name = 'Evan'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// // 1.导出方式一
// export {
//   flag,sum
// }

// // 2.导出方式二
export var num1 = 1000;

// // 3.导出函数、类
// export function mul(num1, num2) {
//   return num1 + num2
// }
// // ES6写法中的类
// export class Person {
//   run() {
//     console.log('run run run')
//   }
// }

// // 4.export default
// const address = 'K'
// export default address
// // 只能有一个

export default function (argument) {
  console.log(argument);
}