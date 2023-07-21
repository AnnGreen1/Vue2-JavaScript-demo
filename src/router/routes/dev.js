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
  /**
   * @description:预览pdf文件
   */
  {
    path: "/dev/PreviewPDF",
    name: "dev-PreviewPDF",
    component: () => import("@/views/Dev/PreviewPDF.vue"),
  },
  /**
   * @description:预览docs文件
   */
  {
    path: "/dev/PreviewDocs",
    name: "dev-PreviewDocs",
    component: () => import("@/views/Dev/PreviewDocs.vue"),
  },
   /**
   * @description:插槽简单使用
   */
  {
    path: "/dev/SlotDemo",
    name: "dev-SlotDemo",
    component: () => import("@/views/Dev/SlotDemo.vue"),
  },
   /**
   * @description:注意点，vue2对数组的响应式只是通过重写方法实现，如果直接赋值是达不到响应式的效果的，需要使用 set
   */
  {
    path: "/dev/thisset",
    name: "dev-thisset",
    component: () => import("@/views/Dev/ThisSet.vue"),
  },
];
export default dev;
