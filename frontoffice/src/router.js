import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Home.vue";
import Oferts from "./views/Oferts";
import Blog from "./views/Blog.vue"
import StarterHeader from "@/layout/starter/StarterHeader";
import StarterFooter from "@/layout/starter/StarterFooter";
import AppliedOferts from "@/views/AppliedOferts";
import DetailBlog from './views/DetailBlog.vue';
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: StarterHeader,
        default: Landing,
        footer: StarterFooter
      }
    },
    {
      path: "/home",
      name: "homepage",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        default: Register,
      }
    },
    {
      path: "/oferts/:id",
      name: "oferts",
      components: {
        header: AppHeader,
        default: Oferts,
        footer: AppFooter
      }
    },
    {
      path: "/appliedOferts",
      name: "appliedOferts",
      components: {
        header: AppHeader,
        default: AppliedOferts,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/blog",
      name: "blog",
      components: {
        header: AppHeader,
        default: Blog,
        footer: AppFooter
      }
    },
    {
      path: "/article/:slug",
      name: "DetailBlog",
      components: {
        header: AppHeader,
        default: DetailBlog,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
