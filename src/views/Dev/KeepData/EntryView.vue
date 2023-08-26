<template>
  <div>
    <button @click="router">
      EntryView.vue, from LeaveView.vue, back to LeaveView.vue
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    router() {
      this.$router.push({
        path: "/dev/KeepData/LeaveView",
      });
    },
  },
};
</script>