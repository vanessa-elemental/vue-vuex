<template>
    <div v-if="!seeOnBoarding" class="inline-flex flex-col space-y-9 items-center justify-end w-96 px-4 pt-12 pb-20 bg-gradient-to-b from-indigo-600 to-indigo-800">
        <div class="inline-flex items-center">
            <img class="h-12 w-auto pr-2" src="https://tailwindui.com/img/logos/workflow-mark-white.svg">
            <p class="text-white font-normal text-3xl"><span class="font-extrabold">kale</span>capital</p>
        </div>
        <div class="flex flex-col space-y-8 items-start justify-start w-full px-8 py-12 bg-white shadow rounded-3xl">
            <div v-if="!submittedEmail">
                <div class="flex flex-col space-y-6 items-start justify-start w-full">
                    <div class="flex flex-col space-y-4 items-start justify-start w-full">
                        <div class="flex flex-col space-y-2 items-start justify-start w-full">
                            <div class="flex flex-col space-y-2 items-start justify-start w-full">
                                <p class="w-full text-4xl font-extrabold leading-10 text-indigo-600">¡Hola!</p>
                                <p class="w-full text-3xl font-extrabold leading-9 text-gray-800">Has sido invitado a<br/>Kale Capital</p>
                            </div>
                            <p class="w-full text-lg leading-normal text-gray-500">Tu fondo de inversión en criptomonedas que te genera ingresos pasivos.</p>
                        </div>
                        <div class="inline-flex space-x-1 items-center justify-start">
                            <p class="text-sm leading-tight text-gray-600">Codigo de invitación </p>
                            <p class="text-sm font-medium leading-tight text-indigo-600">nf-1991</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-6 items-start justify-start w-full mt-9">
                    <div class="flex flex-col space-y-4 items-start justify-start w-full">
                        <p class="w-full text-lg font-bold leading-7 text-gray-800">Regístrate con tu email</p>
                        <div class="flex flex-col space-y-2 items-start justify-start w-full">
                            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                                <div class="inline-flex items-center justify-between w-full">
                                    <input v-if="hasError.error && (hasError.type === 'email' || hasError.type === 'string' || hasError.type === 'user')"
                                    id="email" name="email" type="email" v-model="user.email" @change="onChangeEmail" placeholder="email@example.com" required class="text-base leading-normal text-red-900 appearance-none block w-full px-3 py-2 bg-white shadow border rounded-md border border-red-300 placeholder-red-900 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                                     />
                                    <input v-else id="email" name="email" type="email" v-model="user.email" @change="onChangeEmail" placeholder="email@example.com" required class="text-base leading-normal text-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                    <div v-show="hasError.error && (hasError.type === 'email' || hasError.type === 'string' || hasError.type === 'user')" class="email-error w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500 text-center">!</div>
                                </div>

                                 <div v-show="hasError.error && (hasError.type === 'email' || hasError.type === 'string' || hasError.type === 'user')" class="mt-1">
                                    <div class="text-sm font-medium leading-tight text-red-500" v-html="hasError.message"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2 items-start justify-start w-full">
                            <div class="inline-flex space-x-2 items-center justify-start">
                                <input id="terms-and-conditions" name="terms-and-conditions" type="checkbox" v-model="checkTermsConditions" @change="onChangeTermsConditions" required class="w-4 h-4 rounded-full"/>
                                <p class="text-sm font-medium leading-tight text-gray-500">Acepto los <a class="text-indigo-600" href="/terms-and-conditions">términos y condiciones</a></p>
                            </div>
                            <div v-show="hasError.error && hasError.type === 'checkbox'" class="mt-1">
                                <div class="w-full text-sm font-medium leading-tight text-red-500" v-html="hasError.message"></div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 shadow rounded-md" @click="clickContinue">
                        <p class="text-base font-medium leading-normal text-white">Continuar</p>
                    </div>
                    <p class="w-full text-sm leading-tight text-center font-medium text-gray-500">¿Ya tienes cuenta? <a href="/login" class="text-sm font-medium leading-5 text-indigo-600">Haz login</a></p>
                </div>
            </div>

            <div v-else>
                <div class="flex flex-col space-y-6 items-start justify-start w-full">
                    <div class="flex flex-col space-y-6 items-start justify-start w-full">
                        <div class="inline-flex space-x-2 items-start justify-start w-full">
                            <div class="flex space-x-2 items-center justify-center py-1.5 pl-2 pr-2.5 bg-white bg-opacity-0" @click="goBack">
                                <img class="flex-1 h-full rounded-full" src="@/assets/icons/arrow-left.png"/>
                            </div>
                            <p class="text-xl font-bold leading-7 text-gray-900">Escribe tu contraseña</p>
                        </div>
                        <p class="w-full text-lg leading-normal text-gray-500">Una contraseña fuerte tiene letras, números y símbolos.</p>
                        <div class="flex flex-col space-y-4 items-start justify-start w-full">

                            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                                <p class="text-sm font-medium leading-tight text-gray-700">Contraseña</p>
                                <div class="inline-flex items-center justify-between w-full">
                                    <input v-if="hasError.error && (hasError.type === 'password' || hasError.type === 'string')"
                                    id="password" name="password" type="password" v-model="user.password" @change="onChangePassword" placeholder="Ingresa tu contraseña" required class="text-base leading-normal text-red-900 appearance-none block w-full px-3 py-2 bg-white shadow border rounded-md border border-red-300 placeholder-red-900 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                                     />
                                    <input v-else id="password" name="password" type="password" v-model="user.password" @change="onChangePassword" placeholder="Ingresa tu contraseña" required class="text-base leading-normal text-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                    <div v-show="hasError.error && (hasError.type === 'password' || hasError.type === 'string')" class="email-error w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500 text-center">!</div>
                                </div>

                                 <div v-show="hasError.error && (hasError.type === 'password' || hasError.type === 'string')" class="mt-1">
                                    <div class="text-sm font-medium leading-tight text-red-500" v-html="hasError.message"></div>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                                <p class="text-sm font-medium leading-tight text-gray-700">Repite tu contraseña</p>
                                <div class="inline-flex items-center justify-between w-full">
                                    <input v-if="hasError.error && hasError.type === 'repeated-pwd'"
                                    id="repeated-pwd" name="repeated-pwd" type="password" v-model="user.repeatedPwd" @change="onChangeRepeatedPwd" placeholder="Repite tu contraseña" required class="text-base leading-normal text-red-900 appearance-none block w-full px-3 py-2 bg-white shadow border rounded-md border border-red-300 placeholder-red-900 focus:outline-none focus:ring-red-300 focus:border-red-300 sm:text-sm"
                                     />
                                    <input v-else id="repeated-pwd" name="repeated-pwd" type="password" v-model="user.repeatedPwd" @change="onChangeRepeatedPwd" placeholder="Repite tu contraseña" required class="text-base leading-normal text-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                    <div v-show="hasError.error && hasError.type === 'repeated-pwd'" class="email-error w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500 text-center">!</div>
                                </div>

                                 <div v-show="hasError.error && hasError.type === 'repeated-pwd'" class="mt-1">
                                    <div class="text-sm font-medium leading-tight text-red-500" v-html="hasError.message"></div>
                                </div>
                            </div>

                        </div>
                        <div class="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 shadow rounded-md" @click="submitRegister">
                            <p class="text-base font-medium leading-normal text-white">Registrar</p>
                        </div>
                        <p class="w-full text-sm leading-tight text-center font-medium text-gray-500">¿Ya tienes cuenta? <a href="/login" class="text-sm font-medium leading-5 text-indigo-600">Haz login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <OnBoarding />
    </div>
