require('./bootstrap');

//vue import from window 
window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './public/router'



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

const app = new Vue({
    el: '#app',
    router,
    data:{
    	test: 'this is public vue'
    }
});