<template>
  <div>
    <keep-alive>
      <one-view-vue v-if="flag" />
      <other-view-vue v-else />
    </keep-alive>
    <button @click="flag = !flag">toggle flag</button>
  </div>
</template>

<script>
import OtherViewVue from "./OtherView.vue";
import OneViewVue from "./OneView.vue";
export default {
  components: {
    OneViewVue,
    OtherViewVue,
  },
  data() {
    return {
      flag: true,
    };
  },
};
</script>