<script setup>
import { ref } from "vue";
const theme = {
  color: "pink",
};
const size = ref(10);
const plus = () => {
  size.value *= 2;
  console.log(size.value);
};
</script>

<template>
  <p @click="plus">hello</p>
</template>

<style scoped>
p {
  color: v-bind("theme.color");
  font-size: v-bind(`${size}px`) ;
}
</style>