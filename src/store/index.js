import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        count: (state) => state.count
    },
    mutations: {
        SET_COUNT(state, count) {
            state.count = count
        }
    },
    actions: {

    },
})
