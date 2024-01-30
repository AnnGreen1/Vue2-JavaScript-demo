<template>
  <div>
    <h1>This is an dev home page</h1>
    <button @click="rootroute">rootroute</button>
  </div>
</template>

<script>
export default {
  data() {

  },
  methods: {
    rootroute() {
      this.$router.push({ path: '/rootroute' })
    }
  },
  created() {

  }
}
</script>
