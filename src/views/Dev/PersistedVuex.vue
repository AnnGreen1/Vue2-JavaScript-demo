<template>
  <div>
    count:{{ count }}
    <button @click="countPlus">count++</button>
    <button @click="DOUBLE">count double</button>
    <button @click="MULTIPLY">count multiply</button>
  </div>
</template>

<script>
/**
 * 代码实现的重点在 main.js line10 - line26
 */
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    /**
     * mapGetters 辅助函数将 store 中的 getter 映射到局部计算属性，可以直接使用 count 这个计算属性
     */
    ...mapGetters(["count"]),
  },
  methods: {
    /**
     * mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
     */
    ...mapMutations(["DOUBLE_COUNT", "MULTIPLY_COUNT"]),
    countPlus() {
      // 提交 mutation
      this.$store.commit("SET_COUNT", this.count + 1);
    },
    DOUBLE() {
      // 可以直接像调用函数一样使用这个 mutation
      this.DOUBLE_COUNT();
    },
    MULTIPLY() {
      // 同样也可以实现提交载荷
      this.MULTIPLY_COUNT(8);
    },
  },
  created() {},
};
</script>