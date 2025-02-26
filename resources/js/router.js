import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './Pages/Welcome.vue'
import ServiceView from './Pages/Services.vue'

const routes = [
  { path: '/', component: HomeView }, // Route utama (index)
  { path: '/service', component: ServiceView }, // Route layanan
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
