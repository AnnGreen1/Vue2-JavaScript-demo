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
        },
        DOUBLE_COUNT(state) {
            state.count = state.count * 2;
        },
        MULTIPLY_COUNT(state, times) {
            state.count = state.count * times;
        }
    },
    actions: {

    },
})
