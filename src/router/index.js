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
        meta: {
          breadcrumb: [
            { path: '/', name: '首页' },
            { name: '课程管理' }
          ]
        },
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
        meta: {
          breadcrumb: [
            { path: '/', name: '首页' },
            { name: '标签管理' }
          ]
        },
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
        meta: {
          breadcrumb: [
            { path: '/', name: '首页' },
            { name: '分类管理' }
          ]
        },
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
        meta: {
          breadcrumb: [
            { path: '/', name: '首页' },
            { name: '轮播管理' }
          ]
        },
        component: () => import('@/views/carousel')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
