const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kay/landingpage/'
    : '/',
    // "vue": {
      "pwa": {
        "workboxOptions": {
          "exclude": [
            ".htaccess"
          ]
        }
      }
    // }
    
})
