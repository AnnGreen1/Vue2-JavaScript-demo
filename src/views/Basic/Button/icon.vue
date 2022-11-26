<template>
    <div class="round">


        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
          
        }
    }
};
</script>
  
<style lang="scss" scoped>
.round {
    .el-row {
        margin: 20px;
    }
}
</style>