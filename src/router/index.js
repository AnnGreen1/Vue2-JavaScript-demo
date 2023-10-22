import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import commonroute from '@/router/routes/commonroute'
import dev from '@/router/routes/dev'
import layout from '@/router/routes/layout'
import components from '@/router/routes/components'

Vue.use(VueRouter)

/**
 * @description: 解决重复点击导航时，控制台出现报错
 */
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:talkId',
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
  /**
   * @description:动态路由怎么用？假设默认只有这一个路由
   */
  {
    path: "/DynamicRoutes",
    name: "DynamicRoutes",
    component: () => import('@/views/DynamicRoutes/IndexView.vue')
  },
  /**
   * @description:mpa 多页应用
   */
  {
    path: "/MpaOther",
    name: "MpaOther",
    component: () => import('@/views/MpaOther/IndexView.vue')
  },
  ...commonroute,
  ...dev,
  ...layout,
  ...components
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
