import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from "../views/Error404";
import Ema from "../views/RIP_EMA";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ema',
    name: 'EMA',
    component: Ema
  },
  {
    path: '/404',
    name: 'Error 404',
    component: Error404
  },
  {
    path: "*",
    redirect: "/404"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
