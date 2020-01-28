import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/home")
const Profile = () => import("../views/profile/profile")
const Carts = () => import("../views/carts/carts")
const Category = () => import("../views/category/category")

Vue.use(Router) // 对vue-router进行注册使用(而且只要是vue的插件必须要经过Vue.use才能使用)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/carts',
    component: Carts
  },
  {
    path: '/category',
    component: Category
  },

]
const router = new Router({
  mode: 'history',
  routes
})

export default router