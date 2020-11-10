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
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {
  console.log(results);
})