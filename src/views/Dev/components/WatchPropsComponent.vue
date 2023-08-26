<template>
  <div>
    <div class="common-style">count:{{ count }}</div>
    <div class="common-style">selfcount:{{ selfCount }}</div>
  </div>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      selfCount: 0,
    };
  },
  watch: {
    count: function (val) {
      this.selfCount = val;
    },
  },
  methods: {},
  created() {},
};
</script>