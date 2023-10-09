<template>
  <div>
    <button>EntryRoute.vue， from LeaveRoute.vue</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["query"]),
  },
  methods: {},
  created() {
    // console.log(this.$route.path);
    // console.log(this.$route.query);
    // console.log(this.$route.query.name);
    // console.log(this.$route.query.age);

    // console.log(this.$route.query.info);
    // console.log(typeof this.$route.query.info);

    // console.log(JSON.parse(this.$route.query.info));
    // console.log(JSON.parse(this.$route.query.info).name);

    console.log(this.$route.query.info);
    console.log(decodeURI(this.$route.query.info));
    console.log(JSON.parse(decodeURI(this.$route.query.info)));
  },
};
</script>