<template>
  <div class="CollapseView">
    <el-collapse class="group">
      <el-collapse-item name="1" class="item">
        <template slot="title">
          <div class="title-container">
            <img
              v-if="toggle"
              @click="toggle = !toggle"
              :src="logoup"
              alt="Your Image"
              class="icon"
            />
            <img
              v-else
              @click="toggle = !toggle"
              :src="logodown"
              class="icon"
            />
            <!-- <div @click="toggle = !toggle">展开/折叠</div> -->
          </div>
        </template>
        <div>
          易用 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！ 灵活
          不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。 高效 20kB
          min+gzip 运行大小 超快虚拟 DOM 最省心的优化
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import logoup from "@/assets/logoup.png";
import logodown from "@/assets/logodown.png";
export default {
  data() {
    return {
      logoup,
      logodown,
      toggle: false,
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.CollapseView {
  // width:900px;
  margin: 50px 5px;
  .el-collapse {
    border: none;
    .item {
      .el-collapse-item__wrap {
        border: none;
      }
      .title-container {
        text-align: center;
        height: 100px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .el-collapse-item__header {
        height: 100px;
      }
      div {
        width: 400px;
        height: 20px;
        // border: solid;
        margin: 20px 0;
        font-size: 30px;
      }
    }
  }
}
</style>