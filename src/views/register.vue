<template>
    <div :class="[!this.submittedPwd ? 'bg-white' : 'bg-indigo-500']">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24" v-if="!this.submittedPwd">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-4xl font-extrabold leading-10 text-indigo-600">¡Hola!</h2>
                    <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Has sido invitado a <br> Kale Capital</h2>
                    <p class="mt-2 text-lg font-normal leading-6 text-gray-500">Tu fondo de inversión en criptomonedas que genera ingresos pasivos.</p>
                    <p class="mt-3 text-sm font-normal leading-5 text-gray-500"> Código de invitación <span class="text-sm font-medium leading-5 text-indigo-600">nf-1991</span></p>
                </div>

                <div class="mt-9">
                    <div>
                        <div>
                            <div class="inline-flex w-full">
                                <a v-show="this.submittedEmail" class="flex space-x-2 items-center justify-center py-1.5 pl-2 pr-2.5 shadow" href="/register">
                                    <img class="w-4 h-4 rounded-full" src="https://via.placeholder.com/16x16"/>
                                </a>
                                <p class="text-xl font-bold leading-7 text-gray-900">Regístrate</p>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class="space-y-6">
                                <div v-if="!this.submittedEmail">
                                    <label for="email" class="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" v-model="user.email" placeholder="email@example.com" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                </div>
                                <div v-else-if="this.submittedEmail" class="space-y-6">
                                    <div>
                                        <label for="password" class="block text-sm font-medium text-gray-700">
                                            Contraseña
                                        </label>
                                        <div class="mt-1">
                                            <input id="password" name="password" type="password" v-model="user.password" placeholder="Ingresa tu contraseña" autocomplete="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>
                                    <div>
                                        <label for="repeatedPwd" class="block text-sm font-medium text-gray-700">
                                            Repite tu contraseña
                                        </label>
                                        <div class="mt-1">
                                            <input id="repeatedPwd" name="repeatedPwd" type="password" v-model="user.repeatedPwd" placeholder="Repite tu contraseña" autocomplete="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" @click="submitEMail" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Continuar
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p class="mt-6 text-sm font-medium leading-5 text-gray-600 text-center"> ¿Ya tienes cuenta? <a href="/login" class="text-sm font-medium leading-5 text-indigo-600">Haz login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="inline-flex flex-col space-y-6 items-center justify-end w-96 pt-32 pb-52">
            <p class="w-full text-2xl font-extrabold leading-8 text-center text-white">{{(!seeLastInfo)? '¡Eliminamos el riesgo y la volatidad de las criptomonedas!' : '¡Elige el plan que estés más <br/> cómodo y gana!'}}</p>
            <p class="w-80 text-base leading-6 font-normal text-center text-white">{{(!seeLastInfo)? 'Con Kale Capital inviertes Euros y recibes Euros y tienes las ganancias como si fueran criptomonedas.<br/>Deja con nosotros toda la preocupación y riesgos, nos aseguramos que nunca pierdas.' : 'Kale Capital te trae planes mejor que cualquier banco y con un tiempo de permanencia mucho más reducido.'}}</p>
            <div class="inline-flex items-center justify-center w-32 px-6 py-3 bg-indigo-600 shadow rounded-md" @click="continueInfo">
                <p class="text-base font-medium leading-normal text-white">Continuar</p>
            </div>
        </div>
    </div>
</template>

<script>
//import { useState } from '@/store/helpers'
//import { computed } from 'vue'
//import { useStore } from 'vuex'
import { ref } from 'vue'
import User from '@/entities/user'
import router from '@/router'

export default {
  name: 'Register',
  setup() {
      const user = new User();
      const submittedEmail = ref(false);
      const submittedPwd = ref(false);
      const seeLastInfo = ref(false);
    //const email = useStore().state.register.email
    //const submitEMail = () => useStore().state.register.email

   

    //const email = useState('email')

   
      

//       const store = useStore()
//    const email = computed(() => store.state.email)
      //const store = useStore()
    //const email = computed(() => store.state.email)
    //console.log(email)

   // const { email } = useState(['email'])
    
    //console.log(useGetters(['getEmail']))

   // const { setCounter } = useMutations(['setCounter'])
    //const inc = () => setCounter(['setCounter'])


    /*const { setEmail } = useMutations(['setEmail'])
    const continue = () => setEmail(['setEmail'])

   */

    return { user, submittedEmail, submittedPwd, seeLastInfo }
  },
  methods: {
    submitEMail () {
        // TODO: VALIDATE EMAIL
        if (!this.user.email) {
            this.submittedEmail = false;
        } else {
            this.submittedEmail = true;
        }

        if (!this.user.password) {
            this.submittedPwd = false;
        } else {
            this.submittedPwd = true;
        }

    }, 
    continueInfo() {
        if (!this.seeLastInfo) {
            this.seeLastInfo = true;
        } else {
            router.push({path: '/home'})
        }
    }
  }
}
</script>


<style lang="scss">
</style>