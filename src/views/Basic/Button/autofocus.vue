<template>
    <div class="round">
        <el-row>
            <el-button :autofocus="autofocus">默认按钮loading</el-button>
        </el-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            autofocus:true
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