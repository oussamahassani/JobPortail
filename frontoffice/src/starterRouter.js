import Vue from "vue";
import Router from "vue-router";
import StarterHeader from "@/layout/starter/StarterHeader";
import StarterFooter from "@/layout/starter/StarterFooter";
import Landing from "@/views/Landing";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: StarterHeader,
        default: Landing,
        footer: StarterFooter
      }
    }
  ]
});
