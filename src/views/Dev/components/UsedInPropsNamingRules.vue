<template>
  <div>
    <ul>
      <li>name:{{ forverName }}</li>
      <li>age:{{ forverAge }}</li>
      <li>distance:{{ forverDistance }}</li>
    </ul>
  </div>
</template>

    <!--
    从 vue3 向下移植回来的特性
    -->
<script>
export default {
  props: ["forverName", "forverAge", "forverDistance"],
  data() {
    return {};
  },
};
</script>