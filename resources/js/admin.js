require('./bootstrap');


window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './admin/router'



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

const appadmin = new Vue({
    el: '#appadmin',
    router,
    data:{
    	test:'This is admin vue'
    }
});