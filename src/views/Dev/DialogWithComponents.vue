<template>
  <div>
    <button @click="dialogVisible = true">
      打开一个弹窗，完全不会销毁弹窗里的组件
    </button>

    <el-dialog :visible.sync="dialogVisible1">
      <Component-Indialog></Component-Indialog>
    </el-dialog>

    <button @click="dialogVisible2 = true">
      打开一个弹窗，:destroy-on-close="true"
    </button>

    <el-dialog :visible.sync="dialogVisible2" :destroy-on-close="true">
      <Component-Indialog></Component-Indialog>
    </el-dialog>

    <button @click="dialogVisible3 = true">打开一个弹窗，使用v-if</button>

    <el-dialog :visible.sync="dialogVisible3" v-if="dialogVisible3">
      <Component-Indialog></Component-Indialog>
    </el-dialog>

    <button @click="dialogVisible4 = true">
      打开一个弹窗，使用v-if加过渡效果
    </button>

    <transition name="custom-dialog">
      <el-dialog :visible.sync="dialogVisible4" v-if="dialogVisible4">
        <Component-Indialog></Component-Indialog>
      </el-dialog>
    </transition>
  </div>
</template>

<script>
import ComponentIndialog from "./components/ComponentInDialog.vue";
export default {
  components: {
    ComponentIndialog,
  },
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.custom-dialog-enter-active, .custom-dialog-leave-active {
  transition: transform 0.5s;
}

.custom-dialog-enter, .custom-dialog-leave-to {
  transform: scale(0);
}
</style>