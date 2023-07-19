<template>
    <div>
        <button @click="preview">preview pdf</button>
            <embed width="100%" height="800px" style="margin:0px;" name="plugin" src="http://localhost/allphpcode/test/Welcome.pdf" type="application/pdf" />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        preview(){
            window.open('http://localhost/allphpcode/test/Welcome.pdf')
        }
    }
}
</script>