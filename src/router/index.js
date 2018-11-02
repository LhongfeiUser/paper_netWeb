import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/index'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: Layout,
      children: [{path: 'home', component: () => import('@/pages/home/index')}]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/login/index'),
    },
    {
      path: '/vipManage',
      redirect: '/vipManage',
      component: Layout,
      children:[
        {
          path:'',
          component:()=>import('@/pages/vipManage/index')
        },
        {
          path:'/vip',
          component:()=>import('@/pages/vipManage/index')
        }
      ]
    },
    {
      path: '/process',
      redirect: '/process',
      component: Layout,
      children:[
        {
          path:'',
          component:()=>import('@/pages/checkProcessList/index')
        },
        {
          path:'detail',
          component:()=>import('@/pages/checkProcessDetail/index')
        }
      ]
    },
    {
      path: '/skill',
      redirect: '/skill',
      component: Layout,
      children:[
        {
          path:'',
          component:()=>import('@/pages/checkSkillList/index')
        },
        {
          path:'detail',
          component:()=>import('@/pages/checkSkillDetail/index')
        }
      ]
    },
    {
      path: '/faq',
      redirect: '/faq',
      component: Layout,
      children:[
        {
          path:'',
          component:()=>import('@/pages/faqList/index')
        },
        {
          path:'detail',
          component:()=>import('@/pages/faqDetail/index')
        }
      ]
    },
    {
      path: '/academic',
      redirect: '/academic',
      component: Layout,
      children:[
        {
          path:'',
          component:()=>import('@/pages/academicList/index')
        },
        {
          path:'detail',
          component:()=>import('@/pages/academicDetail/index')
        }
      ]
    },
  /*
    {
      path: 'home/faqList',
      name: 'faqList',
      component: ()=>import('@/pages/faqList/index'),
    },
    {
      path: 'home/academicList',
      name: 'academicList',
      component: ()=>import('@/pages/academicList/index'),
    },*/
    {path: '*', redirect: '/', hidden: true},
  ]
})
