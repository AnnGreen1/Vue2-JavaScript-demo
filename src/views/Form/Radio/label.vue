<template>
    <div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <div>
            label（radio的value）:{{ radio }}
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            radio: '1'
        };
    }
}
</script>
  
<style lang="scss" scoped>

</style>