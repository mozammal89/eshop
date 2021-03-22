import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

import {user} from './Moduls/user'

export const store = new Vuex.Store({
    modules: {
        username: user
    }
  })