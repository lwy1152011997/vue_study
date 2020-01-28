import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) // 对vue-router进行注册使用(而且只要是vue的插件必须要经过Vue.use才能使用)

const routes = [

]
const router = new Router({
  mode: 'history',
  routes
})

export default router