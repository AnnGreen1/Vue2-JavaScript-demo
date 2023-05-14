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
];
export default dev;
