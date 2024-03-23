<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
              <div class="circle-1" >
                <img src="/img/logo.png"
                     alt="Logo" @click="goToLanding()"/>
              </div>
            </div>
            <h2 class="text-justify text-center title-login">Sign in to Jobi-App</h2>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <template>
                          <div class="login-page-container d-flex f-column justify-center align-center">
                            <div class="login-form d-flex f-column no-social1">
                              <div class="form-box">
                                <div class="form-input email d-flex f-column">
                                  <input id="email-input" type="text" name="username" placeholder=" " v-model="username">
                                  <label for="email-input">Username</label>
                                  <span class="error-label d-none">Username is not correct</span>
                                </div>
                                <div v-if="pswHidden" class="form-input password d-flex f-column">
                                  <input id="password-input-hidden" class="error" type="password" name="password" placeholder=" " v-model="password">
                                  <label for="password-input-hidden">Password</label>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" @click="showPassword()">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                  </svg>
                                </div>
                                <div v-else class="form-input password d-flex f-column">
                                  <input id="password-input-showing" class="error" type="text" name="password" placeholder=" " v-model="password">
                                  <label for="password-input-showing">Password</label>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" @click="showPassword()">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                  </svg>
                                </div>
                                <div class="link forgot-password">
                                  Forgot password?
                                </div>
                                <div class="submit-button d-flex justify-center align-center" @click="logIn()">
                                  Log in
                                </div>
                                <div class="social-container d-none1">
                                  <div class="or-divider d-flex align-center">
                                    <div class="line"></div>
                                    <span>OR</span>
                                    <div class="line"></div>
                                  </div>
                                  <div class="social-button google d-flex align-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3.48C10.69 3.48 11.83 4.21 12.48 4.82L15.02 2.34C13.46 0.89 11.43 0 9 0C5.48 0 2.44 2.02 0.96 4.96L3.87 7.22C4.6 5.05 6.62 3.48 9 3.48Z" fill="#EA4335" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.19999C17.64 8.45999 17.58 7.91999 17.45 7.35999H9V10.7H13.96C13.86 11.53 13.32 12.78 12.12 13.62L14.96 15.82C16.66 14.25 17.64 11.94 17.64 9.19999Z" fill="#4285F4" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88 10.78C3.69 10.22 3.58 9.61996 3.58 8.99996C3.58 8.37996 3.69 7.77996 3.87 7.21996L0.96 4.95996C0.35 6.17996 0 7.54996 0 8.99996C0 10.45 0.35 11.82 0.96 13.04L3.88 10.78Z" fill="#FBBC05" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C11.43 18 13.47 17.2 14.96 15.82L12.12 13.62C11.36 14.15 10.34 14.52 9 14.52C6.62 14.52 4.6 12.95 3.88 10.78L0.97 13.04C2.45 15.98 5.48 18 9 18Z" fill="#34A853" />
                                    </svg>
                                    Login with Google
                                  </div>
                                  <div class="social-button facebook d-flex align-center justify-center">
                                    <div class="logo"></div>
                                    Login with Facebook
                                  </div>
                                </div>
                              </div>
                              <div class="signup text-center">
                                <span>Don’t have an account?</span>
                                <span class="link" @click="goToRegister()"> Sign up here</span>
                              </div>
                            </div>
                          </div>
                     </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL,LOGIN_ENDPOINT,URL_BACKOFFICE,ROLE_CANDIDAT} from '../store/constant'

export default {

  data() {
    return {
      username: '',
      password: '',
      addUserForm: {
        username: '',
        password: ''
      },
    
    };
  },
  methods: {
    goToLanding () {
      this.$router.replace({ path: '/' })
    },
    goToRegister () {
      this.$router.replace({ path: '/register' })
    },
    goToHomePage() {
      localStorage.setItem('token', this.token)
      localStorage.setItem('appliedOferts', '')
      localStorage.setItem('logged', 'true')
      this.$router.replace({ path: '/home', query: { token: this.token } })
    },
    showPassword () {
      this.pswHidden = !this.pswHidden
    },
    accountLoginAlert() {
      // Use sweetalert2
      this.$swal('Success', 'Account signed in successfully.', 'success')
    },
    errorInAccountAlert() {
      // Use sweetalert2
      this.$swal('Error', 'Username or password incorrect.\n Please fill all the gaps.', 'error')
    },
    loginErrorAlert (message) {
      // Use sweetalert2
      this.$swal('Error', message, 'error')
    },
    required (params) {
      for (const elem in params) {
        if (params[elem.toString()].length === 0) {
          return false
        }
      }
      return true
    },
    /* CLEANING INFO */
    initForm () {
      this.addUserForm.username = ''
      this.addUserForm.password = ''
    },
    logIn () {
      const parameters = {
        username: this.username,
        password: this.password
      }
      if (!this.required(parameters)) {
        this.errorInAccountAlert()
      } else {
        /*
      let profiles = this.profiles
        for (let i=0; i < profiles.length; i++) {
          let user = profiles[i].username
          let psw = profiles[i].password
          if (parameters.username === user && parameters.password === psw) {
            this.accountLoginAlert()
            this.logged = true
            this.token = profiles[i].id
            console.log('Account login successful')
            setTimeout(() => {
            this.goToHomePage()
          }, 2000)
          }
          else if (i+1 === profiles.length) {
            this.loginErrorAlert()
            this.initForm()
          }
        }
        */
        
        let email = parameters.username
          let password = parameters.password
        axios
        .post(API_BASE_URL+LOGIN_ENDPOINT,{email,password}) 
        .then(response => {
          if(response.data &&  response.data.role && response.data.role == ROLE_CANDIDAT)
          {
          this.token = response.data._id
            console.log('Account login successful')
            this.goToHomePage()
         //   this.accountLoginAlert()
           // this.logged = true
          }
          else if(response.data && response.data.role && response.data.role != ROLE_CANDIDAT){
            window.location.href = URL_BACKOFFICE;
          }
          
        })
        
        .catch(error => {
          console.log(error.response.data)
          this.loginErrorAlert(error.message)
            this.initForm()
        })
  
      }
    }
  },
  mounted() {
    this.logged = (localStorage.getItem('logged') === 'true');
    this.token = parseInt(localStorage.getItem('token'));

  }
};
</script>

<style>

</style>
