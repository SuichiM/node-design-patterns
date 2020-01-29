import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import './globalComponents';

const apiClient = axios.create({
  baseURL: 'http://localhost:8888/',
  timeout: 3000,
  // headers: {'X-Custom-Header': 'foobar'}
});

Vue.prototype.$api = apiClient;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
