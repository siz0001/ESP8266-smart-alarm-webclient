import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        distance: null,
        ip: "35",
    },
    mutations: {
        changeDistance(state, payload) {
            state.distance = payload;
        },
        changeIp(state, payload) {
            state.ip = payload;
        },
    },
    actions: {
        getDistance({ commit }) {

            axios.get('http://192.168.1.200/inline')
                .then((res) => {
                    console.log(res.data)
                    commit('changeDistance', res.data);
                })
                .catch();
        },
    },
    modules: {}
})