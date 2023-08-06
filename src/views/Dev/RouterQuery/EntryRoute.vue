<template>
  <div>
    <button>EntryRoute.vue， from LeaveRoute.vue</button>   
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      
    };
  },
  methods: {
    
  },
  created() {
    console.log(this.$route.path);
    console.log(this.$route.query);
    console.log(this.$route.query.name);
    console.log(this.$route.query.age);
  },
};
</script>