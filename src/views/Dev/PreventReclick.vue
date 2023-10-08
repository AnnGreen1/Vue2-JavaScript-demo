<template>
  <div>
    <button v-preventReClick @click="randqinghuafun">{{ qinghua }}</button>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      qinghua: "情话准备中...",
    };
  },
  methods: {
    randqinghuafun() {
      let randqinghua_data = { format: "json" };
      randqinghua(randqinghua_data)
        .then((res) => {
          console.log(res);
          this.qinghua = res.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  directives: {
    preventReClick: {
      // 指令的定义
      inserted: function (el, binding) {
        el.addEventListener("click", () => {
          if (!el.disabled) {
            el.disabled = true;
            setTimeout(() => {
              el.disabled = false;
            }, binding.value || 10000);
          }
        });
      },
    },
  },

  created() {
    this.randqinghuafun();
  },
};
</script>