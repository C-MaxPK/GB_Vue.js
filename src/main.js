import Vue from 'vue'
import App from './App.vue';
import store from "./store";
import router from "./route";
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  VueTheMask
}).$mount('#app')