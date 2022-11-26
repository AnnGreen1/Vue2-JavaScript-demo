<template>
    <div class="round">
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button plain :disabled="disabled">朴素按钮</el-button>
            <el-button type="primary" plain :disabled="disabled">主要按钮</el-button>
            <el-button type="success" plain :disabled="disabled">成功按钮</el-button>
            <el-button type="info" plain :disabled="disabled">信息按钮</el-button>
            <el-button type="warning" plain :disabled="disabled">警告按钮</el-button>
            <el-button type="danger" plain :disabled="disabled">危险按钮</el-button>
        </el-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            disabled: true
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