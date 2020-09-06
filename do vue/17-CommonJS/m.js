// // 1.导入的{}中定义的变量
// import {flag, sum} from "./a.js";

// if (flag) {
//   console.log('Vue');
//   console.log(sum(20, 30));
// }


// // 2.直接导入export定义的变量
// import {num1} from "./a.js";

// console.log(num1);

// // 3.导入export的function/class
// import {mul, Person} from  "./a.js";
// console.log(mul(30, 50));

// const p = new Person();
// p.run()


// // 4.导入export default中的内容
// import addr from "./a.js"
// // console.log(addr);
// // console.log(addr('haaaaa'));
// // 还打印了函数的返回值
// addr('xiiii');

// 5.统一全部导入
import * as allThings from './a.js'
console.log(allThings.num1)