import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
// export default new Router({
//   // routes: [
//   //   {
//   //     path: '/',
//   //     name: 'HelloWorld',
//   //     component: HelloWorld
//   //   }
//   // ]
// })
