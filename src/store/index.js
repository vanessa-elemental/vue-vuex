import { createLogger, createStore } from 'vuex'

// Modules
/*const customers = {
    namespaced: true,
    state: {
        list: [],
        loading: false
    },
    mutations: {
        add(state, customer) {
            state.list.unshift(customer)
        },
        set(state, customers) {
            state.list = customers
        },
        setLoading(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        async get( { commit }) {
            commit('setLoading', true)
            const result = await fetch('https://rickandmortyapi.com/api/character')
            const json = await result.json
            commit('set', json)
            commit('setLoading', false)
        }
    }
}*/

export const store = createStore ({
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
    }
})