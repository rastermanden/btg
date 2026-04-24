import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Players from '../views/Players.vue'
import History from '../views/History.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/rules', name: 'rules', component: Rules },
  { path: '/players', name: 'players', component: Players },
  { path: '/history', name: 'history', component: History },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})
