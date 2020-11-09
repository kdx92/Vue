import Vue from 'vue'
// import { delete } from 'vue/types/umd'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


// 1.安装插件
Vue.use(Vuex)


// 2.创建对象


// state放原文件中，其他抽离
const state = {
  
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
  
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // 在这里继续定义模块
    a: moduleA
  }
})

// 3.导出store独享
export default store

