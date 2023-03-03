<template>
    <div>
        JavascriptAxios.vue
    </div>
</template>

<script>
import { wenjianliu } from '@/api/api'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    created(){

        wenjianliu().then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
    }
}
</script>