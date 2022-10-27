import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ID from '../views/ID.vue'
import Photoshop from '../views/Photoshop.vue'
import Model from '../views/3D.vue'
import ui from '../views/UI.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/id',
    name: 'id',
    component: ID
  },
  {
    path: '/ui',
    name: 'ui',
    component: ui
  },
  {
    path: '/photoshop',
    name: 'Photoshop',
    component: Photoshop
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/model',
    name: 'Model',
    component: Model
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
