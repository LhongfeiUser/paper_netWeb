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
      redirect: '/vipManage/info',
      component: ()=>import('@/pages/vipManage/index'),
      children:[
        {
          path:'info',
          component:()=>import('@/pages/vipInfo/index')
        },
        {
          path:'upload',
          component:()=>import('@/pages/upload_paper/index')
        },
        {
          path:'order',
          component:()=>import('@/pages/orderList/index')
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
          path:'detail/:id',
          name:'detail',
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
          name:'detail',
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
