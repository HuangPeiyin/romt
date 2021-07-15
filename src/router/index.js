import Vue from 'vue'
import VueRouter from 'vue-router'

const original = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' },
  { path: '/Login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/Register', name: 'Register', component: () => import('../views/Register.vue') },
  { path: '/App', component: () => import('../App.vue'),
    children: [
      { path: '/', redirect: { path: '/Home' } },
      { path: '/Home', name: 'Home', component: () => import('../views/Home.vue') },
      { path: '/About/', name: 'About', component: () => import('../views/About.vue') },
      { path: '/Search', name: 'Search', component: () => import('../views/Search.vue') },
      { path: '/Steward', name: 'Steward', component: () => import('../views/Steward.vue') },
      { path: '/Drug', name: 'Drug', component: () => import('../components/Drug.vue') },
      { path: '/Sick', name: 'Sick', component: () => import('../components/Sick.vue') },
      { path: '/Book', name: 'Book', component: () => import('../components/Book.vue') },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
