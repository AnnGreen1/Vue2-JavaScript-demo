<template>
  <div>
    如何给组件添加原生事件
    <el-input placeholder="请输入特定消费金额 " @mouseover.native="test()"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test(){
        console.log('test event...');
    }
  },
  created() {
    
  },
};
</script>
