<template>
  <div id="ofert">
    <div class="page-header clear-filter" filter-color="green">
      <parallax
          class="page-header-image"
          style="background-image:url('img/theme/dark_green_bg.png')"
      >
      </parallax>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row-grid">
              <h1 class="heading-title">{{ currentOffert.title }}</h1>
            </div>
            <br>
            <div class="row-grid">
              <h2 class="heading-subtitle">{{ currentOffert.company}}</h2>
            </div>
            <br>
            <div class="bg-gradient-ofert rounded border">
              <h2 class="heading-section pl-30 pt-30">Summary:</h2>
              <h3 class="heading-section pl-50 pt-10" id="creationDate">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                {{ currentOffert.release_date }}
              </h3>
              <br>
              <h3 class="heading-section pl-50" id="workPlace">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                {{ currentOffert.location }}
              </h3>
              <br>
              <h3 class="heading-section pl-50" id="workActivity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                </svg>
                {{ currentOffert.work_time }}
              </h3>
              <br>
              <h3 class="heading-section pl-50" id="isActive">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                </svg>
                {{ currentOffert.status }}
              </h3>
              <br>
            </div>
            <br>
            <div class="row-grid">
              <button class="btn-lg w-100" rounded @click="applyOffert()">APPLY FOR THIS OFERT</button>
            </div>
          </div>
          <div class="col-3">
            <img class="photo-container" v-bind:src="getCompanyImg()" alt="CompanyImage" />
            <div class="mb-3 mt-5">
              <small class="text-uppercase">CATEGORIES</small>
            </div>
            <small class="btn-1" >{{ currentOffert.category }}</small>
          </div>
        </div>
      </div>
    </div>
    <div class="row-grid"><br></div>
    <div class="container-fluid">
      <div class="row-grid">
        <b-tabs fill class="flex-column flex-md-row">
          
            <b-tab key="tab1">
              <template slot="title" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-quote-fill" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
                </svg>
                DESCRIPTION
              </template>
              <p class="description">{{ currentOffert.description }}</p>
            </b-tab>

            <b-tab key="tab2">
              <template slot="title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
                REQUIREMENTS
              </template>

              <i class="fa fa-check-square" aria-hidden="true"></i> <small> Modality: {{ currentOffert.modality }}</small><br>
              <i class="fa fa-check-square" aria-hidden="true"></i> <small> Contract type: {{ currentOffert.agreement }}</small> <br>
              <i class="fa fa-check-square" aria-hidden="true"></i> <small> Salary: {{ currentOffert.salary }}</small><br>
              <i class="fa fa-check-square" aria-hidden="true"></i> <small> Education required: {{ currentOffert.education }}</small><br>
            </b-tab>

      
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "./components/Parallax";
import axios from 'axios'
import {API_BASE_URL,GET_ONE_OFFRE,POST_APPLIED_OFFERT} from '../store/constant'
import { BTabs, BTab } from 'bootstrap-vue';

export default {
  name: "Oferts",
  components: {
    Parallax,
    BTabs,
    BTab
  },
  data () {
    return {
      ofertID: 0,
      username: '',
      companyImg: 'img/theme/on_progress.png',
      token: 0,
      ofertsAlreadyApplied: '',
      listaOfertas: [
      ],
      currentOffert: [],
    }
  },
  methods: {
    applyOffert () {
      let logged = (localStorage.logged === 'true')
      let idOfert = this.ofertID
      console.log(this.ofertsAlreadyApplied.includes(idOfert))
   
      if (!logged) {
          this.$swal('Warning', 'You have not signed in!\n Please, log in your account for applying.', 'warning')
      } else if (this.ofertsAlreadyApplied.includes(idOfert)) {
        this.$swal('Warning', 'You have already applied for this ofert!\n Let´s check other ones!', 'warning')
      }
      else {
        let token = localStorage.getItem('token')
        if(token){
        axios
        .post(API_BASE_URL+POST_APPLIED_OFFERT,{job:idOfert,applicant:token,status:'applied'}) 
        .then(response => {
         console.log(response)
        })
        
        .catch(error => {
         console.log(error)
        })
      }
        this.$swal('Success', 'You have successfully applied for this ofert!', 'success')
        this.ofertsAlreadyApplied.push(idOfert)
        localStorage.setItem('appliedOferts',  this.ofertsAlreadyApplied)
        this.$router.replace({ path: '/appliedOferts' })
      }
    },
    getCompanyImg() {
      return 'img/theme/company_logo_' +  String(Math.floor(Math.random() * 6)) + '.png'
    },
  },
  beforeMount () {
    this.ofertID = this.$route.query.offertID
    console.log('opps')
    axios
        .get(API_BASE_URL+GET_ONE_OFFRE+this.ofertID) 
        .then(response => {
          this.currentOffert = response.data
        })
        
        .catch(error => {
         console.log(error)
        })
   if(localStorage.getItem('appliedOferts')){
    let splitted_text = localStorage.getItem('appliedOferts').split(",");
    if (splitted_text.length > 0) {
      
      this.ofertsAlreadyApplied = splitted_text.filter(value => value != 'NAN');
      console.log(ofertsAlreadyApplied);
    } else {
      this.ofertsAlreadyApplied = []
    }
  }
  else {
    this.ofertsAlreadyApplied = []
  }

    if (this.$route.query.username === undefined) {
      this.username = "noUser"
    } else {
      this.username = this.$route.query.username
    }
    if (this.$route.query.token === undefined) {
      this.token = 0
    } else {
      this.token = this.$route.query.token
    }

  }

}
</script>

<style scoped>

</style>
