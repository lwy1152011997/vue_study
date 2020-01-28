<template>
  <div>
    <h2>我是Profile</h2>
    <p>大家好,大家好</p>
    <p>我叫{{this.$route.query.name}}</p>
    <p>我{{this.$route.query.age}}岁</p>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>