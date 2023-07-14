<template>
    <div>
        <TongxiaDialog :dialogVisible="dialogVisible" :tip="tip" :title="title" @confirm="confirmfun" @cancle="cancelfun" />
        <el-button @click="dialogVisible=true">打开dialog</el-button>
    </div>
</template>

<script>
import TongxiaDialog from '@/components/Others/Dialog/TongxiaDialog.vue';
export default {
    data(){
        return{
            dialogVisible:false,
            tip:"这是tip",
            title:"这是title"
        }
    },
    components:{
        TongxiaDialog
    },
    methods:{
        confirmfun(){
            console.log("confirmfun");
            this.dialogVisible = false;
        },
        cancelfun(){
            console.log("cancelfun");
            this.dialogVisible = false;
        }
    }
}
</script>