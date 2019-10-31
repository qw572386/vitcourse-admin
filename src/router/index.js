import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layouts/default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/lessons',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'lessons',
        component: () => import('@/views/lessons')
      }
    ]
  },
  {
    path: '/tags',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'tags',
        component: () => import('@/views/tags')
      }
    ]
  },
  {
    path: '/type',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'type',
        component: () => import('@/views/type')
      }
    ]
  },
  {
    path: '/carousel',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'carousel',
        component: () => import('@/views/carousel')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
