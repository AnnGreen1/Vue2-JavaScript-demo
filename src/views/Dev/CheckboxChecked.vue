<template>
  <div>
    <div class="demo-item">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="demo-item">
      <el-checkbox-group v-model="checkedCitys">
        <el-checkbox
          v-for="city in citys"
          :key="city.code"
          :label="city.code"
          >{{ city.name }}</el-checkbox
        >
      </el-checkbox-group>
    </div>

    <div class="demo-item">
      <el-button @click="setCheckedCitys">赋值为[1,2]</el-button>
    </div>
  </div>
</template>

<script>
/**
 * @summary: 注意给checkedCitys去重，如果只是通过鼠标点击选中或取消选中（初始时就没有重复的情况）；
 * 一次取消选中只能在选中的数组中去除一个值
 * 可以在watch里直接去重，一劳永逸
 * 且注意最晚选中在最后
 */
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      citys: [
        {
          code: 1,
          name: "上海",
        },
        {
          code: 2,
          name: "合肥",
        },
        {
          code: 3,
          name: "南京",
        },
      ],
      checkedCitys: [],
    };
  },
  watch: {
    checkedCitys: function (val) {
      console.log(val);
      let temp = val;
      val = [...new Set(temp)]
      console.log(this.checkedCitys);
    },
  },
  methods: {
    setCheckedCitys() {
      [1, 2].map((code) => {
        this.checkedCitys.push(code);
      });
    },
  },
  created() {},
};
</script>
