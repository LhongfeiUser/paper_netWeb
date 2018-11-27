import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/App'
import Dashboard from '@/backstage/dashboard'

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
      redirect: '/vipManage/upload',
      component: ()=>import('@/pages/vipManage/index'),
      children:[
       /* {
          path:'info',
          component:()=>import('@/pages/vipInfo/index')
        },*/
        {
          path:'upload',
          component:()=>import('@/pages/upload_paper/index')
        },
       /* {
          path:'order',
          component:()=>import('@/pages/orderList/index')
        }*/
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
          path:'detail/:id',
          name:'fqaDetail',
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
          name:'academicDetail',
          component:()=>import('@/pages/academicDetail/index')
        }
      ]
    },
    /*代理商后台*/
    {
      path: '/backstage',
      name: 'user',
      redirect: '/login',
      component: Dashboard,
      children:[
        {
          path:'',
          component:()=>import('@/backstage/user'),
          meta: {requireAuth: true}
        },
        {
          path:'statistic',
          component:()=>import('@/backstage/statistic'),
          meta: {requireAuth: true}
        },
        {
          path:'statistic',
          component:()=>import('@/backstage/statistic'),
          meta: {requireAuth: true}
        },
        {
          path:'statement',
          component:()=>import('@/backstage/statement'),
          meta: {requireAuth: true}
        },
        {
          path:'userList',
          component:()=>import('@/backstage/userList'),
          meta: {requireAuth: true}
        },
        {
          path:'sharedSetting',
          component:()=>import('@/backstage/sharedSetting'),
          meta: {requireAuth: true}
        },
        {
          path:'withdrawDeposit',
          component:()=>import('@/backstage/withdrawDeposit'),
          meta: {requireAuth: true}
        },
        {
          path:'generalizeLink',
          component:()=>import('@/backstage/generalizeLink'),
          meta: {requireAuth: true}
        },
        {
          path:'orderDetail',
          component:()=>import('@/backstage/orderDetail'),
          meta: {requireAuth: true}
        },
        {
          path:'course',
          component:()=>import('@/backstage/course'),
          meta: {requireAuth: true}
        }
      ]
    },
    {path: '*', redirect: '/', hidden: true},
  ]
})
