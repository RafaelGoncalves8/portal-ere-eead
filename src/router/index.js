import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/sobre.vue')
  },
  {
    path: '/calendario',
    name: 'Calendário',
    component: () => import('../views/calendario.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/contato.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router
