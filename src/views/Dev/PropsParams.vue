<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.id);
  },
};
</script>