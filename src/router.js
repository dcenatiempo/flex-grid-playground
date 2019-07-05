import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Flex from '@/views/Flex.vue' // eslint-disable-line
import Grid from '@/views/Grid.vue' // eslint-disable-line

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import(/* webpackChunkName: "flex" */ '@/views/Flex.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "grid" */ '@/views/Grid.vue')
    }
  ]
})
