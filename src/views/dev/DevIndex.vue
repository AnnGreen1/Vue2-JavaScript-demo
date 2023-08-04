<template>
  <div>
    <div class="echart" id="dev" :style="myChartStyle"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChartStyle: { float: "left", width: "600px", height: "400px" }, //图表样式
    };
  },
  methods: {
    initEcharts() {
      var chartDom = document.getElementById("dev");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "分类销量",
        },
        legend: {
          y: "bottom",
          data: ["百货", "电子", "服装"],
        },
        xAxis: [
          {
            type: "category",
            data: [20190612, 20190613, 20190614, 20190615],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "百货",
            type: "bar",
            stack: "1",
            data: [10, 14, 17, 8],
          },
          {
            name: "电子",
            type: "bar",
            stack: "1",
            data: [16, 12, 9, 22],
          },
          {
            name: "服装",
            type: "bar",
            stack: "1",
            data: [18, 8, 13, 20],
            label: {
              show: true,
              position: "top",
              color: "black",
              formatter: function (params) {
                return params.value;
              },
            },
          },
        ],
      };

      var series = option["series"];
      var fun = function (params) {
        var datavalue = 0;
        for (var i = 0; i < series.length; i++) {
          datavalue += series[i].data[params.dataIndex];
        }
        return datavalue;
      };
      series[series.length - 1]["label"]["formatter"] = fun;
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
