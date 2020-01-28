<template>
  <div>
    <div>
      <h2>我是User</h2>
      <p>我的用户叫{{userId}}</p>
      <router-link to="/user/child">userChild</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>