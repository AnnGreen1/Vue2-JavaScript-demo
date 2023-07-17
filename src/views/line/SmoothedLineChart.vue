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
          min:1400,
          max:800
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
