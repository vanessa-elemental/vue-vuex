<template>
    <div class="inline-flex flex-col space-y-6 items-center justify-start w-96 px-4 pt-20 pb-96 bg-white">
        <p class="w-full text-3xl font-extrabold leading-9 text-center text-gray-900">Flujos</p>
        <div class="inline-flex items-center justify-center w-72 px-6 py-3 bg-indigo-600 shadow rounded-md" @click="goToRegister">
            <p class="text-base font-medium leading-normal text-white">Registro</p>
        </div>
        <div class="inline-flex items-center justify-center w-72 px-6 py-3 bg-indigo-600 shadow rounded-md" @click="goToLogin">
            <p class="text-base font-medium leading-normal text-white">Login</p>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Begin',
  methods: {
      goToRegister () {
          router.push({path: '/register'})
      },
      goToLogin () {
        router.push({path: '/login'})
      },
  }
}
</script>


<style lang="scss">
</style>