<template>
  <div>
    <div>
      直接给对象类型响应式数据加属性不会更新视图，因为Object.defineProperty没有对对象的新属性进行属性劫持
    </div>
    <div>
      对象新属性无法更新视图：使用Vue.$set(obj, key,
      value)，组件中this.$set(obj, key, value)
    </div>
    <div>
      删除属性无法更新视图：使用Vue.$delete(obj, key)，组件中this.$delete(obj,
      key)
    </div>
    <ul>
      <li v-for="(item, index) in yuan" :key="index">{{ item }}</li>
    </ul>
    <button @click="setage">age</button>
    <button @click="setageii">age</button>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      yuan: {
        name: "袁明月",
        university: "安徽理工大学",
      },
    };
  },
  methods: {
    setage() {
      this.yuan.age = 18;
      console.log(this.yuan);
    },
    setageii() {
      this.$set(this.yuan, "age", 18);
      console.log(this.yuan);
    },
  },
  created() {
    let randqinghua_data = { format: "json" };
    randqinghua(randqinghua_data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
