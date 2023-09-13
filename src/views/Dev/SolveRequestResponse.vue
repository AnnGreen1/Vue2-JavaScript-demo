<template>
  <div>
    <div class="demo-block">info:{{ info }}</div>
    <div class="demo-block">
      <button @click="changeInfo">changeInfo</button>
    </div>
  </div>
</template>

<script>
/**
 * 返回值
 *  1、返回值属性多于即将要赋值的对象
 *  2、返回值属性少于即将要赋值的对象
 *  3、对象直接赋值能成功吗？
 * 入参
 */
import { RsponseResult } from "@/api/dev";
export default {
  data() {
    return {
      msg: "",
      res: "",
      data: "",
      movie: "",
      actor: "",
      info: {
        time: 0,
        lane: "",
      },
    };
  },
  methods: {
    changeInfo() {
      this.info.NameInChinese = "情书";
      console.log(this.info);
    },
  },
  created() {
    // let randqinghua_data = { format: "json" };
    RsponseResult()
      .then((res) => {
        console.log(res);
        // 1、返回值属性多于即将要赋值的对象
        this.info = res.data.info;
        console.log(this.info);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>