<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <button @click="otherview">to otherview</button>
  </div>
</template>

<script>
export default {
  name: "OneView",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    otherview() {
      this.$router.push({ path: "/Dev/KeepAlive/other" });
    },
  },
  activated() {
    console.log("--one view activated--");
  },
  deactivated() {
    console.log("--one view deactived--");
  },
  mounted() {
    console.log("--one view monted--");
  },
  created() {
    console.log("--one view created--");
  },
};
</script>