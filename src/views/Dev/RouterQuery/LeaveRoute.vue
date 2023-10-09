<template>
  <div>
    <button @click="router">LeaveRoute.vue，go to EntryRoute.vue</button>

    <button @click="queryBoolean">布尔类型query参数</button>

    <button @click="queryBooleanStringfly">
      布尔类型query参数使用JSON.Stringfly()处理
    </button>

    <button @click="queryByVuex">利用vuex直接保存query</button>

    <button @click="queryByencodeURI">使用encodeURI()</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        name: "Yuan Mingyue",
        age: 18,
      },
      flag: false,
    };
  },
  methods: {
    router() {
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
        query: this.query,
      });
    },
    queryBoolean() {
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
        query: { flag: this.flag },
      });
    },
    queryBooleanStringfly() {
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
        query: { info: JSON.stringify(this.query) },
      });
    },
    queryByVuex() {
      this.$store.commit("SET_QUERY", this.query);
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
      });
    },
    queryByencodeURI() {
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
        query: { info: encodeURI(JSON.stringify(this.query)) },
      });
    },
  },
  created() {},
};
</script>