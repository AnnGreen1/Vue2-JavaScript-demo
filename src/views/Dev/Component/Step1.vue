<template>
  <div>
    <h1>Step1</h1>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
//   name: "step1",
  data() {
    return {
      count: 0,
    };
  },
};
</script>