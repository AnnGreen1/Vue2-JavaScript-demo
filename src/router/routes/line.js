/**
 * @description:折线图
 */
const line = [
  {
    path: "/line",
    name: "line",
    component: () => import("@/views/CommonRoute/CommonRoute.vue"),
  },
    /**
   * @description:基础平滑折线图
   */
  {
    path: "/line/SmoothedLineChart",
    name: "line-SmoothedLineChart",
    component: () => import("@/views/line/SmoothedLineChart.vue"),
  },
];
export default line;
