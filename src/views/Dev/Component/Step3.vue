<template>
  <div>
    <h1>Step3</h1>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>