import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    props: { default: true, menu:true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: { default: true, menu:false }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
