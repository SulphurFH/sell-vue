import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: (resolve) => require(['@/components/goods/goods'], resolve)
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: (resolve) => require(['@/components/ratings/ratings'], resolve)
    },
    {
      path: '/seller',
      name: 'Seller',
      component: (resolve) => require(['@/components/seller/seller'], resolve)
    },
    {
      path: '*',
      redirect: '/goods'
    }
  ]
});
