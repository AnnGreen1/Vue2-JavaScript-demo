<template>
  <div>
    <h1 :class="$style.hotpink">CSS Modules :class="$style.hotpink</h1>
    <h1></h1>
    <h1>普通h1标题</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style module>
.hotpink {
  color: hotpink;
}

</style>