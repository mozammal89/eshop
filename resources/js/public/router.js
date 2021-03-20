//vue import from window 
window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/public/home'

const router = new VueRouter({
  mode: 'history',

  routes :[
  	{ path: '/public', component: Home },
  ]
})


export default router ;