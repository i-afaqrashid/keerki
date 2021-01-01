import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Successful from '../views/Successful.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Dashboard from '../views/Dashboard.vue'
import Reset from '../views/Reset.vue'
import DashboardOverview from '../components/dashboardOverview.vue';
import OrderHistory from '../components/orderHistory.vue';
import OrderType from '../components/orderType.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: SignUp,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/success',
    name: 'Successful',
    component: Successful
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path:"/dashboard",
    component:Dashboard,
    children:[
      {
        path:'order-history',
        children:[
          {
            path:'',
            component:OrderHistory
          },
          {
            path:'orders',
            component:OrderType
          }
        ]
      },
      { path: '',
       component: DashboardOverview 
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
