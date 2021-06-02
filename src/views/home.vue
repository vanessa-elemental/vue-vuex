<template>
<div>
        <div>WELCOME TO KALE CAPITAL !!!</div>
        <h5 class="mt-5">{{counter}} x 2 = {{times2}} </h5>
        <button @click="inc">Increment</button>
        <button @click="asynInc">Increment asínc</button>
  </div>
</template>

<script>
import { useState, useGetters, useMutations, useActions } from '@/store/helpers'

export default {
  name: 'Home',
  setup() {
    const { counter } = useState(['counter'])
    const { times2 } = useGetters(['times2'])
    const { setCounter } = useMutations(['setCounter'])
    const inc = () => setCounter(['setCounter'])

   const { setCount } = useActions(['setCount'])
   const asynInc = () => setCount(['setCount'])

    return { inc, counter, times2, asynInc }
  }
}
</script>


<style lang="scss">
</style>