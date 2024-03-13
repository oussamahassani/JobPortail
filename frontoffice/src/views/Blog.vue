<template>
    <div class="container">
       
        <!-- Articles -->
        <article v-if="articles.length" v-for="article in filteredArticles" :key="article.slug">
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
        <div class="alert alert-info" v-else>
            There is no any posts.
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL,ALL_ARTICLE_ENDPOINT} from '../store/constant'
const generateFakeData = () => {
    const fakeData = [];

    for (let i = 1; i <= 10; i++) {
        const article = {
            title: `Article ${i}`,
            description: `Description for Article ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            slug: `article-${i}`
        };

        fakeData.push(article);
    }

    return fakeData;
};
export default {
    name: 'HomeView',
    data() {
        return {
            articles: '',
        }
    },
    mounted() {

      //  this.articles = generateFakeData()
         axios
         .get(API_BASE_URL+ALL_ARTICLE_ENDPOINT) 
         .then(response => {
             this.articles = response.data
         })
    },
    methods: {
    callFetchCategoryData() {
      this.$store.dispatch('fetchAllCategoryData');
    },
    callFetchArticleData() {
      this.$store.dispatch('fetchAllArticleData');
    },
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