<template>
  <div>
    <button @click="router">重复路由到当前路由</button>
    <!--
        vue-router.esm.js:2046 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/dev/RepeatRoute".
     -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    router() {
      this.$router.push("/dev/RepeatRoute");
    },
  },
};
</script>