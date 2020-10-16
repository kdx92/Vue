import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
// import index from '../components/index'
// import about from '../components/about'
// import user from '../components/user'

const index = () => import('../components/index')
const news = () => import ('../components/news')
const message = () => import('../components/message')
const about = () => import('../components/about')
const user = () => import('../components/user')
const profile = () => import('../components/profile')



Vue.use(VueRouter)

// 一个映射关系就是一个对象
const routes = [
  {
    path: '',
    redirect: '/index'
    //放前面，细节考虑
  },
  {
    path: '/index',
    component: index,
    // component: () => import('../components/index')
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: news
      },
      {
        path: 'message',
        component: message
      }
    ]
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/user/:userId',
    component: user
  },
  {
    path: '/profile',
    component: profile
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