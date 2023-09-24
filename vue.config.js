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
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page",
    },
    other: {
      entry: "src/other.js",
      template: "public/other.html",
      filename: "other.html",
      title: "Other Page"
    }
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash:base64:8]',
        },
      },
    },
  },
})
