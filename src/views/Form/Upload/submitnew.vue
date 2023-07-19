<template>
  <div>
    <el-upload
      ref="upload"
      action="https://httpbin.org/post"
      :auto-upload="false"
      :on-change="handleFileChange"
      :on-success="handleUploadSuccess"
    >
      <el-button ref="uploadButton" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      // 在组件挂载后，模拟点击上传按钮
      this.simulateUpload();
    });
  },
  methods: {
    simulateUpload() {
      const uploadButton = this.$refs.uploadButton.$el;
      uploadButton.click();
    },
    handleFileChange(file) {
      // 处理文件变化事件
      console.log(file);
      // 执行上传操作
      this.uploadFile(file.raw);
    },
    uploadFile(file) {
      // 执行实际的文件上传操作
      // 你可以使用 axios 或其他 HTTP 库来发送文件上传请求
      console.log('上传文件:', file);
    },
    handleUploadSuccess(response, file, fileList){
        console.log(response);
        console.log(file);
        console.log(fileList);
    }
  },
};
</script>