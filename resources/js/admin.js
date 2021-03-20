require('./bootstrap');


window.Vue = require('vue');

//vue route import
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './admin/router'



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);


import Vuex from 'vuex'

Vue.use(Vuex)

// this is vuex instance 
const store = new Vuex.Store({
    state:{
        test: "This is test",
        abc: ''
    },

    getters:{

    },

    actions:{

    },

    mutations:{

    }
  })

//   vuex instance end 



const appadmin = new Vue({
    el: '#appadmin',
    router,
    store,
    data:{
    }
});