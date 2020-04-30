import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '../views/Home'
import Cart from '../views/Cart'
import Category from '../views/Category'
import Detail from '../views/Detail'
import Hello from '../views/Hello'
import Profile from '../views/Profile'
import City from '../views/City'
import Search from '../views/Search'
import Register from '../views/Register'
import Login from '../views/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: '',
          redirect: '/hello/home'
        }
      ]
    },
    { path: '/detail', component: Detail },
    { path: '/city', component: City },
    { path: '/search', component: Search },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/', redirect: '/hello' }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
