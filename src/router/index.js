import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QuoteDetails from "@/views/QuoteDetails";
import SearchedQuotes from "@/views/SearchedQuotes";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Details',
    component: QuoteDetails
  },
  {
    path: '/search/:search',
    name: 'Search',
    component: SearchedQuotes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
