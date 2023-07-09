<template>
    <div>
        将按顺序写echarts的demo
        <a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" rel="noopener noreferrer">https://echarts.apache.org/examples/zh/index.html</a>
    </div>
</template>

<script>
import { randqinghua } from '@/api/api'
export default {
    data() {
        return {

        }
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
    }
}
</script>