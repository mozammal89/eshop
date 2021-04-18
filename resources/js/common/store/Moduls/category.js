import Axios from "axios";
import { result } from "lodash";

export const category = {
    namespaced: true,

    state: {
        categories: [],
    },

    getters: {
        categoryList(state){
          return state.categories;
        }
        
    },

    actions: {
        categoryList(context){
            Axios.get('/admin/category')
            .then((res)=>{
                // console.log(res.data.categories);
                context.commit('categoryList',res.data.categories)
            }).catch((err)=>{

            })
            
        }
    },

    mutations: {
        categoryList(state,payload){
            return state.categories = payload;
        }
    }
}