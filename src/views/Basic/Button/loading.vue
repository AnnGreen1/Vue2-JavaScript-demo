<template>
    <div class="round">
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button :loading="loading">默认按钮loading</el-button>
            <el-button type="primary" :loading="loading">主要按钮loading</el-button>
            <el-button type="success" :loading="loading">成功按钮loading</el-button>
            <el-button type="info" :loading="loading">信息按钮loading</el-button>
            <el-button type="warning" :loading="loading">警告按钮loading</el-button>
            <el-button type="danger" :loading="loading">危险按钮loading</el-button>
        </el-row>
    </div>
</template>
  
<script>
export default {
    data(){
        return{
            loading:true
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