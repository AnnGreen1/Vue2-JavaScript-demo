<template>
  <div class="ZebraStripeProgress">
    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70"
    ></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.ZebraStripeProgress {
  .el-progress-bar__inner {
    background-color: transparent !important;
    background-image: repeating-linear-gradient(
      -45deg,
      rgb(37, 181, 255),
      rgb(37, 181, 255) 8px,
      white 10px,
      white 20px
    );
    background-size: 28px 28px;
  }
  .el-progress-bar__outer {
    width: 578px;
    height: 26px;
    background-image: linear-gradient(to right, #001744, #001744);
    z-index: 999;
  }
}
</style>