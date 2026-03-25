import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Chapters' } },
  { path: '/aboutMe', name: 'About', component: About, meta: { title: 'About Me' } },
  { path: '/projects', name: 'Projects', component: Home, meta: { title: 'My Projects' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
