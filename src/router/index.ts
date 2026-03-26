import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import EDUKID from '../views/projects/EDUKID.vue'
import MHWLore from '../views/projects/MHWLore.vue'
import TracksIUT from '../views/projects/TracksIUT.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
  { path: '/aboutMe', name: 'About', component: About, meta: { title: 'About Me' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { title: 'My Projects' } },
  { path: '/edukid', name: 'EDUKID', component: EDUKID, meta: { title: 'EDUKID' } },
  { path: '/mhwlore', name: 'MHWLore', component: MHWLore, meta: { title: 'Monster Hunter World Lore' } },
  { path: '/tracksIUT', name: 'TracksIUT', component: TracksIUT, meta: { title: 'Tracks IUT' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
