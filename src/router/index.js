import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/Table.vue')
    },
    {
      path: '/cards', 
      name: 'cards', 
      component: () => import('../views/Card.vue') 
    }
  ]
})

export default router
