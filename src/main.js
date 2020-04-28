import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

import './assets/styles/base.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  // 选项配置
  preLoad: 1.3, // 预加载高度，图片在这个配置的高度内的化会自动去加载
  error: 'dist/error.png', // 当加载真实图片出错时，显示的替代图片
  loading: require('./assets/img/home/loading.gif'), // 加载真实图片地址之前的一个替代图片
  attempt: 1 // 尝试加载真实图片的次数
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
