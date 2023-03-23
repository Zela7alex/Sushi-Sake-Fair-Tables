const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../public'),
  transpileDependencies: true,
  devServer: {
    proxy: 'http://127.0.0.1:3000', //From Node.js API
  },
})
