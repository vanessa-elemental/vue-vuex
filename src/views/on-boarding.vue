<template>
    <div class="inline-flex flex-col space-y-6 items-center justify-end w-96 pt-32 pb-52 bg-indigo-500">
        <p class="w-full text-2xl font-extrabold leading-loose text-center text-white" v-html="[!seeLastInfo? '¡Eliminamos el riesgo<br/>y la volatidad de las criptomonedas!' : '¡Elige el plan que estés más cómodo y gana']"></p>
        <p class="w-80 text-base leading-normal text-center text-white" v-html="[!seeLastInfo? 'Con Kale Capital inviertes Euros y recibes Euros y tienes las ganancias como si fueran criptomonedas.<br/>Deja con nosotros toda la preocupación y riesgos, nos aseguramos que nunca pierdas.' : 'Kale Capital te trae planes mejor que cualquier banco y con un tiempo de permanencia mucho más reducido.']"></p>
        <div class="inline-flex items-center justify-center w-32 px-6 py-3 bg-indigo-600 shadow rounded-md" @click="clickContinue">
            <p class="text-base font-medium leading-normal text-white">Continuar</p>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
  name: 'OnBoarding',
  setup() {
      const seeLastInfo = ref(false);
      return { seeLastInfo } 
  },
  methods: {
    clickContinue() {
        (!this.seeLastInfo) ? this.seeLastInfo = true : router.push({path: '/home'});
    }
  }
}
</script>


<style lang="scss">
</style>