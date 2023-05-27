<template>
  <div>
    <MultipleSelect
      :selectOptions="selectOptions"
      :mulSelectLoading="mulSelectLoading"
      :mulSelecteds="mulSelecteds"
      @update:updateMultipleSelect="(val) => (mulSelecteds = val)"
    >
    </MultipleSelect>

    <MultipleSelect2
      :selectOptions="selectOptions2"
      :mulSelectLoading="mulSelectLoading2"
      :mulSelecteds="mulSelecteds2"
      @update:updateMultipleSelect="(val) => (mulSelecteds2 = val)"
    >
    </MultipleSelect2>
  </div>
</template>

<script>
import MultipleSelect from "./components/ElSelectAllS1.vue";
import MultipleSelect2 from "./components/ElSelectAllS2.vue";
export default {
  data() {
    return {
      selectOptions: [],
      mulSelectLoading: false,
      mulSelecteds: [],
      selectOptions2: [],
      mulSelectLoading2: false,
      mulSelecteds2: [],
    };
  },
  components: {
    MultipleSelect,
    MultipleSelect2,
  },
  methods: {
    mockData() {
      this.mulSelectLoading = true;
      this.mulSelectLoading2 = true;
      setTimeout(() => {
        const options = [
          { label: "上海", value: "sh" },
          { label: "南京", value: "nj" },
          { label: "重庆", value: "cq" },
          { label: "武汉", value: "wh" },
        ];
        this.selectOptions = options;
        this.mulSelectLoading = false;
        this.mulSelecteds = ["cq", "nj"];
        this.selectOptions2 = options;
        this.mulSelectLoading2 = false;
        this.mulSelecteds2 = ["cq", "nj"];
      }, 1500);
    },
  },
  mounted() {
    this.mockData();
  },
};
</script>
