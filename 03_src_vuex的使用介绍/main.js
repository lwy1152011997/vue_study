import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false // 在启动项目的时候是否显示出具体构建信息有哪些
Vue.prototype.$store = store // 这样在所有的组件都可以通过this.$store 获取到 store对象

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
