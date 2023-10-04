<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <button @click="oneview">to oneview</button>
  </div>
</template>

<script>
export default {
  name: "OtherView",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    oneview() {
      this.$router.push({ path: "/Dev/KeepAlive/one" });
    },
  },
  activated() {
    console.log("--other view activated--");
  },
  deactivated() {
    console.log("--other view deactived--");
  },
  monted() {
    console.log("--other view monted--");
  },
  created() {
    console.log("--other view created--");
  },
};
</script>