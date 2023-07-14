<template>
  <el-dialog
    :title="title"
    :visible="dialogVisible"
    :modal="false"
    top="20%"
    width="390px"
    center
    :before-close="cancle"
    custom-class="my-dialog"
  >
    <span style="margin-top: 40px">{{ tip }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle" class="cancel-btn">取 消</el-button>
      <el-button @click="confirm" class="confirm-btn">确 认</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    // 弹窗信息
    tip: {
      type: String,
      default: "",
    },
    // 弹窗标题
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancle() {
      this.$emit("cancle");
    },
  },
};
</script>

<style lang="scss">
.my-dialog {
  .el-dialog__header {
    text-align: left !important;
    background: #3e6bfd !important;
    padding: 16px 20px 16px !important;
  }
  .el-dialog__title {
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
  }
  .el-dialog__headerbtn {
    top: 13px;
    right: 12px;
    .el-dialog__close {
      color: #ffffff !important;
      font-size: 30px !important;
    }
  }
  .el-dialog__footer {
    text-align: right;
    color: #fff;
    padding: 10px 20px 30px;
  }
  .el-dialog__body {
    text-align: center;
    padding: 26px 42px 18px !important;
    font-size: 22px;
    font-family: Source Han Sans CN, sans-serif;
    font-weight: bold;
    color: #292929;
    line-height: 60px;
  }
  .cancel-btn {
    width: 106px;
    height: 36px;
    background: #f3f3f3;
    border: none;
    font-size: 16px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    color: #999999;
    line-height: 10px;
  }
  .confirm-btn {
    width: 106px;
    height: 36px;
    background: #3e6bfd;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    color: #ffffff;
    line-height: 10px;
  }
}
</style>