<template>
  <div>
    <div class="demo-block">
      <div-btn />
    </div>

    <div class="demo-block">
      <div-btn txt="前往哔哩哔哩" :width="'200px'" :height="'50px'" :backgroundImageUrl="bg" :styleprops="{'border-color':'rgb(0,173,235)'}" @clickevent="clickevent" />
    </div>
  </div>
</template>

<script>
import DivBtn from "@/components/DivBtn.vue";
export default {
  components: {
    DivBtn,
  },
  data() {
    return {
        bg:require("@/assets/image/bilibili.svg")
    };
  },
  methods: {
    clickevent(){
        window.open('https://www.bilibili.com')
    }
  },
  created() {},
};
</script>