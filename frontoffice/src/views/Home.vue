<template>
  <div>
 
    <div class="container-fluid">
        <div class="row justify-content-center">

              <h1 class="h1-large text-center">
                Search Offerts
              </h1>

              <p class="font-weight-bold pt-1">
                In Jobi-App we know how difficult is to get your first job without experience.
                <strong>We've been there too!</strong> That's the reason we've created the perfect job finder.
                To begin using it, fill the requested forms and click the SHOW RESULTS button.
              </p>
        </div>
        
        <div class="row justify-content-center">

          <!-- First Column: search parameters and filters -->
          <div class="col-lg-4 mt-lg-0">

              <div class="ml-3 mr-3 face-img-container">
                <img v-if="userIsSearching & newSearchValid" class="face-img" src="img/theme/happy_face.png" alt="The Search will be valid" />
                <img v-else-if="userIsSearching & !newSearchValid" class="face-img" src="img/theme/sad_face.png" alt="The Search will provide no results" />
                <img v-else-if="!userIsSearching & newSearchValid" class="face-img" src="img/theme/super_happy_face.png" alt="The Search has been a success" />
                <img v-else class="face-img" src="img/theme/super_sad_face.png" alt="The Search has been a failure" />
              </div>

              <div class="card shadow search-container">

                <div class="container pl-0 pr-0">
                  <div class="row">
                    <div class="col pr-0 nav-pills nav-fill nav-item">
                      <a
                        data-toggle="tab"
                        role="tab"
                        aria-selected="true"
                        style="cursor: pointer"
                        class="p-2 rounded-0 border-bottom shadow-none nav-item nav-link"
                        :class="{'active': !advanced }"
                        @click="advanced = false"
                        ><div>BASIC SEARCH</div>
                      </a>
                    </div>
                    <div class="col pl-0 nav-pills nav-fill nav-item">
                      <a
                        data-toggle="tab"
                        role="tab"
                        aria-selected="true"
                        style="cursor: pointer"
                        class="p-2 rounded-0 border-bottom shadow-none nav-item nav-link"
                        :class="{'active': advanced }"
                        @click="advanced = true"
                        ><div>OTHER FILTERS</div>
                      </a>
                    </div>
                  </div>
                </div>
                <!---->


                <div class="card-body">
                  <div
                    class="tab-pane fade active show"
                    style="height: 100px;"
                    aria-expanded="true"
                  >
                    <div id="home-form-search" v-if="!advanced" class="input-group">
                      <!---->
                      <div id="home-form-search-what" class="input-group mb-2 border-2">

                        <base-dropdown tag="div" style="width:100% !important" menuClasses="my-dropdown">
                            <template v-slot:title>
                              <div class="input-group">
                                <input
                                  aria-describedby="addon-right addon-left"
                                  placeholder="WHAT"
                                  class="form-control dropdown-input border-right-0"
                                  v-model="what"
                                  :class="[
                                    //{ 'border-primary': (!userIsSearching) && whatIsValid },
                                    //{ 'border-danger': (!userIsSearching) && !whatIsValid },
                                  ]"
                                  @click="userIsSearching = true; what = ''; "
                                />
                                <div class="input-group-append">
                                  <span
                                    class="input-group-text border-left-0"
                                    :class="[
                                      //{ 'text-primary border-primary': userIsSearching && whatIsValid },
                                      //{ 'text-danger border-danger': userIsSearching && !whatIsValid },
                                    ]"
                                    ><i class="ni ni-zoom-split-in"></i
                                  ></span>
                              </div>

                                </div>
                            </template>
                            <div v-if="what.length">
                              <li class="dropdown-content" v-for="(item, index) in uniqueTitlesFiltered"
                                :key="index" @click="selectWhat">
                                {{ item }}
                              </li>
                            </div>
                            
                        </base-dropdown>

                        <!---->
                      </div>

                      <div id="home-form-search-where" class="input-group">
                        <base-dropdown tag="div" style="width:100% !important" menuClasses="my-dropdown">
                            <template v-slot:title>
                              <div class="input-group">
                                <input
                                  aria-describedby="addon-right addon-left"
                                  placeholder="WHERE"
                                  class="form-control dropdown-input border-right-0"
                                  v-model="where"
                                  :class="[
                                    //{ 'border-primary': userIsSearching && whereIsValid },
                                    //{ 'border-danger': userIsSearching && !whereIsValid },
                                  ]"
                                  @click="userIsSearching = true; where = ''; "
                                />
                                <div class="input-group-append">
                                  <span
                                    class="input-group-text border-left-0"
                                    :class="[
                                      //{ 'text-primary border-primary': userIsSearching && whereIsValid },
                                      //{ 'text-danger border-danger': userIsSearching && !whereIsValid },
                                    ]"
                                    ><i class="ni ni-pin-3"></i
                                  ></span>
                              </div>

                                </div>
                            </template>
                            <div v-if="where.length">
                              <li class="dropdown-content" v-for="(item, index) in uniqueLocationsFiltered"
                                  :key="index" @click="selectWhere">
                                  {{ item }}
                              </li>
                            </div>
                        </base-dropdown>
                      </div>

                    </div>

                    <div id="home-form-filter" v-else class="input-group">
                      <div id="home-form-education" class="input-group mb-2">
                        <base-dropdown tag="div" style="width:100% !important" menuClasses="my-dropdown">
                            <template v-slot:title>
                              <div class="input-group">
                                <input
                                  aria-describedby="addon-right addon-left"
                                  placeholder="EDUCATION"
                                  class="form-control dropdown-input border-right-0"
                                  v-model="education"
                                  :class="[
                                    //{ 'border-primary': userIsSearching && educationIsValid },
                                    //{ 'border-danger': userIsSearching && !educationIsValid },
                                  ]"
                                  @click="userIsSearching = true; education = ''; "
                                />
                                <div class="input-group-append">
                                  <span
                                    class="input-group-text border-left-0"
                                    :class="[
                                      //{ 'text-primary border-primary': userIsSearching && educationIsValid },
                                      //{ 'text-danger border-danger': userIsSearching && !educationIsValid },
                                    ]"
                                    ><i class="ni ni-books"></i
                                  ></span>
                              </div>

                                </div>
                            </template>
                            <li class="dropdown-content" v-for="(item, index) in uniqueEducationsFiltered"
                                :key="index" @click="selectEducation">
                                {{ item }}
                            </li>
                        </base-dropdown>
                      </div>

                      <div id="home-form-category" class="input-group">
                        <base-dropdown tag="div" style="width:100% !important" menuClasses="my-dropdown">
                            <template v-slot:title>
                              <div class="input-group">
                                <input
                                  aria-describedby="addon-right addon-left"
                                  placeholder="CATEGORY"
                                  class="form-control dropdown-input border-right-0"
                                  v-model="category"
                                  :class="[
                                    //{ 'border-primary': userIsSearching && categoryIsValid },
                                    //{ 'border-danger': userIsSearching && !categoryIsValid },
                                  ]"
                                  @click="userIsSearching = true; category = ''; "
                                />
                                <div class="input-group-append">
                                  <span
                                    class="input-group-text border-left-0"
                                    :class="[
                                      //{ 'text-primary border-primary': userIsSearching && categoryIsValid },
                                      //{ 'text-danger border-danger': userIsSearching && !categoryIsValid },
                                    ]"
                                    ><i class="ni ni-briefcase-24"></i
                                  ></span>
                              </div>

                                </div>
                            </template>
                            <li class="dropdown-content" v-for="(item, index) in uniqueCategoriesFiltered"
                                :key="index" @click="selectCategory">
                                {{ item }}
                            </li>
                        </base-dropdown>
                      </div>
                    </div>

                  </div>
                </div>

                <button id="home-form-btn"
                    class="btn btn-icon btn-default btn-style"
                    @click="search"
                  >
                    <!----><!----><!---->
                    <span class="btn-inner--icon"
                      ><i class="ni ni-atom"></i
                    ></span>
                    SHOW RESULTS
                </button>

              </div>

          </div>

          <!--_Second Column: offerts list -->
          <div class="col-lg-8 mt-3">
            
            <!-- DISPLAY OFFERTS -->
            
            <div v-if="lastSearchValid" id="home-results">
              <div class="mb-3 ml-4 mr-4">
                <h4>
                  Offerts related to
                  <span class="font-weight-bold text-uppercase">
                    {{ lastWhat }}
                  </span>
                </h4>
                <small class="text-uppercase font-weight-bold">
                  {{ lastResultList.length }} results in {{ lastWhere }}
                </small>

                <small v-if="lastCategory.length > 0" class="font-weight-bold">
                  Category: {{ lastCategory}}
                </small>

                <small v-if="lastEducation.length > 0" class="font-weight-bold">
                  Education: {{ lastEducation}}
                </small>

                <hr class="mt-0" style="border: 1px solid black" />
              </div>

              <div class="row justify-content-center mb-3 ml-4 mr-4"></div>
              <ul id="offerts-panel">
                <li v-for="item in lastResultList" :key="item._id" @click="openOffert(item._id)">
                  <offert-card>
                    <template #title> {{ item.title }} </template>
                    <template #description>
                      {{ item.description.substring(0, 180) + "..." }}
                    </template>

                    <template #company> {{ item.company }} </template>
                    <template #location> {{ item.location }} </template>
                    <template #salary> {{ item.salary }} </template>
                  </offert-card>
                </li>
              </ul>
            </div>

            <!-- FEEDBACK Messages
            <div v-else-if="firstTimeSearch" id="home-error-results">
              <div class = "row justify-content text-center">
                <h4> Oooh... parece que no se han encontrado resultados para tus parámetros de búsqueda.</h4>
              </div>
            </div>

            <div v-else id="home-no-results">
              <div class = "row justify-content text-center">
                <h4> Introduce los parámetros de búsqueda.</h4>
              </div>
            </div>
            -->

          </div>

        </div>
      </div>
  </div>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import BaseDropdown from '../components/BaseDropdown.vue';
