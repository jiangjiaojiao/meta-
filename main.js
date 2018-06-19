// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import iView from 'iview'
import echarts from 'echarts'
import 'iview/dist/styles/iview.css';
import Routers from './router/router'
import Util from './libs/util';
import store from './vuex/store'
import VueRouter from 'vue-router';
//import './common/font/iconfont.js'
import '../static/font/iconfont.js'

Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$echarts = echarts
Vue.prototype.baseapath='http://172.17.5.112:82/';
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
import $ from 'jquery'
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,// 全局注入router，里面的所有的组件都能用到和路由相关的信息
  store,
  components: { App },
  template: '<App/>'
})
