<template>
  <div>
    <h2>用户界面</h2>
    <h2>{{ userId }}</h2>
    <!-- <h2>{{ $route.params.userId }}</h2> -->
  </div>
  
</template>

<script>
  export default {
    name: "user",
    computed: {
      userId() {
        return this.$route.params.userId
        //哪个路由处于活跃状态，就是指哪个
      }
    },
    // created() {
    //   console.log('created');
    //   document.title = 'User'
    // }
  }
</script>

<style scoped>

</style>