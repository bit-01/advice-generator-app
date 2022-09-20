const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/advice-generator-app/'
  : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Advice Me',
    },
  }
})
