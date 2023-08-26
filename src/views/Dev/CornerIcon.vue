<template>
  <div class="CornerIcon">
    <div class="container">
      <img src="../../assets/image/bilibili.svg" alt="" />
      <div class="content">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</div>
    </div>
  </div>
</template>

<script>
// import bilibili from '@/assets/image/bilibili.ico'
export default {
  data() {
    return {
      // bilibili:bilibili
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.CornerIcon {
  .container {
    width:500px;
    border: solid;
    padding: 10px;
    img {
      position: relative;
      left: 98%;
      top: 13px;
    }
    .content {
      border: solid;
    //   width: 300px;
      height: 20px;
    //   text-align: center;
    }
  }
}
</style>