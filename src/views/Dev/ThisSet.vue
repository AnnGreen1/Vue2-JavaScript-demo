<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <ul>
      <li v-for="o in obj" :key="o">{{ o }}</li>
    </ul>
    <button @click="updateItems">更新数组</button>
    <button @click="updateobj">更新对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      obj: {
        name: "Yuan Mingyue",
        age: 18,
      },
    };
  },
  methods: {
    updateItems() {
      // 创建一个新的数组
      const newItems = [
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
        { id: 6, name: "Item 6" },
      ];

      // this.items = newItems; // 没问题
      // 使用 this.$set() 方法给数组赋值
      this.$set(this, "items", newItems);
    },
    updateobj() {
      // this.obj.age = 20; // 没问题
      this.$set(this.obj, "age", 19); // 也没问题
    },
  },
};
</script>