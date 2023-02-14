<template>
    <div>
        <!-- <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button> -->

        <el-checkbox-group v-model="checkList">
            <el-checkbox label="date"></el-checkbox>
            <el-checkbox label="name"></el-checkbox>
            <el-checkbox label="address"></el-checkbox>
            <el-checkbox label="sex"></el-checkbox>
        </el-checkbox-group>
        <el-table ref="table" :data="tableData" border style="width: 100%">

            <el-table-column prop="date" label="日期" width="180" v-if="checkList.includes('date')">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180" v-if="checkList.includes('name')">
            </el-table-column>
            <el-table-column prop="address" label="地址" v-if="checkList.includes('address')">
            </el-table-column>
            <el-table-column prop="sex" label="性别" v-if="checkList.includes('sex')">
            </el-table-column>

        </el-table>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            checkList: ['date', 'name', 'address', 'sex'],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                sex: '男'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                sex: '男'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                sex: '女'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                sex: '女'
            }]
        }
    },
    watch: {
        checkList: function (val) {
            console.log(val);
            this.$nextTick(() => { //在数据加载完，重新渲染表格
                this.$refs['table'].doLayout();
            })
        }
    },
    created() {

    }
}
</script>
  
<style lang="scss" scoped>
.el-table {
    width: 99.9% !important;
}
</style>