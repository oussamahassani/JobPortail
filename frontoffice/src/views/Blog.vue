<template>
  <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-card>

      </template>
    <div class="container-fluid">
        <div class="d-flex">
        <b-col cols="3">
        <!-- Sidebar -->
        <b-card>
          <b-card-header>
            Category Articles
          </b-card-header>
          <b-list-group>
            <b-list-group-item @click="allArticles()">all Articles</b-list-group-item>
            <div v-if="category.length" v-for="cat in category" :key="cat.name">
           
            <b-list-group-item  @click="callFetchArticleDataByCategory(cat._id)">{{cat.name}}</b-list-group-item>
            </div>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col>
        <div v-if="articles.length > 0">
          
        <article  v-for="article in articles" :key="article.slug">
      <h3>
        <router-link :to="`/article/${article._id}`">
          {{ article.title }}
        </router-link>
      </h3>
      <div>
        {{ article.description }}
        <router-link :to="`/article/${article._id}`">
          + continue reading
        </router-link>
      </div>
      <hr>
    </article>
</div>
    <!-- Place v-else immediately after the v-for loop -->
    <div class="alert alert-info" v-else>
      There are no posts.
    </div>
  </b-col>
   
    </div>
</div>
</b-skeleton-wrapper>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL,ALL_ARTICLE_ENDPOINT,CATEGORY_ENDPOINT,FILTRED_ARTICLE_ENDPOINT} from '../store/constant'
import {BRow, BCol, BCard, BCardHeader, BListGroup, BListGroupItem,BSkeletonWrapper,BSkeleton } from 'bootstrap-vue';

export default {
    name: 'HomeView',
    components: {
    // Register imported BootstrapVue components

    BRow,
    BCol,
    BCard,
    BCardHeader,
    BListGroup,
    BListGroupItem,
    BSkeletonWrapper,
    BSkeleton
  },
    data() {
        return {
            articles: '',
            category:[],
            loading : false,
        }
    },
    mounted() {
      this.loading = true
        this.allArticles()
       this.callFetchCategoryData()
       this.loading = false
    },
    methods: {
    callFetchCategoryData() {
        axios
         .get(API_BASE_URL+CATEGORY_ENDPOINT) 
         .then(response => {
             this.category = response.data
         })
    },
    callFetchArticleDataByCategory(id) {
        axios
         .post(API_BASE_URL+FILTRED_ARTICLE_ENDPOINT ,{category: id}) 
         .then(response => {
             this.articles = response.data
         })
    },
     allArticles (){
    axios
         .get(API_BASE_URL+ALL_ARTICLE_ENDPOINT) 
         .then(response => {
             this.articles = response.data
         })
},
log (x){
    console.log(x)
}
  },
    computed: {

        filteredArticles() {
            //                     return this.articles.filter(a => a.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase()))

            return this.articles

        },

    },

}
</script>
<style scoped>
article a {
    text-decoration: none;
}
</style>