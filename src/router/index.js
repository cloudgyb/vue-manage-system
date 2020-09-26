import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
      },
      {
        path: '/user/manage',
        name: 'UserManage',
        component: () => import('@/views/UserManage')
      },
      {
        path: '/user/statistic',
        name: 'UserStatistic',
        component: () => import('@/views/UserStatistic')
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/VideoManage')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Setting')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
