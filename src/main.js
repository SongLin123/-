/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-16 09:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\main.js
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 以下为qiankun框架配置
__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import fetch from 'isomorphic-fetch';
let app = null;
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

function render({ appContent, loading }) {

  if (!app) {
    app = new Vue({
      el: '#container',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });

registerMicroApps(
  [
    // {
    //   name: 'vue sub-app1', entry: '//localhost:7100', render,
    //   activeRule: genActiveRule('/sub-app1')
    // },
    // {
    //   name: 'vue sub-app2', entry: '/static/sub-app2/index.html', render,
    //   activeRule: genActiveRule('/sub-app2')
    // },
    {
      name: 'tiger-prawn-adgjaq',
      entry: '/childApp/tiger-prawn-adgjaq',
      render,
      activeRule: genActiveRule('/tiger-prawn-adgjaq')
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {

        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        
        // render({ appContent: ``, loading: false });
      },
    ],
  },

);

// setDefaultMountApp('/tiger-prawn-mbcs');


runAfterFirstMounted(() => console.info('first app mounted'));

start({fetch: request});