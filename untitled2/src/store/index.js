import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        creditCity:'',
    },

    mutations :{
        "SET_CITY":function (state,city) {
            state.creditCity = city;
        },
    },

    getters:{
        "GET_CITY":function (state) {
            return state.creditCity
        }
    },

    actions:{
        "SET_CITY":function ({commit},city) {
            console.log('公共状态',city);
            commit("SET_CITY",city)
        }
    }
});
export default store;