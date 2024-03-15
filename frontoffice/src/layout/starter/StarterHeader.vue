<template>
  <header style="margin-bottom: 5rem">
    <!-- Home Navigation Menu (Header) -->
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-dark ">
      <div class="container">
        <!-- Get-in-EXP LOGO -->
        <router-link to="/">
          <img class="img-startHeader" src="img/logos/logo_navbar.png" alt="startHeaderLogo">
        </router-link>
        <ul v-if="logged" class="navbar-nav ml-5">
          <li class="nav-item"><router-link to="/home" class="nav-link">JOB OFFERTS</router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link">PROFILE</router-link></li>
          <li class="nav-item"><a class="nav-link" @click="logOut()">LOG OUT</a></li>
          <li class="nav-item"><router-link to="/blog" class="nav-link">Blog</router-link></li>
          <li class="nav-item"><router-link to="/contactUs" class="nav-link">Contact-Us</router-link></li>
        </ul>
        <ul v-else class="navbar-nav ml-5">
          <li class="nav-item"><router-link to="/home" class="nav-link">JOB OFFERTS</router-link></li>
          <li class="nav-item"><router-link to="/login" class="nav-link">SIGN IN</router-link></li>
          <li class="nav-item"><router-link to="/register" class="nav-link">SIGN UP</router-link></li>
          <li class="nav-item"><router-link to="/blog" class="nav-link">Blog</router-link></li>
          <li class="nav-item"><router-link to="/contactUs" class="nav-link">Contact-Us</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  name: 'StarterHeader',
  components: {
    BaseNav,
    CloseButton
  },
  data() {
    return {
      logged: false,
      token: 0,
    }
  },
 

  beforeMount() {
    console.log("before mounted",localStorage.getItem('logged') )
    /*
    if (localStorage.getItem('logged')) {
      try {
        this.logged = (localStorage.logged === 'true');
        this.token = parseInt(JSON.parse(localStorage.getItem('token')));
        console.log("this.logged ",this.logged )
      } catch (error) {
        this.logged = false;
        this.token = 0;
      }
    }*/
  },
  mounted() {
    this.checkLoggedIn();
    console.log("monted")
  },
  methods: {
    checkLoggedIn() {
      const storedLogged = localStorage.getItem('logged');
      if (storedLogged !== null) {
        this.logged = storedLogged === 'true';
        if (this.logged) {
          const storedToken = parseInt(localStorage.getItem('token'));
          if (!isNaN(storedToken)) {
            this.token = storedToken;
          }
        }
      }
    },
    logOut() {
      localStorage.setItem('logged', false);
      localStorage.setItem('token', 0);
      localStorage.setItem('appliedOferts', '')
      this.logged = false;
      this.token = 0;
      this.$router.replace({ path: '/' })
    }
  }
};
</script>
<style></style>
