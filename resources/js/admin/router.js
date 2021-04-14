//vue import from window 

window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDeshboard from '../components/admin/AdminDeshboard'
import AdminLogin from '../components/admin/auth/AdminLogin'

const router = new VueRouter({
  mode: 'history',

  routes :[
  	{ path: '/admin', component: AdminDeshboard, name: 'AdminDeshboard' },
  	{ path: '/admin/login', component: AdminLogin, name: 'AdminLogin' },
  ]
})

export default router ;