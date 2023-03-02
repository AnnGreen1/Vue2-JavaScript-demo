<template>
  <div>
    <el-select
      v-model="value"
      multiple
      filterable
      placeholder="请选择"
      :filter-method="filterfun"
    >
      <el-option
        v-for="item in filteroptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
      <el-checkbox v-model="checked" @change="change">全选</el-checkbox>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶金",
        },
        {
          value: "选项3",
          label: "蚵仔煎面",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      filteroptions: [],
      value: [],
      checked: 0,
    };
  },
  methods: {
    filterfun(param) {
      console.log(param);
      this.filteroptions = this.options.filter((item) =>
        item.label.includes(param)
      );
      console.log(this.filteroptions);
      console.log(this.value);
    },
    change() {
      console.log(this.filteroptions);
      console.log(this.value);
      this.filteroptions.forEach((item) => {
        if (this.value.includes(item.value) == false) {
          this.value.push(item.value);
        }
      });
      console.log(this.filteroptions);
      console.log(this.value);
      this.checked = 0;
    },
  },
  created() {
    this.filteroptions = this.options;
  },
};
</script>
