import { createRouter, createWebHistory } from 'vue-router'
import MoneyRecord from '../views/MoneyRecord.vue'
import MoneyStatistics from '../views/MoneyStatistics.vue'
import MoneyCharts from '../views/MoneyCharts.vue'

const routes = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/record',
    name: 'record',
    component: MoneyRecord
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: MoneyStatistics
  },
  {
    path: '/charts',
    name: 'charts',
    component: MoneyCharts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
