import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import welcome from '@/components/welcome'
import register from '@/components/register'
import index from '@/components/index'
import myself from '@/components/myself'
import addnote from '@/components/addnote'

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
    },
    {
      path: '/index',
      name: 'index',
      component: index  
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself  
    },
    {
      path: '/addnote',
      name: 'addnote',
      component: addnote  
    }
  ]
})
