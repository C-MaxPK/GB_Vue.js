import Vue from 'vue'
import App from './App.vue';
import store from "./store";
import router from "./route";
import modal from "./plugins/ModalWindow";
import popUp from "./plugins/popUp/popUpPlagin"
import VueTheMask from 'vue-the-mask'
import vuetify from './plugins/vuetify'

Vue.use(VueTheMask)
Vue.use(modal);
Vue.use(popUp);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,
  VueTheMask,

}).$mount('#app')