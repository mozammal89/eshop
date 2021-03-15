require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const appadmin = new Vue({
    el: '#appadmin',
    data:{
    	test:'This is admin vue'
    }
});