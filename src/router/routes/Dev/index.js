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
];
export default devRoute;
