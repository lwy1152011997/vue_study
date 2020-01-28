import Vue from 'vue'
import Router from 'vue-router'
import About from "../components/About";
import Home from "../components/Home";
import UserChild from "../components/UserChild";
import Profile from "../components/Profile";

Vue.use(Router) // 对vue-router进行注册使用(而且只要是vue的插件必须要经过Vue.use才能使用)

// 路由懒加载的写法
const User = () => import('../components/User')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      // 路由中的数据可以通过meta配置项添加
      meta: {
        title: '首页'
      }
    },
    {path: '/about', component: About},
    {
      path: '/user/:userId',
      component: User,
      children: [
        {
          path: '/user/child',
          component: UserChild
        }
      ]
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

// 全局配置路由导航守卫
router.beforeEach((to, from, next) => {
  /*
  * 参数:
  * to 去哪个路由组件去
  * from 从哪个路由组件来
  * next:是一个函数,必须调用,才会执行下面的代码
  * */
  document.title = to.matched[0].meta.title
  next()
})

export default router