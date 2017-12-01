import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from './main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'MainGame',
      component: Main
    },
    {
      path: '/', redirect: '/main'
    }
  ]
})
