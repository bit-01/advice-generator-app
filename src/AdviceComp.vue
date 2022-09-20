<template>
  <div class="container">
    <h1>Advice #{{ myAdvice.id }}</h1>
    <p>{{ myAdvice.advice }}</p>
    <picture>
      <source
        media="(min-width: 992px)"
        :srcset="publicPath + 'images/pattern-divider-desktop.svg'"
      />
      <img
        :src="publicPath + 'images/pattern-divider-mobile.svg'"
        alt="Pattern Divider"
      />
    </picture>
    <div class="btn-container">
      <label for="random_advice" class="screen-reader">Get Random Advice</label>
      <button class="randomize" type="button" id="random_advice" @click="getRandomAdvice()">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import advice from "@/advice";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "AdviceComp",
  setup() {
    const useAdvice = advice();
    const publicPath = process.env.BASE_URL;

    onMounted(() => {
      useAdvice.getRandomAdvice();
    });

    return {
      myAdvice: useAdvice.advice,
      errors: useAdvice.errors,
      getRandomAdvice: useAdvice.getRandomAdvice,
      publicPath,
    };
  },
};
</script>

<style scoped>
.container {
  background: hsl(217, 19%, 24%);
  border-radius: 15px;
  padding: 2em;
  text-align: center;
  position: relative;
  margin: 1em;
  width: 80%;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
  color: hsl(150, 100%, 66%);
  font-weight: 800;
  margin-bottom: 2em;
}
p {
  font-size: 28px;
  color: hsl(193, 38%, 86%);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1em;
}
p::before {
  content: "\201C";
}
p::after {
  content: "\201D";
}
img {
  width: 100%;
  margin-bottom: 1.5em;
}
.btn-container {
  position: absolute;
  bottom: -10%;
  width: 100%;
  left: 0;
}
label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
button {
  padding: 0.5em;
  border-radius: 50%;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(150, 100%, 66%);
  border: none;
}
button:hover, button:focus, button:active {
  box-shadow: hsl(150, 100%, 66%) 0 0 25px;
  cursor: pointer;
}
@media (min-width: 650px) {
  .container {
    width: 360px;
  }
}
</style>