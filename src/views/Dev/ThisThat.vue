<template>
    <div>
        ThisThat.vue
    </div>
</template>

<script>
import { randqinghua } from '@/api/api'
export default {
    data() {
        return {
            result:null,
            qinghua:'',
        }
    },
    methods: {

    },
    async created() {
        let randqinghua_data = { 'format': 'json' }
        await randqinghua(randqinghua_data).then((res) => {
            let qinghua = ''; 
            console.log(res)
            this.result = res;
            this.qinghua = res.content;
            console.log(qinghua);
        }).catch((error) => {
            console.log(error);
        })
        console.log(this.result);
        console.log(this.qinghua);
        console.log(this);
    }
}
</script>