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
    name: "index",
    // created() {
    //   console.log('created');
    //   document.title = 'Index'
    // }
    data() {
      return {
        path: '/index/news'
      }
    },
    activated() {
      this.$router.push(this.path);
      // console.log(this.path);
    },
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>