import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/home/index'),
    },
    {
      path: '/getreport',
      name: 'getreport',
      component: ()=>import('@/pages/getreport/index'),
    },
    {
      path: '/ptype/:id',
      name: 'ptype',
      component: ()=>import('@/pages/ptype/index'),
    },
    { path: '*', redirect: '/', hidden: true },
  ]
})
