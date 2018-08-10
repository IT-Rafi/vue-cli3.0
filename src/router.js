import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      // meta:{
      //   title:'首页'
      // }
    },
    {
      path: '/home',
      component: Home,
      // meta:{
      //   title:'首页'
      // }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      // meta:{
      //   title:'about页'
      // }
    }
  ]
})
