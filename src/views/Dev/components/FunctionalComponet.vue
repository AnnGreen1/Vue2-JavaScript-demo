<template>
  <div functional>{{ title }}</div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {},
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