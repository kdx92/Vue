<template>
  <div>
    <h2>piupiupiu~</h2>
      <router-link to="/index/news">news</router-link>
      <router-link to="/index/message">message</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>