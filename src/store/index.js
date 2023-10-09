import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        query: ''
    },
    getters: {
        count: (state) => state.count,
        query: (state) => state.query
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
        },
        SET_QUERY(state, query) {
            state.query = query
        }
    },
    actions: {

    },
})
