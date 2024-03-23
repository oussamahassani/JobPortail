<template>
  <div>
<b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-card>

      </template>
 

  <div class="mt-10">
    <div class="container">
      <div class="row">
        <h1 class="h1-large">
          Applied Oferts
        </h1>
      </div>
      <div class="row">
        <div v-if="thereAreOferts">
          <ul id="offerts-panel">
            <li v-for="item in currentOferts" :key="item._id" @click="openOffert(item)">
              <offert-card>
                <template #title> {{ item.title }} </template>
                <template #description>
                  <img class="img-wizard" v-bind:src="getWizard()" alt="WizardImage">
                </template>

                <template #company> {{ item.company }} </template>
                <template #location> {{ item.location }} </template>
                <template #salary> {{ item.salary }} </template>
              </offert-card>
            </li>
          </ul>
        </div>
        <div v-else>
          <img class="p-2 img-center" src='img/theme/404_noOferts.jpg' alt="NoOfertsApplied"/>
          <h3 class="text-center">Looks like you haven't applied for any ofert yet.<br>Let's get some started!</h3>
          <h5 class="text-center">Go to <router-link to="/home">Home</router-link></h5>
        </div>
      </div>
    </div>
  </div>
</b-skeleton-wrapper>
  </div>
</template>

<script>

import { BSkeletonWrapper,BSkeleton, BCard} from 'bootstrap-vue'

import OffertCard from "./components/OffertCard.vue";
import axios from 'axios'
import {API_BASE_URL,GET_OFFRE_BYIDS} from '../store/constant'
export default {
  name: "AppliedOferts",
  components: {
    OffertCard,
    BSkeletonWrapper,
    BSkeleton,
    BCard
  },
  data () {
    return {
      token: 0,
      loading : false,
      username: '',
      currentOferts: [],
      thereAreOferts: false,
      wizardSrc: '',
    }
  },
  beforeMount () {
    this.loading = true
    if (localStorage.getItem('appliedOferts')) {
      try {
        this.token = localStorage.getItem('token');

        let splitted_text = (localStorage.getItem('appliedOferts')).split(",");
  console.log("ffff",splitted_text);
        axios
        .post(API_BASE_URL+GET_OFFRE_BYIDS , {arrayOfIds:splitted_text}) 
        .then(response => {
          
          this.currentOferts = response.data
          console.log("cuurent offre",this.currentOferts)
          this.thereAreOferts = true
          this.loading = false
        })
        
        .catch(error => {
         console.log(error)
         this.currentOferts = []
         this.loading = false
        })
       
      } catch (error) {
        this.currentOferts = [];
        this.token = 0;
        console.log("applied offre",error)
        this.loading = false
      }
    }
    else {
      this.thereAreOferts = false
      this.loading = false 
    }
    if (this.currentOferts.length > 0) {
       this.thereAreOferts = true
       this.loading = false
       console.log("current offre",this.currentOferts)
    }
    if (this.$route.query.username === undefined) {
      this.username = "noUser"
    } else {
      this.username = this.$route.query.username
    }
  },
  methods: {
    getWizard () {
      return 'img/theme/wizard_' + String(Math.floor(Math.random() * 4)) + '.png'
    },
    openOffert(item) {
      this.$router.replace({ path: `/oferts/${item._id}`, query: { username: this.username, token: this.token, offertID: offertID } })
    }
  }
}
</script>

<style scoped>
.img-wizard {
  width: fit-content;
  height: 70px;
}
</style>
