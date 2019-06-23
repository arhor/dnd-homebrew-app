import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vuetify';

Vue.config.productionTip = false;

store.init();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
