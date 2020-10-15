<template>
  <div id="app">
    <!-- <router-link to="/index">首页</router-link>
    <router-link to="/about">关于</router-link> -->

    <!-- <button @click="indexClick">index</button>
    <button @click="aboutClick">about</button> -->
    <router-link to="/index">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link to="/user">用户</router-link> -->
    <router-link :to="'/user/'+userId">用户</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'kdx'
    }
  },
  methods: {
    indexClick() {
      // 通过代码的方式修改路由 vue-router
      // push=>pushState
      this.$router.replace('/index')
      // this.$router.push('/index');
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace('/about')
    }
    
  }
}
</script>

<style>

</style>
