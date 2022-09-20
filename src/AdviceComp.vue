<template>
  <div class="">
        <p>{{myAdvice.advice}}</p>
  </div>
</template>

<script>
import advice from '@/advice'
import { onMounted } from '@vue/runtime-core'

export default {
    name:'AdviceComp',
    setup() {
        const useAdvice = advice()
        

        onMounted(() => {
            useAdvice.getRandomAdvice()
        })

        return {
            myAdvice: useAdvice.advice, 
            errors: useAdvice.errors, 
            getRandomAdvice: useAdvice.getRandomAdvice
        }
    }
}
</script>

<style>

</style>