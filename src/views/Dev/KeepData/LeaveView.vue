<template>
  <div>
    <div>情话：{{ qinghua }}</div>
    <button @click="qinghuaFun">获取情话</button>
    <button @click="router">LeaveView.vue，go to EntryView.vue</button>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      qinghua: "",
    };
  },
  methods: {
    qinghuaFun() {
      randqinghua().then((res) => {
        this.qinghua = res.content;
      });
    },
    router() {
      /**
       * this._data 是什么？
       * 与 this.$data 有什么关系吗？
       */
      window.sessionStorage.setItem("KeepData", JSON.stringify(this._data));
      this.$router.push({
        path: "/dev/KeepData/EntryView",
        query: this.query,
      });
    },
  },
  created() {
    let KeepData = JSON.parse(sessionStorage.getItem("KeepData"));
    sessionStorage.removeItem("KeepData");
    for (let key in KeepData) {
      this[key] = KeepData[key];
    }
  },
};
</script>