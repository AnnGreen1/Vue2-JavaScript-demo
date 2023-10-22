const devRoute = [
  {
    path: "/Dev/SelectAll",
    name: "Dev-SelectAll",
    component: () => import("@/views/Dev/SelectAll.vue"),
  },
  {
    path: "/Dev/donload",
    name: "Dev-donload",
    component: () => import("@/views/Dev/donload.vue"),
  },
  {
    path: "/Dev/TableShake",
    name: "Dev-TableShake",
    component: () => import("@/views/Dev/TableShake.vue"),
  },
  {
    path: "/dev/flatarray",
    name: "dev-flatarray",
    component: () => import("@/views/Dev/FlatArray.vue"),
  },
  {
    path: "/dev/NativeEvent",
    name: "dev-NativeEvent",
    component: () => import("@/views/Dev/NativeEvent.vue"),
  },
  {
    path: "/dev/SelectAllother",
    name: "dev-SelectAllother",
    component: () => import("@/views/Dev/SelectAllother.vue"),
  },
  {
    path: "/dev/SelectAllMyself",
    name: "dev-SelectAllMyself",
    component: () => import("@/views/Dev/SelectAllMyself.vue"),
  },
  {
    path: "/dev/CheckboxColor",
    name: "dev-CheckboxColor",
    component: () => import("@/views/Dev/CheckboxColor.vue"),
  },
  /**
   * @description:给表格加自动生成的序号
   */
  {
    path: "/dev/TableSerialnumber",
    name: "dev-TableSerialnumber",
    component: () => import("@/views/Dev/TableSerialnumber.vue"),
  },
  /**
  * @description:通过值来反选中checkbox
  */
  {
    path: "/dev/CheckboxChecked",
    name: "dev-CheckboxChecked",
    component: () => import("@/views/Dev/CheckboxChecked.vue"),
  },
  /**
   * @description:在dialog里的组件不会随着dialog的关闭而销毁，如何破解？
   */
  {
    path: "/dev/DialogWithComponents",
    name: "dev-DialogWithComponents",
    component: () => import("@/views/Dev/DialogWithComponents.vue"),
  },
  /**
  * @description:改一下折叠面板的样式
  */
  {
    path: "/dev/CollapseView",
    name: "dev-CollapseView",
    component: () => import("@/views/Dev/CollapseView.vue"),
  },
  /**
   * @description:实现一个斑马纹进度条
   */
  {
    path: "/dev/ZebraStripeProgress",
    name: "dev-ZebraStripeProgress",
    component: () => import("@/views/Dev/ZebraStripeProgress.vue"),
  },
  /**
   * @description:给message添加自定义类名修改样式
   */
  {
    path: "/dev/ErrorMessage",
    name: "dev-ErrorMessage",
    component: () => import("@/views/Dev/ErrorMessage.vue"),
  },
   /**
   * @description:给 radio 的 v-model 赋值可以选中，但是再次点击其他选项无法切换选中？
   */
   {
    path: "/dev/RadioSelected",
    name: "dev-RadioSelected",
    component: () => import("@/views/Dev/RadioSelected.vue"),
  },
];
export default devRoute;
