import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy Tickets',
    component: () => import('./views/BuyTix.vue')
  },
  {
    path: '/payment/summary',
    name: 'Payment Summary',
    component: () => import('./views/PaymentSummary.vue')
  },
  {
    path: '/payment/creditcard',
    name: 'Payment Credit Card',
    component: () => import('./views/payments/CreditCard.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
  },

  ]
})