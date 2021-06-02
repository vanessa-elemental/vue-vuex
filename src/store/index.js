import { createLogger, createStore } from 'vuex'

// Modules
import Register from './modules/register'



export default createStore ({
    plugins: [createLogger()],
    state: {
        counter: 10
    },
    getters: {
        times2(state) {
            return state.counter * 2
        }
    },
    mutations: {
        setCounter(state) {
            state.counter = state.counter + 1
        }
    },
    actions: {
        setCount: ({ commit }) => commit('setCounter'),
    },
    modules: {
        register: Register
    }
})