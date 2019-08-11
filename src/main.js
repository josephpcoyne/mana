import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "es6-promise/auto";
Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.use(Vuex);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
