<template>
  <el-dialog   :visible="dialogVisible" @close="closedialog">
   dialog内容
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
    // // 弹窗信息
    // tip: {
    //   type: String,
    //   default: "",
    // },
    // 弹窗标题
    // title: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {};
  },
  methods: {
    closedialog(){
      this.$emit("closedialog")
    }
    // confirm() {
    //   this.$emit("confirm");
    // },
    // cancle() {
    //   this.$emit("cancle");
    // },
  },
};
</script>
