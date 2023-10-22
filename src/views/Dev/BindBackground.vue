<template>
  <div>
    <div class="vue-logo" :style="imageStyle">渐进式 JavaScript 框架</div>
    <button @click="changebg">切换背景</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require("@/assets/logo.png"),
    };
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        width: "1000px",
        height: "1000px",
      };
    },
  },
  methods: {
    changebg() {
      this.imageUrl = require("@/assets/image/image.jpg");
    },
  },
  created() {},
};
</script>

<style lang="scss">
.vue-logo {
}
</style>