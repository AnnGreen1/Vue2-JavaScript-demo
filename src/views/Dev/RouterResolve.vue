<template>
  <div>
    <button @click="openRoute">直接open路由</button>
    <button @click="openThenHref">
      能否使用window.open和location.href配合
    </button>
  </div>
</template>

<script>
/**
 * 需求：如何在新标签页打开一个 vue router 路由地址？
 */
export default {
  data() {
    return {};
  },
  methods: {
    openRoute() {
      const routeUrl = this.$router.resolve({
        name: "about",
        params: {
          talkId: "fasdfa7sdf79as7d8f9a0sd980",
        },
      });
      console.log(routeUrl);
      window.open(routeUrl.href, "_blank");
    },
    openThenHref() {
      var newWindow = window.open("about:blank"); // 打开一个新的空白标签页
      newWindow.location.href = "/JavascriptAxios"; // 在新标签页中跳转到某个路由
    },
  },
};
</script>