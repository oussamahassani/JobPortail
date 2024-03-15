<template>
  <div id="app">
   // <StarterHeader/>
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
//import StarterHeader from "@/layout/starter/StarterHeader";
export default {
  components: {
    FadeTransition,
  //  StarterHeader
  },
 /* watch: {
    $route(to, from) {
      if (this.$route) {
        this.$store.dispatch("onStart")
      }
    }
  },
  mounted() {
    this.$store.dispatch("onStart")
  },
  */
};
</script>
