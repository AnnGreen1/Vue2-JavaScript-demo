<template>
    <div>
        <el-table :data="datas" :stripe="tableConfig?.stripe">
            <template v-for="(column, index) in columsConfig">
                <template v-if="column.render">
                    <el-table-column :key="index" :label="column.label">
                        <template slot-scope="scope">
                            <render-func :render="column.render" :params="scope.row"></render-func>
                        </template>
                    </el-table-column>
                </template>

                <template v-else>
                    <el-table-column :key="index" :label="column.label" :prop="column.prop"></el-table-column>
                </template>
            </template>
        </el-table>
    </div>
</template>

<script>
import RenderFunc from "./RenderFunc.vue";
export default {
    props: {
        tableConfig: {
            dafault() {
                return {}
            }
        },
        // 表头数据
        columsConfig: {
            type: Array,
            default() {
                return [];
            },
        },
        // 表格数据
        datas: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    components: {
        RenderFunc,
    },
    mounted() {
        console.log(this.datas);
        console.log(this.columsConfig);
    }
};
</script>