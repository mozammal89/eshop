//vue import from window 
window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/public/home'
import UserLogin from '../components/public/auth/UserLogin'
import UserRegister from '../components/public/auth/UserRegister'
import UserDeshboard from '../components/public/user/UserDeshboard'

const router = new VueRouter({
  mode: 'history',

  routes: [
    { path: '/', component: Home, name: 'Home' },
    { 
      path: '/login', component: UserLogin, name: 'UserLogin' ,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false ;
        if (to.name == 'UserLogin' && isAuthenticated) next({ name: 'UserDeshboard' })
        else next();
      }
    },
    { path: '/register', component: UserRegister, name: 'UserRegister' },
    {
      path: '/user/deshboard', component: UserDeshboard, name: 'UserDeshboard',
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false ;
        if (to.name !== 'UserLogin' && !isAuthenticated) next({ name: 'UserLogin' })
        else next();
      }
    },
  ]
})


export default router;