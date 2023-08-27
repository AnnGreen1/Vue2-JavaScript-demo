<template>
  <div>
    <button @click="refInfo">refInfo</button>
    <button @click="refDestroy">refDestroy</button>
    <h1 ref="h1" class="pink" id="hotpink">h1标题</h1>
    <ComponentRef ref="ComponentRef"></ComponentRef>
  </div>
</template>

<script>
import ComponentRef from "./components/ComponentRefdemo.vue";
/**
 * @summary
 * 1、使用ref直接调用子组件的方法，例如销毁子组件
 * 2、使用ref直接获取子组件的data
 *
 */
export default {
  components: {
    ComponentRef,
  },
  data() {
    return {};
  },
  methods: {
    refInfo() {
      console.log(this.$refs);
      console.log(typeof this.$refs);
      console.log(this.$refs.h1);
      console.log(this.$refs["h1"]);
      console.log(this.$refs.h1.innerHTML);
      console.log(this.$refs.h1.classList);
      console.log(this.$refs.h1.className);
      console.log(this.$refs.h1.id);
      this.$refs.h1.style.color = "pink";
      console.log(this.$refs.h1.style);
      console.log(typeof this.$refs.h1.style);
      console.log(this.$refs.h1.style.color);

      // 通过 ref 拿到组件实例
      console.log(this.$refs.ComponentRef);
      // 通过 ref 拿到组件 data
      console.log(this.$refs.ComponentRef._data);
      console.log(this.$refs.ComponentRef._data.qinghua);
      console.log(this.$refs.ComponentRef._data.skills);
      // 通过 ref 直接调用函数
      console.log(this.$refs.ComponentRef.randqinghuaFun());
      // 通过 ref 获取 dom
      console.log(this.$refs.ComponentRef.$refs.h3);
      console.log(this.$refs.ComponentRef.$refs.qinghuaTag);
      this.$refs.ComponentRef.$refs.qinghuaTag.style.color = "hotpink";
    },
    refDestroy() {
      // 通过 ref destroy
      this.$refs.ComponentRef.$destroy();
    },
  },
  created() {},
};
</script>