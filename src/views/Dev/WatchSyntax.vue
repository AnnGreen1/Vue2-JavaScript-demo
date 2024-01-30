
<template>
  <div>
    <input type="text" v-model="txt" />
    <input type="text" v-model="txt2" />
    <input type="text" v-model="txt3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "",
      txt2: "",
      txt3: "",
    };
  },
  watch: {
    txt: function (newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    /**
     * 这种语法也合法
     */
    txt2: "txt2Change",
    txt3: function () {
      this.text3Change();
    },
  },
  methods: {
    txt2Change() {
      console.log("methods txt2");
    },
    text3Change(){
        console.log('text3Change');
    }
  },
};
</script>

<style lang="scss" scoped>
</style>