<template>
    <div>
        <div>{{ msg | toUpcase }}</div>
        <div :class="pink | classname">color</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:"fliters"
        }
    },
    filters: {
        toUpcase(value){
            return value ? value.toUpperCase() : ''
        },
        classname(value){
            return value == 'hotpink' ? 'pink' : 'hotpink' 
        }
    },
}
</script>

<style lang="scss" scoped>
.hotpink{
    color:hotpink;
}
.pink{
    color:pink;
}
</style>