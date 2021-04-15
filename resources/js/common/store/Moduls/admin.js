import Axios from "axios";
import { result } from "lodash";

export const admin = {
    namespaced: true,

    state: {
        admin: {

        }
    },

    getters: {
        getAuthUser(state){
            return state.admin;
        }
    },

    actions: {
        getUser(context){
            // context.commit('getUser')
            Axios.get('/admin/data')
            .then((result) => {
                context.commit('getUser',result.data)
            }).catch((err) => {

            })
        },
    },

    mutations: {
        getUser(state,payload){
            return state.admin = payload;
        }
    }
}