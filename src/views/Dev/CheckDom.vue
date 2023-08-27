<template>
  <div>
    <div class="demo-block">
      <input type="text" v-model="name" class="name" />
      <input type="text" v-model="university" />
      <button @click="copyValue">复制value</button>
      <button @click="checkdom">检查是否更改</button>
      <button @click="copyDom">复制dom</button>
      <button @click="checkdomPure">检查是否更改</button>
    </div>
    <div class="demo-block">falg: {{ falg }}</div>
    <div class="demo-block">computedflag: {{ computedflag }}</div>
    <div class="demo-block">checkdomflag: {{ checkdomflag }}</div>
    <div class="demo-block">checkdomflagpure: {{ checkdomflagpure }}</div>
  </div>
</template>

<script>
/**
 * 1、直接通过 value 属性比对，使用原生 js 获取到 dom 或 dom 的 value 属性，直接比对
 * 2、利用 watch 直接监听 value 的变化（实现不了，局限在于如果再次变会原值不会侦听到）
 * 3、直接通过把 dom 使用 JSON.Stringfly() 处理之后进行对比（适合表单）
 * 4、使用computed，但是需要保存副本
 */
export default {
  data() {
    return {
      nameTemp: "",
      name: "",
      university: "",
      falg: false,
      nameValue: "",
      checkdomflag: false,
      dom: "",
      checkdomflagpure: false,
    };
  },
  watch: {
    name: function (newval, oldval) {
      console.log(oldval);
      console.log(newval);
      this.falg = newval == oldval ? false : true;
    },
  },
  computed: {
    computedflag: function () {
      return this.nameTemp == this.name ? false : true;
    },
  },
  methods: {
    checkdom() {
      console.log(document.getElementsByClassName("name")[0].value);
      console.log(this.nameValue);
      this.checkdomflag =
        document.getElementsByClassName("name")[0].value === this.nameValue
          ? false
          : true;
    },
    copyDom() {
      console.log(document.getElementsByClassName("name")[0]);
      this.dom = JSON.stringify(document.getElementsByClassName("name")[0]);
      console.log(this.dom);
    },
    checkdomPure() {
      this.checkdomflagpure =
        JSON.stringify(document.getElementsByClassName("name")[0]) === this.dom
          ? true
          : false;
    },
    copyValue() {
      this.nameValue = document.getElementsByClassName("name")[0].value;
    },
  },

  created() {
    this.nameTemp = this.name;
  },
};
</script>