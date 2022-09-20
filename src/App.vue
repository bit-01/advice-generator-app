<template>
  <advice-comp />
</template>

<script>
import AdviceComp from "@/AdviceComp.vue";

export default {
  name: "App",
  components: {
    AdviceComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
@import url('@/assets/reset.css');

body {
  font-family: "Manrope", sans-serif !important;
  background: hsl(218, 23%, 16%);
}

main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
