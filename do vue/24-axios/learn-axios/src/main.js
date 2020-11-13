import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   //默认url获得get请求
//   // url: 'http://123.207.32.32:8000/home/multidata'
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   // method: 'get'
// }).then(res => {
//   console.log(res);
// })


// 2.axios发送并发请求
// （使用全局的axios和对应的配置在进行网络请求）
// axios.defaults.baseURL ='http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
// })

// 4.创建对应的axios的实例
// 实例中传入config
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata',

// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 1000,
//   //headers: {}
// })

// 5.封装request模块
import { request } from './network/request';

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// },err => {
//   console.log(err);

// })

// request({
//  baseConfig: {

//  },
//  success: function (res) {

//  },
//  failure: function (err) {

//  }

// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})