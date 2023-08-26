<template>
  <div>
    <a :href="logo" download="filename.png">Download File</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
  methods: {},
  created() {},
};
</script>