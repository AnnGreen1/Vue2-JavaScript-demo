const formRoute = [
  {
    path: '/FormIndex',
    name: 'FormIndex',
    component: () => import('@/views/Form/FormIndex.vue')
  },
  /**
   * Radio
   */
  {
    path: "/Form/Radio/label",
    name: "Form-Radio-label",
    component: () => import("@/views/Form/Radio/label.vue"),
  },
  {
    path: "/Form/Radio/size",
    name: "Form-Radio-size",
    component: () => import("@/views/Form/Radio/label.vue"),
  },
  {
    path: "/Form/Radio/input",
    name: "Form-Radio-input",
    component: () => import("@/views/Form/Radio/input.vue"),
  },
  /**
   * Select
   */
  {
    path: "/Form/Select/value-key",
    name: "Form-Select-value-key",
    component: () => import("@/views/Form/Select/value-key.vue"),
  },
];
export default formRoute;