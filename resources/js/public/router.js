//vue import from window 
window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ExampleCompoent from '../components/ExampleComponent'
// const test3 = { template: '<div>this is test three</div>' }
const test4 = { template: '<div>this is test four</div>' }



const router = new VueRouter({
  mode: 'history',

  routes :[
  	{ path: '/test3', component: ExampleCompoent },
  	{ path: '/test4', component: test4 }
  ]
})


export default router ;