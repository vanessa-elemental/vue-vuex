
 /** REGISTER **/


export default {
    namespaced: true,

    state: {
        email: '',
        emailIsCorrect: false
    },

    getters: {
        getEmail(state) {
            return state.email
        }
    },

    mutations: {
        setEmail(state, value) {
            state.email = value
            alert('dsfsdfsdf')
        },
        emailIsCorrect(state, value) {
            state.emailIsCorrect = value
        },
        submitEmail(state) {
            console.log(state)
            console.log('dsfsdfsdf')
        }
    },

    actions: {
        /*sendEmail: ({ commit }) => {
            if (state.email === '') {
                emailIsCorrect(state.emailIsCorrect, false)
                console.log('NOT SEND EMAIL')
            } else {
                emailIsCorrect(state.emailIsCorrect, true)
                commit('setEmail')
                console.log('SEND EMAIL')
            }
        },*/
    }
}