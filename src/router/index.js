import Vue from 'vue'
import Router from 'vue-router'

//首页
import Home from '@/components/index/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
