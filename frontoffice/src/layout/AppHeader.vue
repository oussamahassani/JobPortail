<template>
  <header>
    <!-- Home Navigation Menu (Header) -->
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-dark bg-default">
      <div class="container">
        <!-- Get-in-EXP LOGO -->
        <router-link to="/home">
          <img class="img-startHeader" src="img/logos/logo_AppHeader.png" alt="HeaderLogo">
        </router-link>
        <ul v-if="logged" class="navbar-nav ml-5">
          <li class="nav-item"><router-link to="/home" class="nav-link text-white">JOB OFFERTS</router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link text-white">PROFILE</router-link></li>
          <li class="nav-item"><a class="nav-link text-white" @click="logOut()">LOG OUT</a></li>
        </ul>
        <ul v-else class="navbar-nav ml-5">
          <li class="nav-item"><router-link to="/home" class="nav-link text-white">JOB OFFERTS</router-link></li>
          <li class="nav-item"><router-link to="/login" class="nav-link text-white">SIGN IN</router-link></li>
          <li class="nav-item"><router-link to="/register" class="nav-link text-white">SIGN UP</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
    return {
      logged: false,
      token: 0,
    }
  },
  beforeMount() {
    if (localStorage.getItem('logged')) {
      try {
        this.logged = (localStorage.logged === 'true');
        this.token = parseInt(JSON.parse(localStorage.getItem('token')));
      } catch (error) {
        this.logged = false;
        this.token = 0;
      }
    }
  },
  methods: {
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
