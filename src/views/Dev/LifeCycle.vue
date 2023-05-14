<template>
  <div ref="titleref" class="lifecycle">
    {{ title }}
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
      title: "LifeCycle",
    };
  },
  methods: {
    changetitle() {
      this.title = "标题";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  created() {
    console.log("created");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  mounted() {
    console.log("mounted");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));

    this.$nextTick(() => {
      console.log(this.title);
      console.log(this.$refs.titleref);
    });
    // debugger;
  },
  updated() {
    console.log("updated");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
  destroyed() {
    console.log("destroyed");
    console.log(this.title);
    console.log(this.$refs.titleref);
    console.log(document.getElementsByClassName("lifecycle"));
  },
};
</script>
