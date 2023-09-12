<template>
  <div></div>
</template>

<script>
/**
 * 实现功能的核心在App.vue line35 - line55
 */
export default {
  data() {},
  methods: {
    message(text) {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: text,
        duration: 5000,
        customClass: "ErrorMessage",
        iconClass: "ErrorMessage-icon",
      });
    },
  },
  created() {
    this.message("Vue2 + ElementUI");
  },
};
</script>
