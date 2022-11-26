const basicRoute = [
  {
    path: "/BasicIndex",
    name: "BasicIndex",
    component: () => import("@/views/Basic/BasicIndex.vue"),
  },
  /**
   * Button
   */
  {
    path: "/Basic/Button/size",
    name: "Basic-Button-size",
    component: () => import("@/views/Basic/Button/size.vue"),
  },
  {
    path: "/Basic/Button/type",
    name: "Basic-Button-type",
    component: () => import("@/views/Basic/Button/type.vue"),
  },
  {
    path: "/Basic/Button/plain",
    name: "Basic-Button-plain",
    component: () => import("@/views/Basic/Button/plain.vue"),
  },
  {
    path: "/Basic/Button/round",
    name: "Basic-Button-round",
    component: () => import("@/views/Basic/Button/round.vue"),
  },
  {
    path: "/Basic/Button/circle",
    name: "Basic-Button-circle",
    component: () => import("@/views/Basic/Button/circle.vue"),
  },
  {
    path: "/Basic/Button/loading",
    name: "Basic-Button-loading",
    component: () => import("@/views/Basic/Button/loading.vue"),
  },
  {
    path: "/Basic/Button/disabled",
    name: "Basic-Button-disabled",
    component: () => import("@/views/Basic/Button/disabled.vue"),
  },
  {
    path: "/Basic/Button/icon",
    name: "Basic-Button-icon",
    component: () => import("@/views/Basic/Button/icon.vue"),
  },
  {
    path: "/Basic/Button/autofocus",
    name: "Basic-Button-autofocus",
    component: () => import("@/views/Basic/Button/autofocus.vue"),
  },
  {
    path: "/Basic/Button/native-type",
    name: "Basic-Button-native-type",
    component: () => import("@/views/Basic/Button/native-type.vue"),
  },
  /**
   * Link
   */
  {
    path: "/Basic/Link/type",
    name: "Basic-Link-type",
    component: () => import("@/views/Basic/Link/type.vue"),
  },
  {
    path: "/Basic/Link/underline",
    name: "Basic-Link-underline",
    component: () => import("@/views/Basic/Link/underline.vue"),
  },
  {
    path: "/Basic/Link/icon",
    name: "Basic-Link-icon",
    component: () => import("@/views/Basic/Link/icon.vue"),
  },
];
export default basicRoute;