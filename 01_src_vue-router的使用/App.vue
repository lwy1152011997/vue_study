<template>
  <div id="app">
    <div>
      <router-link to="/home">去Home</router-link>
      <router-link to="/about" tag="button" replace>去About</router-link>
      <router-link :to="'/user/'+ userId" tag="button">去User</router-link>
      <!--<router-link :to="{path: '/profile', query: {name: 'lwy', age: '27'}}">Profile</router-link>-->
      <button @click="profileClick">Profile</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      userId: 'qqq'
    }
  },
  components: {

  },
  mounted() {
    console.log(this)
  },
  methods: {
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'T-mac',
          age: 20
        }
      })
    }
  }
}

</script>

<style>

</style>
