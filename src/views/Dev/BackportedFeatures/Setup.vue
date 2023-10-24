<template>
  <div>Setup语法糖使用</div>
</template>

<script setup>
import { randqinghua } from "@/api/api";

let randqinghua_data = { format: "json" };
randqinghua(randqinghua_data)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
</script>