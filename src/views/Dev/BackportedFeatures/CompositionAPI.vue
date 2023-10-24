<template>
  <div>
    组合式api使用
    {{ qinghua }}
  </div>
</template>

<script>
import { ref } from "vue";
import { randqinghua } from "@/api/api";
export default {
  setup() {
    let randqinghua_data = { format: "json" };
    const qinghua = ref("");
    randqinghua(randqinghua_data)
      .then((res) => {
        console.log(res);
        qinghua.value = res.content;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(qinghua);
    console.log(qinghua.value);

    return {
      qinghua,
    };
  },
};
</script>