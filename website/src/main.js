import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Tam from "./components/Tam.vue";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// loads the Icon plugin
UIkit.use(Icons);
// loads Vue Router
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Tamaulipas",
      component: Tam,
      path: "/tam"
    },
    {
      path: "/mich"
    },
    {
      path: "/map-archive"
    },
    {
      path: "/blog"
    },
    {
      path: "/press-feed"
    }
  ]
});

import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);

new Vue({
  el: "#app",
  components: {
    VueNavigationBar
  },
  router,
  render: h => h(App)
}).$mount("#app");
