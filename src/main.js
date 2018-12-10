// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'jquery'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

router.beforeEach((to, from, next)=>{
  if(to.meta.requireAuth){
    let token = sessionStorage.getItem('token');
    if(token){
     next();
   }else {
     next({
       path: '/login',
       query: {redirect: to.fullPath}
     })
   }
  }
  else {
    next();
  }
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
