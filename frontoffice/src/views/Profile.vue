<template>
  <div id="profile">
    <div id="#profile" class="page-header mt-0 clear-filter">
      <parallax
          class="page-header-image"
          style="background-image:url('img/theme/green_blue_bg.jpg')"
      >
      </parallax>
      <div id="profileContainer" class="container">
          <div class="card-profile border-0">
            <div class="px-4">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img  v-bind:src="currentProfile.image" class="rounded-profile-photo photo-container" shadow>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <h3 class="profile-title retroshadow">{{ this.currentProfile.name}} {{this.currentProfile.surnames}}</h3>
        <p class="category">{{this.currentProfile.job }}</p>
        <div class="content">
          <h3 class="title">About me</h3>
          <p class="description">{{this.currentProfile.aboutMe}}</p>
        </div>
      </div>
    </div>
    <div class="section">
        <div class="button-container">
          <a
              id="updateProfile"
              href="#profile"
              class="btn btn-default rounded-circle btn-lg"
              rel="tooltip"
              title="Update Profile"
              @click="goToUpdateProfile()"
         
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
            Update profile
          </a>
          <a
              id="cv"
              href="#profile"
              class="btn btn-default rounded-circle btn-lg"
              rel="tooltip"
              title="CV"
              @click="inProgress()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
            </svg>
            CV
          </a>
          <a
              id="appliedoferts"
              href="#profile"
              class="btn btn-default rounded-circle btn-lg"
              rel="tooltip"
              title="AppliedOferts"
              @click="goToAppliedOferts()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
            </svg>
            Applied Oferts
          </a>
        </div>
    </div>
    <div class="section">
      <h4 class="title text-center">My Portfolio</h4>
      <div class="container">
        <div class="row-grid">
          <tabs fill class="flex-column flex-md-row">
            <div shadow slot-scope="{activeTabIndex}">
              <tab-pane key="tab1">
                <template slot="title" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                  </svg>
                  PROFILE SUMMARY
                </template>
                <div class="mb-3">
                  <small class="text-uppercase"><b>Profile Type: </b>{{currentProfile.profile_type}}</small>
                </div>
                <div class="mb-3">
                  <small class="text-uppercase"><b>Interests:</b></small>
                </div>
                <div v-for="(interest) in currentProfile.interests" class="container" v-bind:key="interest.name">
                    <small class="btn-1 buttonInterests mt-1" outline rounded >{{ interest.name }}</small>
                </div>
              </tab-pane>
              <tab-pane key="tab2">
                <template slot="title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                  </svg>
                  LANGUAGES
                </template>
                <div v-for="(language) in currentProfile.languages" class="cards-list" v-bind:key="language.name">
                  <div class="cardLanguage">
                    <div class="card_image"></div>
                    <div class="card_title title-white">
                      <small class="text-white font-weight-bold">{{ language.name }}</small>
                      <p class="text-white font-weight-bold"> {{language.level}} Level</p>
                      <p v-if="language.certificateID" class="text-white font-weight-bold"> There is a certificate!</p>
                      <p v-else class="text-white font-weight-bold"> There is not a certificate.</p>
                    </div>
                  </div>
                </div>
              </tab-pane>
              <tab-pane key="tab3">
                <template slot="title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                  CERFICATES
                </template>
                <div v-for="(certificate) in currentProfile.certificates" class="cards-list" v-bind:key="certificate.title">
                  <div class="cardLanguage">
                    <div class="card_image"></div>
                    <div class="card_title title-white">
                      <small class="text-white font-weight-bold">{{ certificate.title }}</small>
                      <p class="text-white font-weight-bold">Certificate issued by {{certificate.expeditionCompany}}</p>
                      <p class="text-white font-weight-bold">on the date of {{certificate.expeditionDate}}</p>
                    </div>
                  </div>
                </div>
              </tab-pane>
              <tab-pane key="tab4">
                <template slot="title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                    <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
                  </svg>
                  EDUCATION
                </template>
                <div v-for="(education) in currentProfile.education" class="cards-list" v-bind:key="education.title">
                  <div class="cardLanguage">
                    <div class="card_image"></div>
                    <div class="card_title title-white">
                      <small class="text-white font-weight-bold">{{ education.title }} ({{education.educationType}})</small>
                      <p class="text-white font-weight-bold">Education given in {{education.institutionName}}</p>
                      <p class="text-white font-weight-bold">Starting on the {{education.dateStart}} and finishing on the {{education.dateEnd}}</p>
                    </div>
                  </div>
                </div>
              </tab-pane>
              <tab-pane key="tab5">
                <template slot="title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                  </svg>
                  EXPERIENCE
                </template>
                <div v-if="thereIsExperience">
                  <div v-for="(experience) in currentProfile.experience" class="cards-list" v-bind:key="experience.title">
                    <div class="cardLanguage">
                      <div class="card_image"></div>
                      <div class="card_title title-white">
                        <small class="text-white font-weight-bold">{{ experience.title }}</small>
                        <p class="text-white font-weight-bold">Experience developed in {{experience.companyName}}</p>
                        <p class="text-white font-weight-bold">Starting on the {{experience.dateStart}} and finishing on the {{experience.dateEnd}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="image-container">
                  <img width="150" height="150" alt="noExperience" src="/img/theme/404_cat.jpg/">
                  <h5 class="text-center noExperienceText">There is no experience yet, let's get some!</h5>
                </div>
              </tab-pane>
            </div>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabPane from "@/components/Tabs/TabPane";
import Tabs from "@/components/Tabs/Tabs";
import Parallax from "@/views/components/Parallax";
import axios from 'axios'
import {API_BASE_URL,GET_PROFILE_USER_ENDPOINT} from '../store/constant'
export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane,
    Parallax
   },
  data () {
    return {
      token: 0,
      thereIsExperience: true,
      currentProfile : []
    }
  },
  beforeMount() {
    if (localStorage.getItem('token')) {
      try {
        this.token = localStorage.getItem('token');
        
        axios
        .get(API_BASE_URL+GET_PROFILE_USER_ENDPOINT+this.token) 
        .then(response => {
          this.currentProfile = response.data
        this.thereIsExperience = this.currentProfile.experience.length >0;
        })
        
        .catch(error => {
         console.log(error)
        })
       
      } catch(error) {
        console.log(error)
        this.token = 0;
      }
    }
  },
  methods: {
    inProgress() {
      this.$swal('Warning', 'This feature is still in construction\n Please, try other features.', 'warning')
    },
    goToAppliedOferts () {
      this.$router.replace({ path: '/appliedOferts' })
    },
    goToUpdateProfile () {
      this.$router.replace({ path: `/updateprofile/${this.token}` })
    }
  }
};
</script>

<style>
</style>
