import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFirestore from "vue-firestore";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(VueFirestore);
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
