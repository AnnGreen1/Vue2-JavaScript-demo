/**
 * @description:饼图
 */
const pie = [
  {
    path: "/pie",
    name: "pie",
    component: () => import("@/views/CommonRoute/CommonRoute.vue"),
  },
  /**
   * @description:环形图
   */
  // {
  //   path: "/pie/DoughnutChart",
  //   name: "pie-DoughnutChart",
  //   component: () => import("@/views/pie/DoughnutChart.vue"),
  // },
];
export default pie;
