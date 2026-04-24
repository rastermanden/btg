import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Events from '../views/Events.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/rules', name: 'rules', component: Rules },
  { path: '/events', name: 'events', component: Events },
  { path: '/news', name: 'news', component: News },
  { path: '/contact', name: 'contact', component: Contact }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
