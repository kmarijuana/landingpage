import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Store from '../views/Store.vue'
import Warehouse from '../views/Warehouse.vue'
import Changelog from '../views/Changelog.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    props: { default: true, menu:true }
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    props: { default: true, menu:true }
  },
  // {
  //   path: '/warehouse',
  //   name: 'warehouse',
  //   component: Warehouse,
  //   props: { default: true, menu:true }
  // },
  {
    path: '/category',
    name: 'category',
    component: Category,
    props: { default: true, menu:true }
  },
  {
    path: '/store',
    name: 'store',
    component: Store,
    props: { default: true, menu:true }
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: Changelog,
    props: { default: true, menu:false }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: { default: true, menu:false }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
