<template>
  <div class="">
        <h1>Advice #{{myAdvice.id}}</h1>
        <p>{{myAdvice.advice}}</p>
        <picture>
            <source media="(min-width: 992px)" :srcset="publicPath+'images/pattern-divider-desktop.svg'">
            <img :src="publicPath+'images/pattern-divider-mobile.svg'" alt="Pattern Divider">
        </picture>
        <div>
            <label for="random_advice" class="screen-reader">Get Random Advice</label>
            <button class="randomize" type="button" id="random_advice">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
                </svg>
            </button>
        </div>
  </div>
</template>

<script>
import advice from '@/advice'
import { onMounted } from '@vue/runtime-core'

export default {
    name:'AdviceComp',
    setup() {
        const useAdvice = advice()
        const publicPath = process.env.BASE_URL

        onMounted(() => {
            useAdvice.getRandomAdvice()
        })

        return {
            myAdvice: useAdvice.advice, 
            errors: useAdvice.errors, 
            getRandomAdvice: useAdvice.getRandomAdvice,
            publicPath
        }
    }
}
</script>

<style>

</style>