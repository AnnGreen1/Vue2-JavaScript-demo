<template>
  <div>
    <div class="steps">
      <button @click="current = 'step1'">Step1</button>
      <button @click="current = 'step2'">Step2</button>
      <!-- 组件没有 name 也是可以的，直接把组件本身赋值给 current -->
      <button @click="toStep3">Step3</button>
    </div>
    <div class="components">
      <!-- 通过匹配组件的 name -->
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
/**
 * 如果想在同一个地方渲染不同的组件可以使用动态组件的方法（当然肯定也可以使用 v-show 或 v-if）
 */
import step1 from "./Step1.vue";
import step2 from "./Step2.vue";
import step3 from "./Step3.vue";
export default {
  components: {
    step1,
    step2,
    step3,
  },
  data() {
    return {
      current: step3,
    };
  },
  methods: {
    toStep3() {
      this.current = step3;
    },
  },
  created() {},
};
</script>