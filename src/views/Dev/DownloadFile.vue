<template>
  <div>
    <a :href="logo" download="filename.png">Download File</a>
    <a :href="href" download="filename.ico">Download File</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
  computed: {
    href() {
      return process.env.BASE_URL + 'favicon.ico';
    }
  },
  methods: {},
  created() {},
};
</script>