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

  routes :[
  	{ path: '/', component: Home, name:'Home' },
  	{ path: '/login', component: UserLogin, name:'UserLogin' },
  	{ path: '/register', component: UserRegister, name:'UserRegister' },
    { path: '/deshboard', component: UserDeshboard, name:'UserDeshboard' },
  ]
})


export default router ;