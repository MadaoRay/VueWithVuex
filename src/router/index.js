import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import Statistics from '../components/statistics'
import Forecast from '../components/forecast'
import Analyze from '../components/analyze'
import Advertise from '../components/advertise'

Vue.use(Router)

export default new Router({
  mode: 'history', // html的history模式
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/statistics',
      children: [
        {
          path:'statistics',
          component: Statistics
        },
        {
          path:'forecast',
          component: Forecast
        },
        {
          path:'analyze',
          component: Analyze
        },
        {
          path:'advertise',
          component: Advertise
        }
      ]
    }
  ]
})
