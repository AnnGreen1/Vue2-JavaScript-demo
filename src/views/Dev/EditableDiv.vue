<template>
  <div class="EditableDiv">
    <div class="box uneditable" v-html="uneditableContent"></div>
    <div class="box editable" contenteditable="true">{{ editableContent }}</div>
    <button @click="content">获取内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uneditableContent: "不可编辑",
      editableContent: "可以编辑",
    };
  },
  methods: {
    content() {
      console.log(this.editableContent);
      let html = document.getElementsByClassName("editable")[0].innerHTML;
      console.log(html);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.EditableDiv {
  .box {
    border: solid;
    width: 500px;
    height: 100px;
    margin: 10px;
  }
}
</style>