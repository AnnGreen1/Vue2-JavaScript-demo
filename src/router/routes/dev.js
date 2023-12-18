const dev = [
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/dev/DevIndex.vue"),
  },
  {
    path: "/dev/map",
    name: "dev-map",
    component: () => import("@/views/dev/MapView.vue"),
  },
];
export default dev;
