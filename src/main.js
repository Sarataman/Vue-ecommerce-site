import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";
import VueRouter from "vue-router";

import Products from "./containers/Products";
import Checkout from "./containers/Checkout";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products
    },
    {
      path: "/checkout",
      component: Checkout
    }
  ]
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
