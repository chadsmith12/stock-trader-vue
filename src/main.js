import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import Routes from './routes';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
