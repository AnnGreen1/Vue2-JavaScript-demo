<template>
  <el-select
    size="mini"
    multiple
    filterable
    v-model="selectedArr"
    placeholder="请选择"
    @change="changeSelect"
  >
    <el-option
      label="全选"
      value="全选"
      @click.native="selectAll"
      v-if="selectOptions.length"
    ></el-option>
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
  name: "MultipleSelect",
  data() {
    return {
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
  },
  methods: {},
  watch: {},
};
</script>
