import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


import basicRoute from './routes/Basic/index'
import dataRoute from './routes/Data/index'
import formRoute from './routes/Form/index'
import navigationRoute from './routes/Navigation/index'
import noticeRoute from './routes/Notice/index'
import othersRoute from './routes/Others/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/JavascriptAxios',
    name: 'JavascriptAxios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JavascriptAxios.vue')
  },
  {
    path: '/elementuidemo',
    name: 'elementuidemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ElementuiDemo.vue')
  },
  ...basicRoute,
  ...dataRoute,
  ...formRoute,
  ...navigationRoute,
  ...noticeRoute,
  ...othersRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
