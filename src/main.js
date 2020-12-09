import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
import "./assets/styles/custom.css";

import moment from 'moment';
import blogStore from "./store";

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});

Vue.config.productionTip = false;
window.Vuex = require("vuex");

new Vue({
  render: (h) => h(App),
  router,
  blogStore
}).$mount("#app");
