import {INCREMENT} from "./mutations-types";
export default {
  // 方法
[INCREMENT](state) {
  state.counter++
},
decrement(state) {
  state.counter--
},
// incrementCount(state, count) {
//   state.counter += count
// },
incrementCount(state, payload) {
  state.counter += payload.count
},
addStudent(state, stu) {
  state.students.push(stu)
},
updateInfo(state) {
  state.info.name = 'hahaha'
  // state.info['address'] = 'biu'
  // 非响应式

  // Vue.set(state.info, 'address', 'biu')
  // 响应式

  // delete state.info.age
  // 非响应式

  // Vue.delete(state.info, 'age')
  // 响应式
}
}
