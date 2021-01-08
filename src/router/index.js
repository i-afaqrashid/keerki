import Vue from 'vue'
import VueRouter from 'vue-router'
import Successful from '../views/Successful.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Dashboard from '../views/Dashboard.vue'
import Reset from '../views/Reset.vue'
import DashboardOverview from '../components/dashboardOverview.vue';
import OrderHistory from '../components/orderHistory.vue';
import OrderType from '../components/orderType.vue'
import Orders from '../components/orders.vue'
import Account from '../components/account.vue'
import Notification from '../components/notifications.vue'
import OrderTemplate from '../components/orderTemplate.vue'
import Form from '../views/Form.vue'
import FormBody from '../components/formBody.vue'
import FormPreview from '../components/formPreview.vue'
import Messages from '../components/messages.vue'
import OrderForm from '../components/orderForm.vue'
import FunctionalityUnavailable from '../components/functionalityUnavailable.vue'
import ContentUnavailable from '../components/contentUnavailable.vue'
import ServiceForm from '../components/serviceForm.vue'
import AdminLogin from '../components/admin/login.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import DashboardHome from '../components/admin/dashboardHome.vue'
import ShippingForm from '../components/shippingForm.vue'
import Inbox from '../components/inbox.vue'
import AdminAccount from '../components/admin/settings.vue'
import AdminNotifications from '../components/admin/notifications.vue'
import AdminClients from '../components/admin/clients.vue'
import ClientDetailed from '../components/admin/ClientDetailed.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/admin",
    name:"Admin",
    component:AdminLogin
  },
  {
    path:"/admin/dashboard",
    component:AdminDashboard,
    children:[
      {
        path: "",
        component: DashboardHome
      },
      {
        path:"account",
        component:AdminAccount
      },
      {
        path:"notifications",
        component:AdminNotifications
      },
      {
        path:"clients",
        component:AdminClients
      },
      {
        path:"client-detailed",
        component:ClientDetailed
      }
    ]
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
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
    path: "/shipping-form",
    component: Form,
    children: [
      {
        path: "",
        component: ShippingForm
      },
      {
        path: "preview",
        component: FormPreview
      }

    ]
  },

  {
    path: "/quote-form",
    component: Form,
    children: [
      {
        path: "",
        component: FormBody
      },
      {
        path: "preview",
        component: FormPreview
      }

    ]
  },
  {
    path: "/service-form",
    component: Form,
    children: [
      {
        path: "",
        component: ServiceForm
      },
      {
        path: "preview",
        component: FormPreview
      }

    ]
  }
  ,
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "content-unavailable",
        component: ContentUnavailable
      },
      {
        path: 'functionality-unavailable',
        component: FunctionalityUnavailable
      },
      {
        path: 'order-history',
        component: OrderType,
        children: [
          {
            path: '',
            component: OrderHistory
          },
          {
            path: 'quote-orders',
            component: Orders
          },
          {
            path: 'service-orders',
            component: Orders
          },
          {
            path: 'shipping-orders',
            component: Orders
          },
          {
            path: "order-template",
            component: OrderTemplate
          }
        ]
      },
      {
        path: "account",
        component: Account
      },
      {
        path: "messages",
        component: Messages
      },
      {
        path: "inbox",
        component: Inbox
      },
      {
        path: "notifications",
        component: Notification
      },
      {
        path: 'order-form',
        component: OrderForm,

      }
      ,

      {
        path: '',
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
