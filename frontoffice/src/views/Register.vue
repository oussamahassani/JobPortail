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
      <h2 class="text-justify text-center title-login">Sign up to GetIn-EXP</h2>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <template>
            <div class="login-page-container d-flex f-column justify-center align-center">
              <div class="login-form d-flex f-column no-social1">
                <div class="form-box">
                  <div class="form-input email d-flex f-column">
                    <input id="name-input" type="text" name="name" placeholder=" " v-model="firstname">
                    <label for="name-input">First name</label>
                    <span class="error-label d-none">First name is not correct</span>
                  </div>
                  <div class="form-input register d-flex f-column">
                    <input id="surnames-input" type="email" name="surnames" placeholder=" " v-model="surnames">
                    <label for="surnames-input">Last Name</label>
                    <span class="error-label d-none">Surnames is not correct</span>
                  </div>
                  <div class="form-input register d-flex f-column">
                    <input id="email-input" type="email" name="email" placeholder=" " v-model="email">
                    <label for="email-input">Email</label>
                    <span class="error-label d-none">Email is not correct</span>
                  </div>
                  <div class="form-input register d-flex f-column">
                    <input id="username-input" type="text" name="username" placeholder=" " v-model="username">
                    <label for="username-input">Username</label>
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
                  <div v-if="repeatPswHidden" class="form-input password d-flex f-column">
                    <input id="repeatPassword-input-hidden" class="error" type="password" name="password" placeholder=" " v-model="repeatPassword">
                    <label for="password-input-hidden">Repeat Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" @click="showRepeatedPassword()">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                  </div>
                  <div v-else class="form-input password d-flex f-column">
                    <input id="repeatPassword-input-showing" class="error" type="text" name="password" placeholder=" " v-model="repeatPassword">
                    <label for="password-input-showing">Repeat Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" @click="showRepeatedPassword()">
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                    </svg>
                  </div>
                  <div class="submit-button signUp d-flex justify-center align-center" @click="signUp()">
                    Sign up
                  </div>
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
export default {

  data() {
    return {
      email: '',
      firstname: '',
      surnames: '',
      username: '',
      password: '',
      repeatPassword: '',
      registerUserForm: {
        email: '',
        firstname: '',
        surnames: '',
        username: '',
        password: '',
        repeatPassword: ''
      },
      logged: false,
      token: 0,
      pswHidden: true,
      repeatPswHidden: true,
      profiles: [
        {
          id: 0,
          name: "John",
          surnames:"Murray McCuffy",
          username: "johnMurray99",
          password: "1234",
          job:"Illustrator and graphic designer",
          cv: "52342432",
          profile_type: "Working",
          interests:[
            {
              name: "Photoshop"
            },
            {
              name: "3D Graphics"
            },
            {
              name: "Adobe"
            }
          ],
          languages:[
            {
              name: "English",
              level: "Native",
              certificateID: "None"
            },
            {
              name: "Spanish",
              level: "B2",
              certificateID: "C0-1"
            },
            {
              name: "French",
              level: "B1",
              certificateID: "C0-2"
            }
          ],
          experience:[
            {
              title: "Penguin random House Designer Internship",
              description: "Penguin Random House offers paid internship opportunities to learn about the world of book publishing! Opportunities are available in our Adult & Children’s divisions in business areas such as contracts, editorial, finance, graphic design, managing editorial, marketing, online marketing, production, publicity, sales, subsidiary rights, and operations.",
              dateStart: "01/02/21",
              dateEnd: "31/08/21",
              companyName: "Penguin Random House"
            }
          ],
          certificates:[
            {
              certificateID: "C0-1",
              title: "Diplomas de Español Como Lengua Extranjera B2",
              expeditionDate: "19/09/19",
              expeditionCompany: "Universidad de Salamanca"
            },
            {
              certificateID: "C0-2",
              title: "Diplôme d’Etudes en Langue Française B1",
              expeditionDate: "17/03/20",
              expeditionCompany: "Intitut Français"
            }
          ],
          education: [
            {
              title: "London Middle School",
              educationType: "Middle School",
              dateStart: "10/09/12",
              dateEnd: "23/06/16",
              institutionName: "London Public Middle School"
            },
            {
              title: "Humanistic Bachelor",
              educationType: "High School",
              dateStart: "01/09/16",
              dateEnd: "15/06/18",
              institutionName: "Queen Elisabeth II High School"
            }
          ]

        },
        {
          id: 1,
          name: "Fleur",
          surnames:"Blanchet Dupont",
          username: "blanchetFleur",
          password: "1234",
          job:"Machine Learning",
          cv: "34553",
          profile_type: "Searching",
          interests:[
            {
              name: "Writing"
            },
            {
              name: "Python"
            }
          ],
          languages:[
            {
              name: "English",
              level: "C1",
              certificateID: "C1-1"
            },
            {
              name: "German",
              level: "B2",
              certificateID: "C2-2"
            }
          ],
          experience:[
            {
              title: "Internship in Computer Vision",
              description: "With the aim of promoting science and innovation and to encourage research in highly talented young students, the Computer Vision Center hosts the Computer Vision Center Internship Program (prize). It is addressed to students, ideally during the last year of their undergraduate studies. The CVC offers these students a research environment that will constitute their first exposure to a research challenge.",
              dateStart: "10/04/21",
              dateEnd: "10/04/22",
              companyName: "CVFC"
            }
          ],
          certificates:[
            {
              certificateID: "C1-1",
              title: "CAE C1",
              expeditionDate: "23/09/19",
              expeditionCompany: "Cambridge English Certifications"
            },
            {
              certificateID: "C1-2",
              title: "GOETHE-ZERTIFIKAT B2",
              expeditionDate: "17/11/20",
              expeditionCompany: "Goethe Institut"
            }
          ],
          education: [
            {
              title: "Collège",
              educationType: "Middle School",
              dateStart: "10/09/12",
              dateEnd: "23/06/16",
              institutionName: "Institut de Paris"
            },
            {
              title: "Lycée",
              educationType: "High School",
              dateStart: "01/09/16",
              dateEnd: "15/06/18",
              institutionName: "Instituto de Vallecas"
            },
            {
              title: "Ingénierie de traitement de l'information",
              educationType: "Degree",
              dateStart: "01/09/18",
              dateEnd: "Current",
              institutionName: "L'universitè de Lyon"
            },
          ]
        },
        {
          id: 2,
          name: "Carmen",
          surnames:"Lozano Pelayo",
          username: "carmenLP",
          password: "1234",
          job:"Front End Developer",
          cv: "3r332",
          profile_type: "Other",
          interests:[
            {
              name: "React"
            },
            {
              name: "Web"
            },
            {
              name: "Apps"
            }
          ],
          languages:[
            {
              name: "English",
              level: "C1",
              certificateID: "C2-1"
            },
            {
              name: "Spanish",
              level: "Native",
              certificateID: "None"
            },
            {
              name: "Catalan",
              level: "Native",
              certificateID: "None"
            }
          ],
          experience:[
            {
              title: "NO EXPERIENCE",
              description: "",
              dateStart: "",
              dateEnd: "",
              companyName: ""
            }
          ],
          certificates:[
            {
              certificateID: "C2-1",
              title: "CAE C1",
              expeditionDate: "03/05/21",
              expeditionCompany: "Cambridge English Certifications"
            }
          ],
          education: [
            {
              title: "ESO",
              educationType: "Middle School",
              dateStart: "01/09/11",
              dateEnd: "17/06/15",
              institutionName: "Instituto de Vallecas"
            },
            {
              title: "Science-technologic Bachelor",
              educationType: "High School",
              dateStart: "01/09/15",
              dateEnd: "23/06/17",
              institutionName: "Instituto de Vallecas"
            },
            {
              title: "FrontEnd Developer Intensive Course",
              educationType: "Bootcamp",
              dateStart: "01/09/17",
              dateEnd: "02/02/18",
              institutionName: "IronHack"
            },
          ]
        }
      ]
    };
  },
  methods: {
    goToLanding () {
      this.$router.replace({ path: '/' })
    },
    goToLogin () {
      this.$router.replace({ path: '/login' })
    },
    showPassword () {
      this.pswHidden = !this.pswHidden
    },
    showRepeatedPassword () {
      this.repeatPswHidden = !this.repeatPswHidden
    },
    accountSignUpAlert() {
      // Use sweetalert2
      this.$swal('Success', 'Account created successfully.', 'success')
    },
    errorInPasswordAlert() {
      // Use sweetalert2
      this.$swal('Warning', 'Password and repeated password are incorrect.\n Please, enter the same values.', 'warning')
    },
    signUpErrorAlert () {
      // Use sweetalert2
      this.$swal('Error', 'There are missing values for your account.\n Please fill all the gaps.', 'error')
    },
    required (params) {
      for (const elem in params) {
        if (params[elem.toString()].length === 0) {
          return false
        }
      }
      return true
    },
    checkPsw (params) {
      return params["password"] === params["repeatPassword"];
    },
    /* CLEANING INFO */
    initForm () {
      this.registerUserForm.email = ''
      this.registerUserForm.firstname = ''
      this.registerUserForm.surnames= ''
      this.registerUserForm.username = ''
      this.registerUserForm.password = ''
      this.registerUserForm.repeatPassword = ''
    },
    signUp () {
      const parameters = {
        email: this.email,
        firstname: this.firstname,
        surnames: this.surnames,
        username: this.username,
        password: this.password,
        repeatPassword: this.repeatPassword
      }
      if (!this.required(parameters)) {
        this.signUpErrorAlert()
      } else if (!this.checkPsw(parameters)){
        this.errorInPasswordAlert()
      } else {
        this.accountSignUpAlert()
        this.goToLogin()
      }
    }
  },
};
</script>

<style>
.hr-black {
  border-top: 1px solid black;
}
</style>
