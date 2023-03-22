import Vue from 'vue'
import VueRouter from 'vue-router'
import TablesView from '../views/TablesView.vue'
import PastSections from '../views/PastSections.vue'
import PartiesCalendar from '../views/PartiesCalendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tables-view',
    component: TablesView,
  },
  {
    path: '/past-sections',
    names: 'past-sections',
    component: PastSections,
  },
  {
    path: '/parties-calendar',
    names: 'parties-calendar',
    component: PartiesCalendar,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
