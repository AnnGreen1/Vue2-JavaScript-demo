<template>
  <div class="PlaceholderStyle">
    <input type="text" :placeholder="qinghua" />
  </div>
</template>

<script>
import { randqinghua } from "@/api/api";
export default {
  data() {
    return {
      qinghua: "",
    };
  },
  methods: {},
  created() {
    let randqinghua_data = { format: "json" };
    randqinghua(randqinghua_data)
      .then((res) => {
        console.log(res);
        this.qinghua = res.content;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.PlaceholderStyle {
  input {
    width: 300px;
  }

  input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: pink;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: pink;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: pink;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: pink;
  }
  input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: pink;
  }
}
</style>