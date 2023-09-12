<template>
  <div ref="titleref" class="lifecycle">
    {{ title }}
    <button @click="changetitle">changetitle</button>
    <ComponentsSon :parenttitle="title" />
  </div>
</template>
  
<script>
/**
 * data
 * dom
 */
import ComponentsSon from "@/views/Dev/components/ComponentsSon.vue";
export default {
  data() {
    return {
      title: "LifeCycle",
    };
  },
  components: {
    ComponentsSon,
  },
  methods: {
    changetitle() {
      this.title = "标题";
    },
  },
  beforeCreate() {
    console.log("Parent beforeCreate");
  },
  created() {
    console.log("Parent created");
  },
  beforeMount() {
    console.log("Parent beforeMount");
  },
  mounted() {
    console.log("Parent mounted");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate");
  },
  updated() {
    console.log("Parent updated");
  },
  beforeDestroy() {
    console.log("Parent beforeDestroy");
  },
  destroyed() {
    console.log("Parent destroyed");
  },
};
</script>
  