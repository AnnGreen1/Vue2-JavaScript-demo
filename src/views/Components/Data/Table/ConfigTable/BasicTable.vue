<template>
    <div>
        <ConfigTable :datas="tableData" :columsConfig="columsConfig" />
    </div>
</template>

<script>
import ConfigTable from '@/components/Data/Table/ConfigTable/Index.vue'
import { columsConfig } from '@/components/Data/Table/ConfigTable/config/basic'
export default {
    components: { ConfigTable },
    data() {
        return {

            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columsConfig: columsConfig()
        }
    }
}
</script>

<style lang="scss" scoped></style>