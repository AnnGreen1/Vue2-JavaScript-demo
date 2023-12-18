<template>
  <div class="home">
    <div style="width: 480px; height: 600px" ref="chartsDOM"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      adcode: 100000,
      myChart: null,
      mapData: [
        {
          name: "南京市第一小学",
          value: [118.767413, 32.041544, 0, 0], // 经度 纬度 等级 学校类型（对应iconArray中形状）
        },
        {
          name: "苏州市第一小学",
          value: [120.619585, 31.299379, 2, 0],
        },
        {
          name: "盐城市初级中学",
          value: [120.139998, 33.377631, 1, 1],
        },
        {
          name: "连云港市大学",
          value: [119.178821, 34.600018, 2, 2],
        },
      ],
      // 矢量图，一种学校一种形状
      iconArray: [
        "circle", //实心圆
        "pin", // marker
        "arrow", //箭头
      ],
    };
  },
  created() {
    this.adcode = 320000; // 根据登录的角色判断地区 取需要渲染的adcode
  },
  mounted() {
    // 初始化统计图对象
    this.myChart = echarts.init(this.$refs["chartsDOM"]);
    // 显示 loading 动画
    this.myChart.showLoading();
    const that = this;
    // 获取地图数据
    fetch(
      `https://geo.datav.aliyun.com/areas_v3/bound/${this.adcode}_full.json`
    )
      .then((res) => {
        // 得到结果后，关闭动画
        that.myChart.hideLoading();

        that.drawMap(res);

        window.addEventListener("resize", () => {
          if (that.myChart) {
            that.myChart.resize();
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // $.get(
    //   "https://geo.datav.aliyun.com/areas_v3/bound/" +
    //     that.adcode +
    //     "_full.json",
    //   function (geoJson) {
    //     // 得到结果后，关闭动画
    //     that.myChart.hideLoading();

    //     that.drawMap(geoJson);

    //     window.addEventListener("resize", () => {
    //       if (that.myChart) {
    //         that.myChart.resize();
    //       }
    //     });
    //   }
    // );
  },
  methods: {
    drawMap(geoJson) {
      // 注册地图
      echarts.registerMap("GX", geoJson);
      const that = this;
      var option = {
        tooltip: {
          show: true, // 是否显示
          trigger: "item", // 触发类型  'item'图形触发：散点图，饼图等无类目轴的图表中使用； 'axis'坐标轴触发；'none'：什么都不触发。

          formatter: function (params) {
            return (
              params.data.name +
              ": " +
              (params.data.value[2] == 0
                ? "轻度"
                : params.data.value[2] == 1
                ? "中度"
                : "重度")
            );
          },
        },
        backgroundColor: "#faebd7", // 整个echarts正方形框框的背景
        title: {
          top: 0,
          text: "地图名称-江苏省地图",
          subtext: "",
          x: "center",
          textStyle: {
            color: "#000",
            fontWeight: 500,
            fontSize: 14,
          },
        },
        //地图图例
        visualMap: {
          show: true,
          type: "piecewise", // 分段型
          seriesIndex: 1, // series中第几个对象，从0开始，这里取散点图
          padding: 10,
          orient: "horizontal", //图例排列方向
          bottom: "5%",
          left: "16px",
          itemSymbol: "roundRect",
          pieces: [
            { value: 0, label: "轻度", color: "#36f7f3" },
            { value: 1, label: "中度", color: "#2196f3" },
            { value: 2, label: "重度", color: "#001dbe" },
          ],
        },
        //地理坐标系
        geo: {
          map: "GX", // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。开启缩放'scale'，开启平移'move'。设置成 true 为都开启
          zoom: 1, // 当前视角的缩放比例
          scaleLimit: {
            // 滚轮缩放的极限控制，默认的缩放为1
            min: 1, // 最小的缩放值
            max: 10, // 最大的缩放值
          },
          z: 0,
          silent: true, // 去除点击事件
          label: {
            normal: {
              show: true, // 地图上各个地区名称
              fontSize: "12",
              color: "#901f05",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#ff8f85", // 地图边框
              borderWidth: 1,
              areaColor: "#ffbf96", // 地图背景色
            },
            emphasis: {
              areaColor: "#f3df32", // 选中的状态
              borderColor: "#cddc39",
              borderWidth: 1,
              label: {
                show: false,
              },
            },
          },
        },
        series: [
          //地图
          {
            type: "map",
            height:'500',
            width:'600',
            name: "地图",
            map: "GX", // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
            coordinateSystem: "geo",
            geoIndex: 0, // 解决在地图上缩放重影问题
            roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。开启缩放'scale'，开启平移'move'。设置成 true 为都开启
            scaleLimit: {
              // 滚轮缩放的极限控制，默认的缩放为1
              min: 1, // 最小的缩放值
              max: 10, // 最大的缩放值
            },
            silent: true, // 去除点击事件
            label: {
              normal: {
                show: true, // 地图上各个地区名称
                fontSize: "12",
                color: "rgba(0,0,0,0.7)",
              },
            },
            itemStyle: {
              normal: {
                borderColor: "#ff8f85", // 地图边框
                borderWidth: 1,
                areaColor: "#ffbf96", // 地图背景色
              },
              emphasis: {
                areaColor: "#f3df32", // 选中的状态
                borderColor: "#cddc39",
                borderWidth: 1,
                label: {
                  show: false,
                },
              },
            },
            // data:
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            data: this.mapData,
            label: {
              show: true,
              color: "#000",
              formatter: function (params) {
                return params.data.name;
              },
            },
            symbol: function (params) {
              //根据value中第四个值学校类型取对应的形状
              return that.iconArray[params[3]];
            },
            symbolSize: 28,
            z: 9999,
          },
        ],
      };
      this.myChart.setOption(option);
    },
  },
};
</script>

<style>
.home {
  padding: 20px;
}
</style>
