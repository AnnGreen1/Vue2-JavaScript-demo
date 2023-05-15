<template>
  <div ref="titleref" class="common-style">
    {{ title }}
    {{ parenttitle }}
    <button @click="changetitle">changetitle</button>
  </div>
</template>

<script>
/**
 * data
 * dom
 */
export default {
  data() {
    return {
      title: "ComponentsSon",
    };
  },
  props:['parenttitle'],
  methods: {
    changetitle() {
      this.title = "子组件";
    },
  },
  beforeCreate() {
    console.log("Son beforeCreate");
  },
  created() {
    console.log("Son created");
  },
  beforeMount() {
    console.log("Son beforeMount");
  },
  mounted() {
    console.log("Son mounted");
  },
  beforeUpdate() {
    console.log("Son beforeUpdate");
  },
  updated() {
    console.log("Son updated");
  },
  beforeDestroy() {
    console.log("Son beforeDestroy");
  },
  destroyed() {
    console.log("Son destroyed");
  },
};
</script>
