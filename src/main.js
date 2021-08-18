import Vue from 'vue'
import App from './App.vue';
import store from "./store";
import router from "./route";
import modal from "./components/plagins/ModalWindow";
import popUp from "./components/plagins/popUp/popUpPlagin"
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
Vue.use(modal);
Vue.use(popUp);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  VueTheMask
}).$mount('#app')