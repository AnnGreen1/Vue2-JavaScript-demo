<template>
  <div>
    <router-link to="/DynamicRoutes/One">One</router-link> |
    <router-link to="/DynamicRoutes/Other">Other</router-link>
  </div>
</template>

<script>
import { DynamicRoutes } from "@/api/dev";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    /**
     * 会出现 vue warn，提示路由重复
     * 因为在第一次添加动态路由后，路由表中就已经有该路由了，再次返回此页面（再次调用了created里的获取方法），会警告，重复路由
     * 如何解决是显而易见的，即确保每个动态路由永远只添加一次
     */
    DynamicRoutes()
      .then((res) => {
        // console.log(res);
        if (res.code == 1) {
          console.log(res.data);
          // 构建路由
          res.data.forEach((route) => {
            let componentPath = route.component;
            route.component = () => import("@/views" + componentPath);
            console.log(route);
            this.$router.addRoute(route);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>