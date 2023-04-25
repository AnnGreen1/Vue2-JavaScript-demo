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
];
export default dev;
