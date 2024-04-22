<template>
    <div>
        <button @click="ifflag = !ifflag">toogle if</button>
        <button @click="showflag = !showflag">toogle show</button>
        <div v-if="ifflag">{{ ifflag }}</div>
        <div v-show="showflag">{{ showflag }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifflag: true,
            showflag: true
        }
    },
    beforeCreate() {
        console.log("beforeCreated");
    },
    updated() {
        console.log("updated");
    },
    mounted() {
        console.log("mounted");
    },
    created() {
        console.log("created");
    }
}
</script>

<style lang="scss" scoped></style>