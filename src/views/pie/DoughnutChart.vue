<template>
  <div>
    <div class="echart" id="DoughnutChart" :style="myChartStyle"></div>
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
      var chartDom = document.getElementById("DoughnutChart");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        // tooltip: {
        //   trigger: "item",
        // },
        legend: {
          x:'center',
          y:'bottom'
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)", // b代表名称，c代表对应值，d代表百分比
            },
            radius: ["40%", "70%"],
            // avoidLabelOverlap: false,
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: 40,
            //     fontWeight: "bold",
            //   },
            // },
            labelLine: {
              show: true,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
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
