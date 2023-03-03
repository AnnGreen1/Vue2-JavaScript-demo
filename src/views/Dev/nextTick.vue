<template>
  <div>
    <div ref="name">
      {{ name }}
    </div>
    <button @click="setname">setname</button>
    <button @click="setnamenexttick">setnamenexttick</button>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      name: "袁明月",
    };
  },
  methods: {
    setname() {
      this.name = "Mingyue Yuan";
      console.log(this.$refs.name.innerHTML);
    },
    setnamenexttick() {
      this.name = "Mingyue Yuan";
      this.$nextTick(() => {
        console.log(this.$refs.name.innerHTML);
      });
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
