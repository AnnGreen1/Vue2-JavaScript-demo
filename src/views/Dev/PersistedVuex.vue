<template>
  <div>
    <button @click="countPlus">{{ count }}</button>
  </div>
</template>

<script>
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