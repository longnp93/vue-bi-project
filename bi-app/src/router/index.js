import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/UML',
    name: 'UML',
    component: () => import('../components/UML')
  },
  {
    path: '/ERDiagram',
    name: 'ERDiagram',
    component: () => import('../components/ERDiagram')
  },
  {
    path: '/FlightAnalytics',
    name: 'FlightAnalytics',
    component: () => import('../components/FlightAnalytics')
  },
  {
    path: '/DataFlow',
    name: 'DataFlow',
    component: () => import('../components/DataFlow')
  }
  ,
  {
    path: '/ETLMonitoring',
    name: 'ETLMonitoring',
    component: () => import('../components/ETLMonitoring')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router