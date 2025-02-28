import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './Pages/Welcome.vue'
import ServiceView from './Pages/Service/Services.vue'
import Error404 from './Pages/404.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/service', component: ServiceView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: Error404 } 
]

const router = createRouter({
  history: createWebHistory(), // Menggunakan Web History agar bekerja di browser
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
