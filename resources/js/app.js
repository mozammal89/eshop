require('./bootstrap');

//vue import from window 
window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './public/router'



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

import {store} from './common/store/store'

import libary from './common/libary'


const app = new Vue({
    el: '#app',
    router,
    store,
    data:{
    	test: 'this is public vue'
    }
});