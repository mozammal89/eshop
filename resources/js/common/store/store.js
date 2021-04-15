import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

import {user} from './Moduls/user'
import {admin} from './Moduls/admin'

export const store = new Vuex.Store({
    modules: {
        user: user,
        admin: admin
    }
  })