<template>
    <div class="inline-flex flex-col space-y-9 items-center justify-end w-96 px-4 pt-12 pb-20 bg-gradient-to-b from-indigo-600 to-indigo-800">
        <div class="inline-flex items-center">
            <img class="h-12 w-auto pr-2" src="https://tailwindui.com/img/logos/workflow-mark-white.svg">
            <p class="text-white font-normal text-3xl"><span class="font-extrabold">kale</span>capital</p>
        </div>
        <div class="flex flex-col space-y-8 items-start justify-start w-full px-8 py-12 bg-white shadow rounded-3xl">
            <div>
                <div class="flex flex-col space-y-6 items-start justify-start w-full">
                    <div class="flex flex-col space-y-6 items-start justify-start w-full">
                        <div class="inline-flex space-x-2 items-start justify-start w-full">
                            <div class="flex space-x-2 items-center justify-center py-1.5 pl-2 pr-2.5 bg-white bg-opacity-0" @click="goBack">
                                <img class="flex-1 h-full rounded-full" src="@/assets/icons/arrow-left.png"/>
                            </div>
                            <p class="text-xl font-bold leading-7 text-gray-900">Recuperar tu contraseña</p>
                        </div>
                        <p class="w-full text-lg leading-normal text-gray-500">Te enviaremos un email con un enlace para que puedas recuperar tu contraseña.</p>
                        <div class="flex flex-col space-y-4 items-start justify-start w-full">

                            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                                <p class="text-sm font-medium leading-tight text-gray-700">Tu email</p>
                                <div class="inline-flex items-center justify-between w-full custom-input-error">
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

                            <div class="inline-flex space-x-6 items-start justify-start w-72 p-4 bg-green-50 rounded-md" v-show="seeError.error">
                                <img class="email-error-left w-5 h-5" src="@/assets/icons/check-green.png"/>
                                <div class="inline-flex flex-col space-y-2 items-start justify-start flex-1">
                                    <p class="w-full text-sm font-medium leading-tight text-green-700" v-html="seeError.message"></p>
                                </div>
                            </div>
                        </div>
                        <div class="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 shadow rounded-md" @click="recoverPwd">
                            <p class="text-base font-medium leading-normal text-white">Recuperar Contraseña</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import User from '@/entities/user'
import router from '@/router'
import { validateEmail } from '@/tools/validations'
import { validateUser } from '@/services/user'

export default {
  name: 'Recover Password',
  setup() {
    const user = new User();
    const hasError = ref({error: false, message: '', type: ''});
    const seeError = ref({error: false, message: ''});
    return { user, hasError, seeError }
  },
  methods: {
    onChangeEmail() {
        this.hasError = validateEmail(this.user.email);
    },

    validateUser() {
      this.hasError = validateUser(/*this.user*/)
    },

    recoverPwd() {
        if (this.user.email) {
            this.seeError = {error: true, message: '<p class="text-green-800">Email de recuperación de contraseña enviado.</p><br/>Si este email existe en nuestra base de datos, lo deberías recibir en los próximos minutos. No te olvides de verificar tu caja de spam y, si sigues con problemas, <u>contáctanos</u>.'}
        }
    },

    goBack() {
        router.push({path: '/login'});
    }
  }
}
</script>


<style lang="scss" scoped>
    .email-error {
        position: absolute;
        right: 13px;
    }

    .custom-input-error {
        position: relative;
    }
</style>