import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)


// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 0,name: 'a', age: 11},
      {id: 1,name: 'b', age: 12},
      {id: 2,name: 'c', age: 14},
      {id: 3,name: 'c', age: 8},
      // id不能以0开头？？？？？？？？？



      

    ]
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more(state) {
      return state.students.filter(s => s.age > 9)
    },
    moreLength(state, getters) {
      // return state.students.filter(s => s.age > 9).length
      return getters.more.length
    },
    moreAge(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
     
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }

  },
  modules: {

  }
})

// 3.导出store独享
export default store

