<template>
    <div class="Home">
        <h1>helloe</h1>
        <!-- Articles -->
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        


    </div>
</template>

<script>
import axios from 'axios'
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
        /* axios
         .get("/article/") 
         .then(response => {
             this.articles = response.data
         })*/
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