<template>
  <div class="inline-flex flex-col space-y-9 items-center justify-end w-96 px-4 pt-12 pb-20 bg-gradient-to-b from-indigo-600 to-indigo-800">
    <div class="inline-flex items-center">
        <img class="h-12 w-auto pr-2" src="https://tailwindui.com/img/logos/workflow-mark-white.svg">
        <p class="text-white font-normal text-3xl"><span class="font-extrabold">kale</span>capital</p>
    </div>
    <div class="flex flex-col space-y-8 items-start justify-start w-full px-8 py-12 bg-white shadow rounded-3xl">
 
      <div class="flex flex-col space-y-6 items-start justify-start w-full">
          <div class="flex flex-col space-y-4 items-start justify-start w-full">
              <div class="flex flex-col space-y-2 items-start justify-start w-full">
                  <div class="flex flex-col space-y-2 items-start justify-start w-full">
                      <p class="w-full text-3xl font-extrabold leading-9 text-indigo-600">Iniciar Sesión</p>
                  </div>
                  <p class="w-full text-lg leading-normal text-gray-500">Entra a tu panel de inversor de Kale.</p>
              </div>
          </div>
      </div>


      <div class="flex flex-col space-y-6 items-start justify-start w-full mt-9">
        <div class="flex flex-col space-y-4 items-start justify-start w-full">
          <div class="flex flex-col space-y-1 items-start justify-start w-full">
            <p class="text-sm font-medium leading-tight text-gray-700">Email</p>
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

          <div class="flex flex-col space-y-2 items-start justify-start w-full">
            <div class="inline-flex space-x-2 items-center justify-start">
                <input id="remember-me" name="remember-me" type="checkbox" v-model="user.rememberMe" @change="onChangeRememberMe" class="w-4 h-4 rounded-full"/>
                <p class="text-sm font-medium leading-tight text-gray-500">Recuérdame</p>
            </div>
          </div>

          <div class="inline-flex space-x-6 items-start justify-start w-72 p-4 bg-red-50 rounded-md" v-show="seeError.error">
            <div class="email-error-left w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-400 text-center text-sm pb-1">x</div>
            <div class="inline-flex flex-col space-y-2 items-start justify-start flex-1">
                <p class="w-full text-sm font-medium leading-tight text-red-800" v-html="seeError.message"></p>
            </div>
          </div>

        </div>

        <div class="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 shadow rounded-md" :class="[(disabledLogin)? 'pointer-events-none' : 'pointer-events-auto']" @click="logIn">
            <p class="text-base font-medium leading-normal text-white">Iniciar Sesión</p>
        </div>
        <a class="w-full text-sm leading-tight font-medium leading-5 text-indigo-600 text-center" href="/recover-pwd">¿Has olvidado tu contraseña?</a>


      </div>

    
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import User from '@/entities/user'
//import router from '@/router'
import { validateEmail, validatePassword } from '@/tools/validations'
import { validateUser } from '@/services/user'


export default {
  name: 'Login',
  setup() {
    const user = new User();
    const hasError = ref({error: false, message: '', type: ''});
    const seeError = ref({error: false, message: ''});
    const numTimesWrong = ref(0);
    const disabledLogin = (false);
    return { user, hasError, seeError, numTimesWrong, disabledLogin }
  },
  methods: {
    onChangeEmail() {
        this.hasError = validateEmail(this.user.email);
        this.seeError = {error: false, message: ''};
    },

    onChangePassword() {
        this.hasError = validatePassword(this.user.password);
        this.seeError = {error: false, message: ''};
    },

    onChangeRememberMe() {
        // TODO: SAVE REMEMBER ME
    },

    validateUser() {
      this.hasError = {error: false, message: '', type: ''}
      const err = validateUser(/*this.user*/)
      this.seeError = {error: err.error, message: err.message};
    },

    logIn() {
      if (!this.disabledLogin) {
        this.onChangeEmail();
        if (!this.hasError.error && (this.hasError.type === 'email' || this.hasError.type === 'string')) {
          this.onChangePassword();
          if (!this.hasError.error && (this.hasError.type === 'password' || this.hasError.type === 'string')) {
            this.validateUser();
            if (this.seeError.error) {
              this.numTimesWrong++;
              if (this.numTimesWrong === 3) {
                this.seeError = {error: true, message: 'Te has equivocado tres veces en tu email y/o contraseña.<ul style="list-style:disc !important; padding-left: 28px;"><li><u>Recupera tu contraseña</u> si no te acuerdas.</li><li>Si sigues teniendo problemas, <u>contáctanos</u>.</li></ul>'};
              } else if (this.numTimesWrong > 3) {
                this.disabledLogin = true;
                this.hasError = {error: false, message: '', type: ''}
                this.seeError = {error: false, message: ''}
              }
            }
          } 
        }
      }      
    }

  }
}
</script>


<style lang="scss" scoped>
  .email-error {
    position: absolute;
    right: 53px;
  }

  .email-error-left {
    position: absolute;
    left: 60px;
  }
</style>