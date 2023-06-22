import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/catalog/all',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/catalog/:id',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/item/:id',
      name: 'item',
      component: () => import('../views/ItemView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
  ]
})

export default router
