// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Index.vue'),
      children: [
        {
          path: '',
          alias: '/home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/iso-27001',
          component: () => import('@/views/iso-27001/Index.vue'),
        },
        {
          path: '/pci-dss',
          component: () => import('@/views/pci-dss/Index.vue'),
        },
        {
          path: '/pentest',
          component: () => import('@/views/pentest/Index.vue'),
        },
        {
          path: '/contact-us',
          component: () => import('@/views/contact-us/Index.vue'),
        },
        {
          path: 'partners',
          component: () => import('@/views/partners/Index.vue'),
        },
        {
          path: '*',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
