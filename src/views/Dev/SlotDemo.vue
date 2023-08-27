<template>
    <div>
        <components-demo>
            <h2>这是插槽应该显示的内容</h2>
        </components-demo>
    </div>
</template>

<script>
import { randqinghua, env_development_randqinghua } from '@/api/api'
import ComponentsDemo from './components/ComponentInDialog.vue'
export default {
    data() {
        return {

        }
    },
    components:{
        ComponentsDemo
    },
    methods: {

    },
    created() {
        let randqinghua_data = { 'format': 'json' }
        randqinghua(randqinghua_data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error);
        })

        env_development_randqinghua(randqinghua_data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error);
        })
    }
}
</script>