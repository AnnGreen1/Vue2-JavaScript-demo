<template>
  <div class="common-style">
    <span v-if="titleVisible">{{ titleVisible }}---{{ title }}</span>
    <span v-else>{{ titleVisible }}不可见标题</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "GainBoolprops",
    };
  },
  props: ["titleVisible"],
  created(){
    console.log(typeof this.titleVisible);
  }
};
</script>
