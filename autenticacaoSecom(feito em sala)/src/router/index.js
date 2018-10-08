import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import login from '@/components/login'
import register from '@/components/register'
import store from '../store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter (to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
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
