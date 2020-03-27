import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentWrap',
      component: require('@/views/ContentWrap').default
    },
    {
      path: '/history',
      name: 'HistoryWrap',
      component: require('@/views/HistoryWrap.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
