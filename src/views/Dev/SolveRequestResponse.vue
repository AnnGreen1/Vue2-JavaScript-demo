<template>
  <div>
    <div class="demo-block">info:{{ info }}</div>
    <div class="demo-block">infoOther:{{ infoOther }}</div>
    <div class="demo-block">music:{{ music }}</div>
    <div class="demo-block">
      <li v-for="a in actor" :key="a.role">{{ a.role }} -- {{ a.actor }}</li>
    </div>
    <div class="demo-block">
      <button @click="changeInfo">changeInfo</button>
    </div>
    <div class="demo-block">
      <button @click="show">show</button>
    </div>
    <div class="demo-block">
      <button @click="deleteProperty">deleteProperty</button>
    </div>

    <div class="demo-block">
      <button @click="requestFun">request</button>
    </div>

    <div class="demo-block">
      {{ data }}
    </div>
  </div>
</template>

<script>
/**
 * 返回值
 *  1、返回值属性多于即将要赋值的对象---直接替换
 *  2、返回值属性少于即将要赋值的对象---直接替换
 *  3、对象直接赋值能成功吗？
 * 入参
 */
/**
 * 把一个对象整体赋值给某一个data，这个data是具有响应式的，但是仅仅更改对象的某一个属性时不会是响应式的
 * SolveRequestResponse，但是却主要解决了对象和数组的响应式问题，此问题都是直接替换
 * 需要考虑的其实却是能否直接通过this访问到
 */
import { RsponseResult, RequestRsponse } from "@/api/dev";
export default {
  data() {
    return {
      msg: "",
      res: "",
      data: "",
      movie: "",
      director: "",
      actor: "",
      info: {
        time: 0,
        lang: "",
      },
      infoOther: "",
      music: "",
      params: {
        paramA: 1,
        paramB: 2,
        paramC: 3,
      },
    };
  },
  methods: {
    changeInfo() {
      this.info = { NameInChinese: "情书" };
      console.log(this.info);

      this.infoOther = { NameInChinese: "情书" };
      console.log(this.infoOther);

      this.music = [
        "《Fading》",
        "《Frozen summer》",
        "《The flight》",
        "《He loves you?》",
        "《A winter story》",
        "《Eccentric love parade》",
        "《Soil of his tears》",
        "《Gateway to heaven》",
        "《Small happiness》",
      ];

      this.actor = [
        {
          role: "渡边博子",
          actor: "酒井美纪",
        },
        {
          role: "藤井树（男）",
          actor: "柏原崇",
        },
      ];
    },
    show() {
      console.log(this.info.time);
      console.log(this.info.lang);
      console.log(this.info.NameInEnglish);
      console.log(this.info.NameInChinese);

      console.log("------------");

      console.log(this.infoOther.time);
      console.log(this.infoOther.lang);
      console.log(this.infoOther.NameInEnglish);
      console.log(this.infoOther.NameInChinese);
    },
    deleteProperty() {
      // 不是响应式的
      delete this.info.lang;
    },
    requestFun() {
      console.log(this.params);
      const { paramA, paramB, paramC, paramD } = this.params;
      console.log(paramA);
      console.log(paramB);
      console.log(paramC);
      console.log(paramD);
      // let that = this;
      RequestRsponse(this.params)
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            Object.assign(this.data, res.data);
            console.log(this.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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

        this.infoOther = res.data.info;

        this.music = res.data.music;
        this.actor = res.data.actor;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>