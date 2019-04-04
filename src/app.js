import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios'
import moment from 'moment'
window.moment = require('moment');
import './scss/style.scss';

import App from './App.vue';
import Category from './components/Category.vue';
import News from './components/News.vue';
import Home from './components/Home.vue';

Vue.use(Vuex)
Vue.use(VueRouter)


const store = new Vuex.Store({
    state: {
        news: []
    },
    getters: {
        news(state) {
            return state.news;
        }
    },
    mutations: {
        updateNews(state, payload) {
            state.news = payload;
        }
    },
    actions: {
        getNews(context) {
            axios.get('https://hero-riafan.ru/posts/get')
            .then((response) => {
                context.commit('updateNews', response.data.posts.data);
            })
        }
    },
})


const routes = [
  { path: '/', component: Home },
  { path: '/category/:title', component: Category },
  { path: '/news/:id', component: News }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})


new Vue({
  router,
  store,
  render: h => h(App),
  created () {

  }
}).$mount('#app')