import TextDropdown from "./components/TextDropdown";
import OffertCard from "./components/OffertCard.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import ProgressSection from "./components/JavascriptComponents/ProgressPagination";
import axios from 'axios'
import {API_BASE_URL,GET_ALL_OFFRE_ACTIVE_URL} from '../store/constant'

export default {
  name: "home",
  components: {
    flatPicker,
    BaseDropdown,
    TextDropdown,
    TabsSection,
    ProgressSection,
    OffertCard,
  },

  data() {
    return {
      username: '',
      token: 0,
      what: "",
      where: "",
      category: "",
      education: "",

      dates: {
        simple: "2024-04-17",
      },

      advanced: false,

      //showResults: false,
      //searchPerformed: false,
      lastSearchValid: false,
      lastWhat: "",
      lastWhere: "",
      lastEducation:"",
      lastCategory:"",
      lastResultList: [],

      userIsSearching: false,
      firstTimeSearch: false,

      // TODO: json request from url route
      listaOfertas: [
       
      ],

    };
  },
  beforeMount() {
    axios
        .get(API_BASE_URL+GET_ALL_OFFRE_ACTIVE_URL) 
        .then(response => {
          this.listaOfertas = response.data
        })

    if (localStorage.getItem('token')) {
      try {
        this.token = localStorage.getItem('token');
   
        if (this.token === undefined || this.token ==="") {
          this.username = "noUser"
    } else {
      this.username = 'mohamed'
    }
      } catch(error) {
        this.token = 0;
      }
    }
    console.log(this.$route.query)
   
  },

  methods: {
    // Searches and updates the last page state
    search(event) {
      //console.log(event)
      this.lastWhat = ("".includes(this.what))? "ALL": this.what;
      this.lastWhere = ("".includes(this.where))? "ESPAÑA" : this.where;
      this.lastEducation = this.education;
      this.lastCategory = this.category;
      this.lastResultList = this.listaOfertasFiltrada;
      this.lastSearchValid = this.newSearchValid;
      this.userIsSearching = false;
      this.firstTimeSearch = true;
    },

    selectWhat(event){
      //console.log(event.target.firstChild.data);
      this.what = event.target.firstChild.data.replace(/(^\s+)|(\s+$)/g, '');
    },

    selectWhere(event){
      //console.log(event.target.firstChild.data);
      this.where = event.target.firstChild.data.replace(/(^\s+)|(\s+$)/g, '');
    },

    selectCategory(event){
      //console.log(event.target.firstChild.data);
      this.category = event.target.firstChild.data.replace(/(^\s+)|(\s+$)/g, '');
    },

    selectEducation(event){
      //console.log(event.target.firstChild.data);
      this.education = event.target.firstChild.data.replace(/(^\s+)|(\s+$)/g, '');
    },

    openOffert(offertID) {
      this.$router.replace({ path: `/oferts/${offertID}`, query: { username: this.username, token: this.token, offertID: offertID } })
    }

  },

  computed: {

    // Validate Input Functions
    whatIsValid() {
      return this.uniqueTitlesFiltered.length > 0;
    },

    whatIsInvalid() {
      return this.uniqueTitlesFiltered.length === 0;
    },

    whereIsValid() {
      return this.uniqueLocationsFiltered.length > 0;
    },

    whereIsInvalid() {
      return this.uniqueLocationsFiltered.length === 0;
    },

    educationIsValid() {
      return this.uniqueEducationsFiltered.length > 0;
    },

    educationIsInvalid() {
      return this.uniqueEducationsFiltered.length === 0;
    },

    categoryIsValid() {
      return this.uniqueCategoriesFiltered.length > 0;
    },

    categoryIsInvalid() {
      return this.uniqueCategoriesFiltered.length === 0;
    },

    newSearchValid() {
      return (this.listaOfertasFiltrada.length > 0);
    },

    // Computed just at the beginning!
    uniqueTitles(){
      let mylist = [];
      for (let item of this.listaOfertas){
        if (!(mylist.includes(item.title))){
          mylist.push(item.title);
        }
      }
      return mylist
    },

    uniqueLocations(){
      let mylist = [];
      for (let item of this.listaOfertas){
        if (!(mylist.includes(item.location))){
          mylist.push(item.location);
        }
      }
      return mylist;
    },

    uniqueCategories(){
      let mylist = [];
      for (let item of this.listaOfertas){
        if (!(mylist.includes(item.category))){
          mylist.push(item.category);
        }
      }
      return mylist;
    },

    uniqueEducations(){
      let mylist = [];
      for (let item of this.listaOfertas){
        if (!(mylist.includes(item.education))){
          mylist.push(item.education);
        }
      }
      return mylist;
    },

    //Filtering, computed on the fly
    uniqueTitlesFiltered(){
      return this.uniqueTitles.filter(title =>
        title.toUpperCase().startsWith( this.what.toUpperCase() )
      ).slice(0,5);
    },

    uniqueLocationsFiltered(){
      return this.uniqueLocations.filter(location =>
        location.toUpperCase().startsWith( this.where.toUpperCase() )
      ).slice(0,5);
    },

    uniqueCategoriesFiltered(){
      return this.uniqueCategories.filter(category =>
        category.toUpperCase().startsWith( this.category.toUpperCase() )
      ).slice(0,5);
    },

    uniqueEducationsFiltered(){
      return this.uniqueEducations.filter(education =>
        education.toUpperCase().startsWith( this.education.toUpperCase() )
      ).slice(0,5);
    },

    // async offerts list having applyed all the input restrictions
    listaOfertasFiltrada(){
      return this.listaOfertas.filter((item) => {
          return (
            item["title"].toUpperCase().includes(this.what.toUpperCase()) &
            item["location"].toUpperCase().includes(this.where.toUpperCase()) &
            item["category"].toUpperCase().includes(this.category.toUpperCase()) &
            item["education"].toUpperCase().includes(this.education.toUpperCase())
            // We can add here more filters!
          );
        });
    },

  },

};
</script>

<!-- Can't be scoped if we pretend to export label-style outside -->
<style>

.face-img{
  max-width: 80%;
}

.face-img-container{
  z-index: -1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
}

.search-container{
  margin-top: 55% !important;
  margin-bottom: 20%;
}

</style>
../componentsxyz/BaseDropdown.vue