<template>
  <div id="app">
    <!-- <router-link to="/index">首页</router-link>
    <router-link to="/about">关于</router-link> -->

    <!-- <button @click="indexClick">index</button>
    <button @click="aboutClick">about</button> -->
    <router-link to="/index">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link to="/user">用户</router-link> -->
    <!-- <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path: '/profile',query: {name: 'why', age: 18, height: 1.8}}">profile</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">profile</button>
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
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
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kdx',
          age: 18
        }
      })
    }
    
  }
}
</script>

<style>

</style>
