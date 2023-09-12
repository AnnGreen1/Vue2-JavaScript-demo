<template>
  <div>
    <button @click="countPlus">{{ count }}</button>
  </div>
</template>

<script>
/**
 * 代码实现的重点在 main.js line10 - line26
 */
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    countPlus() {
      this.$store.commit("SET_COUNT", this.count + 1);
    },
  },
  created() {},
};
</script>