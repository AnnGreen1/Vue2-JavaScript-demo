<template>
  <div>
    <h1>Step2</h1>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  // name: "step2",
  data() {
    return {
      count: 0,
    };
  },
};
</script>