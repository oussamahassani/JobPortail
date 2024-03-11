<template>
    <footer class="page-footer bg-lighter font-small stylish-color-dark pt-4" style="padding-left: 0; alignment: bottom">
      <!-- Copyright -->
      <div class="footer-copyright text-center text-default py-3 ">© 2022 Copyright:
        <router-link to="/"> GetIn-Exp.com</router-link>
      </div>
      <!-- Copyright -->
    </footer>
</template>
<script>
export default {
  name: 'starter-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>

</style>
