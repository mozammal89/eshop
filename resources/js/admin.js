require('./bootstrap');

window.Vue = require('vue');


const appadmin = new Vue({
    el: '#appadmin',
    data:{
    	test:'This is admin vue'
    }
});