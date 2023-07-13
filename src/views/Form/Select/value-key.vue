<template>
  <div>
    <el-select v-model="value" placeholder="请选择" @change="changeFood">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select v-model="permissionList" placeholder="请选择">
      <el-option
        v-for="item in groups"
        :key="item.groupID"
        :label="item.name"
        :value="item"
      />
    </el-select>
    <el-select v-model="permissionList" placeholder="请选择" value-key="id">
      <el-option
        v-for="item in groups"
        :key="item.groupID"
        :label="item.name"
        :value="item"
      />
    </el-select>

    <el-select
      v-model="oldclass"
      clearable
      placeholder="请选择班级"
      @change="oldhandleChange"
    >
      <el-option
        :value="item.classNumber"
        :label="item.className"
        v-for="item in classList"
        :key="item.classNumber"
      ></el-option>
    </el-select>

    <el-select
      v-model="newclass"
      value-key="classNumber"
      clearable
      placeholder="请选择班级"
      @change="newhandleChange"
    >
      <el-option
        :value="item"
        :label="item.className"
        v-for="item in classList"
        :key="item.classNumber"
      ></el-option>
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
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
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
      value: "",
      /**
       *
       */
      permissionList: [],
      groups: [
        {
          id: 1,
          name: "A组",
          permission: "Write",
        },
        {
          id: 2,
          name: "B组",
          permission: "Write",
        },
        {
          id: 3,
          name: "C组",
          permission: "Write",
        },
      ],
      /**
       *
       */
      classList: [
        {
          id: 1,
          classNumber: "1",
          className: "一年级(1)班",
          gradeId: 1,
          sort: "1",
        },
        {
          id: 2,
          classNumber: "2",
          className: "一年级(2)班",
          gradeId: 1,
          sort: "2",
        },
        {
          id: 3,
          classNumber: "3",
          className: "一年级(3)班",
          gradeId: 1,
          sort: "3",
        },
        {
          id: 4,
          classNumber: "4",
          className: "一年级(4)班",
          gradeId: 1,
          sort: "4",
        },
        {
          id: 5,
          classNumber: "5",
          className: "一年级(5)班",
          gradeId: 1,
          sort: "5",
        },
        {
          id: 6,
          classNumber: "6",
          className: "一年级(6)班",
          gradeId: 1,
          sort: "6",
        },
        {
          id: 7,
          classNumber: "7",
          className: "一年级(7)班",
          gradeId: 1,
          sort: "7",
        },
        {
          id: 8,
          classNumber: "8",
          className: "一年级(8)班",
          gradeId: 1,
          sort: "8",
        },
        {
          id: 9,
          classNumber: "9",
          className: "一年级(9)班",
          gradeId: 1,
          sort: "9",
        },
        {
          id: 10,
          classNumber: "10",
          className: "一年级(10)班",
          gradeId: 1,
          sort: "10",
        },
        {
          id: 11,
          classNumber: "11",
          className: "一年级(11)班",
          gradeId: 1,
          sort: "11",
        },
        {
          id: 12,
          classNumber: "12",
          className: "一年级(12)班",
          gradeId: 1,
          sort: "12",
        },
        {
          id: 13,
          classNumber: "13",
          className: "一年级(13)班",
          gradeId: 1,
          sort: "13",
        },
        {
          id: 14,
          classNumber: "14",
          className: "一年级(14)班",
          gradeId: 1,
          sort: "14",
        },
        {
          id: 15,
          classNumber: "15",
          className: "一年级(15)班",
          gradeId: 1,
          sort: "15",
        },
        {
          id: 16,
          classNumber: "16",
          className: "一年级(16)班",
          gradeId: 1,
          sort: "16",
        },
        {
          id: 17,
          classNumber: "17",
          className: "一年级(17)班",
          gradeId: 1,
          sort: "17",
        },
        {
          id: 18,
          classNumber: "18",
          className: "一年级(18)班",
          gradeId: 1,
          sort: "18",
        },
        {
          id: 19,
          classNumber: "19",
          className: "一年级(19)班",
          gradeId: 1,
          sort: "19",
        },
        {
          id: 20,
          classNumber: "20",
          className: "一年级(20)班",
          gradeId: 1,
          sort: "20",
        },
      ],
      oldclass: "",
      newclass: "",
      oldclassName: "",
      newclassName: "",
    };
  },
  methods: {
    changeFood() {
      console.log(this.value);
    },
    oldhandleChange(e) {
      this.oldclassName = e.className;
    },
    newhandleChange(e) {
      this.newclassName = e.className;
    },
  },
};
</script>