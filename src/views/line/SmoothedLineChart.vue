<template>
  <div>
    <div class="echart" id="SmoothedLineChart" :style="myChartStyle"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
    };
  },
  methods: {
    initEcharts() {
      var chartDom = document.getElementById("SmoothedLineChart");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          inverse: true,
          min: 100,
          max: 0,
        },
        series: [
          {
            data: [1, 45, 6, 76, 23, 56, 34, 45],
            type: "line",
            smooth: true,
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    });
  },
};
</script>
