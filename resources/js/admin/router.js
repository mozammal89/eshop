//vue import from window 

window.Vue = require('vue');

import { join } from 'lodash';
//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDeshboard from '../components/admin/AdminDeshboard'
import AdminLogin from '../components/admin/auth/AdminLogin'

const router = new VueRouter({
  mode: 'history',

  routes: [
    { path: '/admin', component: AdminDeshboard, name: 'AdminDeshboard' },
    { path: '/admin/login', component: AdminLogin, name: 'AdminLogin' },
  ]
})



router.beforeEach((to, from, next) => {
  let isAuthenticated = '';
  let authUser = localStorage.getItem('AdminLogidIn') ? JSON.parse(localStorage.getItem('AdminLogidIn')) : false;

  if(authUser){
    isAuthenticated = authUser.id && authUser.email ? true : false;
  }else{
    isAuthenticated = false;
  }

  if (to.name !== 'AdminLogin' && !isAuthenticated) next({ name: 'AdminLogin' })
  else if (to.name === 'AdminLogin' && isAuthenticated){
    next({ name: 'AdminDeshboard' });
  }
  else next()
})

export default router;