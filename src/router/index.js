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
      children:[
        {
          path:'/detail/statistics',
          component: Statistics
        },
        {
          path:'/detail/forecast',
          component: Forecast
        },
        {
          path:'/detail/analyze',
          component: Analyze
        },
        {
          path:'/detail/advertise',
          component: Advertise
        },
      ]
    }
  ]
})
