<template>
  <div>
    <ElSelectAllMyself
      :selectOptions="selectOptions"
    >
    </ElSelectAllMyself>
  </div>
</template>

<script>
import ElSelectAllMyself from "./components/ElSelectAllMyself.vue";
export default {
  data() {
    return {
      selectOptions: [
          { label: "上海", value: "sh" },
          { label: "南京", value: "nj" },
          { label: "重庆", value: "cq" },
          { label: "武汉", value: "wh" },
        ],
    };
  },
  components: {
    ElSelectAllMyself,
  },
  methods: {
   
  },
  mounted() {
   
  },
};
</script>
