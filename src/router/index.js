import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsComponent from '../components/product/products-component.vue'
import GoToOrder from '../views/GoToOrder.vue'
import SignUp from '../components/register/register-component.vue'
import Login from '../components/login/login-component.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ProductsComponent
  },
  {
    path: '/go-to-order',
    name: 'go-to-order',
    component: GoToOrder
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
