<template>
    <div class="container">
      
        <!-- Articles -->
        <h2>{{ article.title ? article.title : "" }}</h2>
        <p>{{ article.description ? article.description : "" }}</p>
        


    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL,ONE_ARTICLE_ENDPOINT} from '../store/constant'
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
            article: '',
            allarticles: ''
        }
    },
    mounted() {

        this.allarticles = generateFakeData()
        this.article = this.allarticles.filter(el => el.slug == this.$route.params.slug)[0]
        axios
        .get(API_BASE_URL+ONE_ARTICLE_ENDPOINT+`/${this.$route.params.slug}`) 
        .then(response => {
        this.article = response.data
      console.log(response);
        })
        .catch(error => {
          this.error = true
        })
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