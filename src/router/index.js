import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import welcome from '@/components/welcome'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/login',
      name: 'login',
      component: login      
    },
    {
      path: '/register',
      name: 'register',
      component: register  
    }
  ]
})
