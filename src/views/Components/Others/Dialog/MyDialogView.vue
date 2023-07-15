<template>
    <div>
        <MyDialog :dialogVisible="dialogVisible" @closedialog="closedialogfun" />
        <button @click="dialogVisible=!dialogVisible">{{ dialogVisible }}</button>
    </div>
</template>

<script>
import MyDialog from '@/components/Others/Dialog/MyDialog.vue'
export default {
    data(){
        return{
            dialogVisible:false
        }
    },
    components:{
        MyDialog
    },
    methods:{
        closedialogfun(){
            this.dialogVisible = false;
        }
    },
    created(){
        
    }
}
</script>