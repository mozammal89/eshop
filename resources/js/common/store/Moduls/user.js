import Axios from "axios";
import { result } from "lodash";

export const user = {
    namespaced: true,

    state: {
        user: {}
    },

    getters: {
        getAuthUser(state){
            return state.user;
        }

    },

    actions: {
        getUser(context){
            // context.commit('getUser')
            Axios.get('/user')
            .then((result) => {
                context.commit('getUser',result.data)
            }).catch((err) => {

            })
        },

        userLogout(context){
            Axios.post('/logout')
            .then((result) => {
                context.commit('getUser',result.data)
            }).catch((err)=>{

            })
        }
    },

    mutations: {
        getUser(state,payload){
            return state.user = payload;
        }
    }
}