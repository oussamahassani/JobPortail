import { createStore } from 'vuex'
import axios from 'axios'
import { API_BASE_URL, CATEGORY_ENDPOINT } from './constant'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    searchValue: '',
    category: [],
    selectedArticle: null,
    allArticle: []
  },
  getters: {
  },
  mutations: {

    login(state, token) {
      state.isAuthenticated = true
      state.token = token
      localStorage.setItem("token", token)
      axios.defaults.headers.common['Authorization'] = "Token " + token

    },

    logout(state) {
      state.isAuthenticated = false
      state.token = ''
      axios.defaults.headers.common['Authorization'] = ""
      localStorage.removeItem("token")
    },
    getAllCategoryBlog(state, data) {
      state.category = data;
    },
    getAllArticleBlog(state, data) {
      state.allArticle = data;
    },


  },
  actions: {
    onStart(context) {
      let token = localStorage.getItem('token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token

        axios
          .get('/api/auth/users/me/')
          .then(response => {
            context.commit('login', token)


          })
          .catch(error => {
            context.commit('logout')

          })

      }
    },
    fetchAllCategoryData(context) {
      axios.get(API_BASE_URL + CATEGORY_ENDPOINT)
        .then(response => {
          // Mettre à jour la catégorie avec les données reçues
          context.commit('getAllCategoryBlog', response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de la catégorie :', error);
        });
    },
    fetchAllArticleData(context) {
      axios.get(API_BASE_URL + ALL_ARTICLE_ENDPOINT)
        .then(response => {
          // Mettre à jour la catégorie avec les données reçues
          context.commit('getAllArticleBlog', response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de la catégorie :', error);
        });
    },
  },
  modules: {
  }
})