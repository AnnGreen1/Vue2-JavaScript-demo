<template>
  <div>
    <el-cascader v-model="value" :options="goods"></el-cascader>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      value: [],
      goods: [],
      goods2: [
        {
          value: "fruit",
          label: "水果",
          children: [
            {
              value: "apple",
              label: "苹果",
              children: [
                {
                  value: "fushi",
                  label: "红富士",
                },
                {
                  value: "qingping",
                  label: "青苹",
                },
              ],
            },
            {
              value: "pear",
              label: "梨子",
              children: [
                {
                  value: "xuehuali",
                  label: "雪花梨",
                },
                {
                  value: "yali",
                  label: "鸭梨",
                },
              ],
            },
          ],
        },
        {
          value: "stationery",
          label: "文具",
          children: [
            {
              value: "pen",
              label: "钢笔",
              children: [
                {
                  value: "yingxiong",
                  label: "英雄钢笔",
                },
                {
                  value: "paike",
                  label: "派克钢笔",
                },
              ],
            },
            {
              value: "pencil",
              label: "铅笔",
              children: [
                {
                  value: "2b",
                  label: "2b铅笔",
                },
                {
                  value: "HB",
                  label: "HB铅笔",
                },
              ],
            },
          ],
        },
      ],
    };
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

    // console.log(this.goods2.flat(Infinity));
    let i = 0;
    this.goods2.map((item) => {
      let children = new Array();
      this.goods[i] = {};
      item.children.forEach((item) => {
        console.log(item);
        console.log(item.children);
        item.children.forEach((itemc) => {
          children.push(itemc);
        });
        console.log(children);
      });
      this.goods[i].value = item.value;
      this.goods[i].label = item.label;
      this.goods[i].children = children;
      i++;
    });
    console.log(this.goods);
  },
};
</script>
