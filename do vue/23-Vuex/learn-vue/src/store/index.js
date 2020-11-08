import Vue from 'vue'
// import { delete } from 'vue/types/umd'
import Vuex from 'vuex'

import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)


// 2.创建对象
const store = new Vuex.Store({
  state: {
    // 都会被加到响应式系统中
    counter: 1000,
    students: [
      {id: 0, name: 'a', age: 11},
      {id: 1, name: 'b', age: 12},
      {id: 2, name: 'c', age: 14},
      {id: 3, name: 'd', age: 8},
      // id不能以0开头？？？？？？？？？



      

    ],
    
    info: {
      // Dep -> [Watcher]
      name: 'xixixi',
      // Dep -> [Watcher]
      age: 33

      // Dep观察者模式
    }
  },
  mutations: {
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
  },
  actions: {
    // context相当于state，但是操作时还是需要经过mutations，
    // aUpdateInfo(context) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //   })
    // }

    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload);
    //   }, 1000)
    // }

    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     payload()
    //   }, 1000)
    // }


    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000)
    // }

// dispatch可以返回一个Promise
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('111111')
          
        }, 1000)
      })
    }
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

