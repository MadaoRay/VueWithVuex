import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../../pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history', // html的history模式
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
