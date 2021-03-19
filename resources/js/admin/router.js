//vue import from window 

window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDeshboard from '../components/admin/AdminDeshboard'

const router = new VueRouter({
  mode: 'history',

  routes :[
  	{ path: '/admin', component: AdminDeshboard },
  ]
})

export default router ;