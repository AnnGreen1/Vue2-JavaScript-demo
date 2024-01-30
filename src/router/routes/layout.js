/**
 * @description:当涉及公共组件时如何设计路由？解决方案如下，即嵌套路由
 */
const layout = [
  {
    path: "/layout",
    name: "layout",
    redirect: "/layout/devhome",
    component: () => import("@/views/layout/LayoutView.vue"),
    children: [
      {
        path: "devhome",
        name: "devhome",
        component: () => import("@/views/layout/components/HomeView.vue"),
      },
      {
        path: "devabout",
        name: "devabout",
        component: () => import("@/views/layout/components/AboutView.vue"),
      },
      {
        path: "/rootroute",
        name: "rootroute",
        component: () => import("@/views/layout/components/AboutView.vue"),
      },
    ],
  },
];
export default layout;
