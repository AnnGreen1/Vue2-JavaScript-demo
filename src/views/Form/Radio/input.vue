<template>
    <div>
        <el-radio v-model="radio" label="1" @input="inputA(radio)">备选项</el-radio>
        <el-radio v-model="radio" label="2" @input="inputB(radio)">备选项</el-radio>
        <div>
            label（radio的value）:{{ radio }}
        </div>



        <el-radio-group v-model="radiogroup" @input="inputGroup(radiogroup)">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            //注意 '1' 与  3 的区别
            radio: '1',
            radiogroup:3
        };
    },
    methods: {
        inputA(radio) {
            console.log(radio);
        },
        inputB(radio) {
            console.log(radio);
        },
        inputGroup(radiogroup){
        console.log(radiogroup);
        }
    }
}
</script>
  
<style lang="scss" scoped>

</style>