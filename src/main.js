// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill" //解决ie11 不兼容es6
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
    let isgin = sessionStorage.getItem('isgin');
    if(isgin==='b53a5e1b388af2a2e13843e1aa9dc695'){
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
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate(){
    Vue.prototype.bus = this;
  }
});
