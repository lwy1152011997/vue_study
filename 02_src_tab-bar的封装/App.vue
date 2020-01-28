<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from './components/tab-bar/main-tab-bar'

export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data() {
    return {

    }
  }
}

</script>

<style>
@import "assets/css/reset.css"; /* 重置默认样式 */

#app {
  position: relative;
}
</style>
