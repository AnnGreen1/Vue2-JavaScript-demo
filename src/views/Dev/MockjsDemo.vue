<template>
  <div>MockjsDemo.vue</div>
</template>

<script>
/**
 * @description: mockjs会拦截所有的请求，对于mockjs中定义了的请求就会直接拦截返回mock结果，而对于没有定义的mock再次发起真实请求，并且使用postman等工具是不能直接向mock接口发起请求的
 */
import { mockjsDemo } from "@/api/mockjs";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    mockjsDemo()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>