</template>

<script>
//import { useStore } from 'vuex'
import { ref } from 'vue'
import User from '@/entities/user'
import router from '@/router'
import { validateEmail, validateMatchedPasswords, validatePassword, validateCheckbox } from '@/tools/validations'
import { validateUser } from '@/services/register'
import OnBoarding from '@/views/on-boarding.vue'

export default {
  name: 'Register',
  components: { OnBoarding },
  setup() {
    const user = new User();
    const submittedEmail = ref(false);
    const submittedPwd = ref(false);
    const checkTermsConditions = ref(false);
    const seeOnBoarding = ref(false);
    const hasError = ref({error: false, message: '', type: ''});
    //const email = useStore().state.register.email
    return { user, submittedEmail, submittedPwd, hasError, checkTermsConditions, seeOnBoarding }
  },
  methods: {
    submitRegister () {
        if (!this.submittedPwd) {
            this.onChangePassword();
            if (this.hasError.error && (this.hasError.type === 'password' || this.hasError.type === 'string')) {
                this.submittedPwd = false;
            } else {
                this.onChangeRepeatedPwd();
                console.log(this.hasError)
                if (this.hasError.error && this.hasError.type === 'repeated-pwd') {
                    this.submittedPwd = false;
                } else {
                    this.submittedPwd = true;
                    this.hasError = {error: false, message: '', type: ''}
                    this.seeOnBoarding = true;
                }
            }
        }
    },

    onChangeEmail() {
        this.hasError = validateEmail(this.user.email);
    },

    onChangePassword() {
        this.hasError = validatePassword(this.user.password);
    },

    onChangeRepeatedPwd() {
        this.hasError = validateMatchedPasswords(this.user.password, this.user.repeatedPwd);
    }, 

    validateUser() {
        this.hasError = validateUser(/*this.user*/);
    },

    onChangeTermsConditions() {
        this.hasError = validateCheckbox(this.checkTermsConditions, 'Tienes que aceptar los términos y condiciones.');
    },

    clickContinue() {
        this.onChangeEmail();
        if (this.hasError.error && (this.hasError.type === 'email' || this.hasError.type === 'string')) {
            this.submittedEmail = false;
        } else {
            this.validateUser();
            if (this.hasError.error && this.hasError.type === 'user') {
                this.submittedEmail = false;
            } else {
                this.onChangeTermsConditions();
                if (this.hasError.error && this.hasError.type === 'checkbox') {
                    this.submittedEmail = false;
                } else {
                    this.submittedEmail = true;
                    this.hasError = {error: false, message: '', type: ''}
                }
            } 
        }
    },

    goBack() {
        this.submittedPwd = false;
        this.submittedEmail = false;
        this.seeOnBoarding = false;
        router.push({path: '/register'})
    }
  }
}
</script>


<style lang="scss" scoped>
    .email-error {
        position: absolute;
        right: 53px;
    }
</style>