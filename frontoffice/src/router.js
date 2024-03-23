import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import UpdateProfile from "./views/UpdateProfile.vue"
import Home from "./views/Home.vue";
import Oferts from "./views/Oferts";
import Blog from "./views/Blog.vue"
import StarterHeader from "@/layout/starter/StarterHeader";
import StarterFooter from "@/layout/starter/StarterFooter";
import AppliedOferts from "@/views/AppliedOferts";
import DetailBlog from './views/DetailBlog.vue';
import ContactUs from './views/Contact-us.vue'
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
        header: StarterHeader,
        default: Home,
        footer: StarterFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: StarterHeader,
        default: Login,
        footer: StarterFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: StarterHeader,
        default: Register,
        footer: StarterFooter
      }
    },
    {
      path: "/oferts/:id",
      name: "oferts",
      components: {
        header: StarterHeader,
        default: Oferts,
        footer: StarterFooter
      }
    },
    {
      path: "/appliedOferts",
      name: "appliedOferts",
      components: {
        header: StarterHeader,
        default: AppliedOferts,
        footer: StarterFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: StarterHeader,
        default: Profile,
        footer: StarterFooter
      }
    },
    {
      path: "/updateprofile/:id",
      name: "udateprofile",
      components: {
        header: StarterHeader,
        default: UpdateProfile,
        footer: StarterFooter
      }
    },
    
    {
      path: "/blog",
      name: "blog",
      components: {
        header: StarterHeader,
        default: Blog,
        footer: StarterFooter
      }
    },
    {
      path: "/article/:slug",
      name: "DetailBlog",
      components: {
        header: StarterHeader,
        default: DetailBlog,
        footer: StarterFooter
      }
    },
    {
      path: "/contactUs",
      name: "ContactUs",
      components: {
        header: StarterHeader,
        default: ContactUs,
        footer: StarterFooter
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
