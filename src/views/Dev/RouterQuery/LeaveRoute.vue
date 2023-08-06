<template>
  <div>
    <button @click="router">LeaveRoute.vue，go to EntryRoute.vue</button>
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
    };
  },
  methods: {
    router() {
      this.$router.push({
        path: "/dev/RouterQuery/EntryRoute",
        query: this.query,
      });
    },
  },
  created() {},
};
</script>