<template>
  <div>
    <div class="common-style">测试布尔props</div>
    <gain-boolprops-vue titleVisible="true" />
    <gain-boolprops-vue titleVisible="false" />
    <gain-boolprops-vue :titleVisible="true" />
    <gain-boolprops-vue :titleVisible="false" />
    <gain-boolprops-vue :titleVisible="titleVisibleTrue" />
    <gain-boolprops-vue :titleVisible="titleVisibleFalse" />
  </div>
</template>

<script>
/**
 * 总结：必需使用v-bind，否则会被认为是字符串
 */
import GainBoolpropsVue from "@/views/Dev/components/GainBoolprops.vue";
export default {
  components: {
    GainBoolpropsVue,
  },
  data() {
    return {
      titleVisibleTrue: true,
      titleVisibleFalse: false,
    };
  },
  methods: {},
  created() {},
};
</script>