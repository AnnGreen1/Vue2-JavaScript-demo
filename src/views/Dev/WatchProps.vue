<template>
  <div>
    <div class="common-style">
        <button @click="count++">props++</button>
    </div>
     <watchprops :count="count" />
  </div>
</template>

<script>
import watchprops from "@/views/Dev/components/WatchPropsComponent.vue";
export default {
  components: {
    watchprops,
  },
  data() {
    return {
        count:0
    };
  },
  methods: {},
  created() {},
};
</script>