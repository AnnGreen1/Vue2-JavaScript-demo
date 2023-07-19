<template>
  <div>
    <el-upload
      id="upload"
      class="upload-demo"
      action="https://httpbin.org/post"
      multiple
      :limit="3"
    >
    </el-upload>

    <el-button class="el-upload-button" @click="upload">button</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    upload() {
      // console.log(this.$refs.upload);
      // console.log(document.getElementById('upload'));
      // document.getElementById('upload').click();
      // this.$refs.upload.click()
      // this.$refs.upload.submit()

      const uploadButton = document.querySelector(".upload-demo"); // 替换为你的上传按钮的选择器
      uploadButton.click();
    },
  },
};
</script>