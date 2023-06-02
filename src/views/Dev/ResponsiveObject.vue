<template>
  <div>
    <div class="common-style">
      {{ date }}
    </div>
    <div class="common-style">
      {{ set }}
    </div>
    <div class="common-style">
      <button @click="set.add(6)">Set add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      set: new Set([1, 2, 3, 4, 5]),
    };
  },
  methods: {},
  created() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
    console.log(typeof this.date);
    console.log(this.date instanceof Date);
    console.log(this.date instanceof String);
  },
};
</script>
