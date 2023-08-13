<template>
  <div class="divbtn">
    <div class="divbtn-container" :style="[styleObject, styleprops]" @click="clickfun">
      {{ txt }}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "div-btn",
  props: {
    // 文本
    txt: {
      type: String,
      default: "按钮文本",
    },
    width: {
      type: String,
      default: "108px",
    },
    height: {
      type: String,
      default: "38px",
    },
    backgroundImageUrl: {
      default: require("@/assets/logo.png")
    },
    // 样式
    styleprops: {
      type: Object || Array,
    },
  },
  data() {
    return  {
      styleObject: {
        width: this.width,
        height: this.height,
        backgroundImage:
          "url(" + this.backgroundImageUrl + ")  !important",
      },
    };
  },
  computed: {
    // importbg(url){
    // }
  },
  methods: {
    clickfun() {
      this.$emit("clickevent");
    },
  },
};
</script>

<style lang="scss" scoped>
.divbtn {
  margin: 5px auto !important;
  width: 110px;
  display: inline-block;
  &-container {
    // width: 108px;
    // height: 38px;
    // background-image: url(@/assets/image/favicon.ico) !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #5cf8bc !important;
    font-size: 18px !important;
    font-family: Source Han Sans CN, sans-serif !important;
    font-weight: 500 !important;
    cursor: pointer;
    border: solid;
    border-radius: 10px;
    user-select: none;
  }
}
</style>