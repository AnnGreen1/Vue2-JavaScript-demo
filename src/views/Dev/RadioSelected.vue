<template>
    <div>
      <h1>一个基本数据类型</h1>
      <div class="demo-item">
        <el-radio-group v-model="radio">
          <el-radio :label="'3'">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
      <div class="demo-item">
        <el-button @click="setValue(3)">赋值为3</el-button>
        <el-button @click="setValue(6)">赋值为6</el-button>
        <el-button @click="setValue(9)">赋值为9</el-button>
      </div>
  
      <h1>一个对象的属性</h1>
      <div class="demo-item">
        <el-radio-group v-model="obj.radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
      <div class="demo-item">
        <el-button @click="setObjValue(3)">赋值为3</el-button>
        <el-button @click="setObjValue(6)">赋值为6</el-button>
        <el-button @click="setObjValue(9)">赋值为9</el-button>
      </div>
  
      <h1>Select选择器</h1>
      <div class="demo-item">
        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 20px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="demo-item">
        <el-button @click="push('选项1')">黄金糕</el-button>
        <el-button @click="push('选项2')">双皮奶</el-button>
        <el-button @click="push('选项3')">蚵仔煎</el-button>
        <el-button @click="push('选项4')">龙须面</el-button>
        <el-button @click="push('选项5')">北京烤鸭</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        radio: '3',
        obj: {
          radio: 3,
        },
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
        value2: [],
      };
    },
    methods: {
      setValue(value) {
        this.radio = value;
      },
      setObjValue(value) {
        this.obj.radio = value;
      },
      push(obj) {
        this.value2.push(obj);
        console.log(this.value2);
      },
    },
    created() {},
  };
  </script>