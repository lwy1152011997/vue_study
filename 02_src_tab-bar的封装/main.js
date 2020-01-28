import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false // 在启动项目的时候是否显示出具体构建信息有哪些

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
