/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:19
 * @LastEditTime: 2019-12-16 10:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\vue.config.js
 */
const path = require('path');

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  assetsDir:"",
  devServer: {
    proxy: {
      
      // '/articles': {
      //   target: 'http://192.168.63.13:28000',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/articles': '/articles'
      //   }
      // },
      '/childApp/tiger-prawn-mbcs': {
        target: 'http://192.168.63.19:8088',
      },
      '/childApp/tiger-prawn-adgjaq': {
        target: 'http://192.168.63.120:8080',
      },
      '/pdf': {
        target: 'http://192.168.63.19:8088',
      },
      '/api': {
        target: 'http://192.168.63.13:28000',
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/test': '/test'
        // }
      },
      '/test': {
        target: 'http://192.168.63.13:28000',
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/test': '/test'
        // }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        
      },
    },
  },
};
