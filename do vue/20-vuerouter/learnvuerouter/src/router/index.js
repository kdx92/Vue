import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import index from '../components/index'
import about from '../components/about'

Vue.use(Router)

// 一个映射关系就是一个对象
const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/about',
    component: about
  }
]
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router