import Vue from "vue";
import App from "./pan/App.vue";
import router from "./pan/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
