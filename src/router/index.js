import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cart from '../views/Cart'
import Category from '../views/Category'
import Detail from '../views/Detail'
import Hello from '../views/Hello'
import Profile from '../views/Profile'

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
    { path: '/', redirect: '/hello' }
  ]
})

export default router
