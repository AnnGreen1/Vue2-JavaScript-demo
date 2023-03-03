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
];
export default devRoute;
