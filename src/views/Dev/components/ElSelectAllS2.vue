<template>
  <el-select
    size="mini"
    multiple
    filterable
    :disabled="disabled"
    :loading="mulSelectLoading"
    :collapse-tags="collapseTags"
    v-model="selectedArr"
    placeholder="请选择"
    @change="changeSelect"
  >
    <el-checkbox v-model="checked" @change="selectAll">全选</el-checkbox>
    <el-option
      v-for="item in selectOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      selectedArr: [],
    };
  },
  props: {
    // 选项
    selectOptions: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 已选中选项
    mulSelecteds: {
      type: Array,
      default() {
        return [];
      },
    },
    mulSelectLoading: {
      type: Boolean,
      default: false,
    },
    collapseTags: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    selectAll() {
      this.selectedArr = [];
      if (this.checked) {
        this.selectOptions.forEach((item) => {
          this.selectedArr.push(item.value);
        });
      } else {
        this.selectedArr = [];
      }
      this.$emit("update:updateMultipleSelect", this.selectedArr);
    },
    changeSelect(val) {
      if (val.length === this.selectOptions.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      this.$emit("update:updateMultipleSelect", this.selectedArr);
    },
  },
  watch: {
    mulSelecteds: {
      handler(newVal,) {
        this.selectedArr = newVal;
        if (
          this.selectedArr.length &&
          this.selectedArr.length === this.selectOptions.length
        ) {
          this.checked = true;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-checkbox {
  text-align: right;
  width: 90%;
}
</style>
