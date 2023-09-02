const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        'components': path.resolve(__dirname, 'src/components/'),
        'views': path.resolve(__dirname, 'src/views/'),
        // 添加其他的路径别名
      }
    }
  },
  devServer: {
    proxy: {
      
    }
  }
})
