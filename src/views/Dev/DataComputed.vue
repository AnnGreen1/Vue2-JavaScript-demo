<template>
    <div>
        <input type="number" v-model.number="width">
        <input type="number" v-model.number="height">
        {{ s }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            width:20,
            height:30,
            s:0
        }
    },
    methods: {

    },
    created() {
        console.log(typeof this.width);
        console.log(typeof this.height);
        console.log(this.s);
        this.s = this.width*this.height;
    }
}
</script>