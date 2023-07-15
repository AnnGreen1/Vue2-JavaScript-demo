const dev = [
  {
    path: "/dev/ObjectAttr",
    name: "dev-ObjectAttr",
    component: () => import("@/views/Dev/ObjectAttr.vue"),
  },
  {
    path: "/dev/nextTick",
    name: "dev-nextTick",
    component: () => import("@/views/Dev/nextTick.vue"),
  },
  {
    path: "/dev/awaitaxios",
    name: "dev-awaitaxios",
    component: () => import("@/views/Dev/AwaitAxios.vue"),
  },
  {
    path: "/dev/thisthat",
    name: "dev-thisthat",
    component: () => import("@/views/Dev/ThisThat.vue"),
  },
  {
    path: "/dev/lifecycle",
    name: "dev-lifecycle",
    component: () => import("@/views/Dev/LifeCycle.vue"),
  },
  {
    path: "/dev/cookiedemo",
    name: "dev-cookiedemo",
    component: () => import("@/views/Dev/CookieDemo.vue"),
  },
  {
    path: "/dev/ParentSonLifeCycle",
    name: "dev-ParentSonLifeCycle",
    component: () => import("@/views/Dev/ParentSonLifeCycle.vue"),
  },
  {
    path: "/dev/DataComputed",
    name: "dev-DataComputed",
    component: () => import("@/views/Dev/DataComputed.vue"),
  },
  {
    path: "/dev/ResponsiveObject",
    name: "dev-ResponsiveObject",
    component: () => import("@/views/Dev/ResponsiveObject.vue"),
  },
  /**
   * @description:如何利用伪元素添加icon
   */
  {
    path: "/dev/PreIcon",
    name: "dev-PreIcon",
    component: () => import("@/views/Dev/PreIcon.vue"),
  },
  /**
   * @description:过滤器使用
   */
  {
    path: "/dev/FiltersDemo",
    name: "dev-FiltersDemo",
    component: () => import("@/views/Dev/FiltersDemo.vue"),
  },
  /**
   * @description:重复路由报错的问题
   */
  {
    path: "/dev/RepeatRoute",
    name: "dev-RepeatRoute",
    component: () => import("@/views/Dev/RepeatRoute.vue"),
  },
];
export default dev;
