//vue import from window 

window.Vue = require('vue');

import { join } from 'lodash';
//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDeshboard from '../components/admin/AdminDeshboard'
import AdminLogin from '../components/admin/auth/AdminLogin'
import CategoryList from '../components/admin/category/CategoryList'
import BrandList from '../components/admin/brand/BrandList'
import ProductList from '../components/admin/product/ProductList'
import CustomerList from '../components/admin/customer/CustomerList'
import OrderList from '../components/admin/order/OrderList'

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',

  routes: [
    { path: '/admin', component: AdminDeshboard, name: 'AdminDeshboard' },
    { path: '/admin/login', component: AdminLogin, name: 'AdminLogin' },
    { path: '/admin/categories', component: CategoryList, name: 'CategoryList' },
    { path: '/admin/brands', component: BrandList, name: 'BrandList' },
    { path: '/admin/products', component: ProductList, name: 'ProductList' },
    { path: '/admin/customers', component: CustomerList, name: 'CustomerList' },
    { path: '/admin/orders', component: OrderList, name: 'OrderList' },
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