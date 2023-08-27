<template>
  <div>
    <h3 ref="h3">ComponentRefdemo H3 Title</h3>
    <h5 ref="qinghuaTag">{{ qinghua }}</h5>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      skills: ["HTML", "JavaScript", "CSS", "Vue", "React", "Sass"],
      qinghua: "",
    };
  },
  methods: {
    randqinghuaFun() {
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
  created() {
    this.randqinghuaFun();
  },
};
</script>