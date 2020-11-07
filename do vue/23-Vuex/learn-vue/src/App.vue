<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <!-- <h2>{{ more }}</h2> -->
    <h2>{{ $store.getters.more }}</h2>
    <!-- <h2>{{ $store.getters.more.length }}</h2> -->
    <h2>{{ $store.getters.moreLength }}</h2>
    <h2>{{ $store.getters.moreAge(12) }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <!-- <hello-vue :counter="counter"/> -->
    <hello-vue/>
  </div>
</template>

<script>
import HelloVue from './components/HelloVue'

export default {
  name: 'App',
  components: {
    HelloVue
  },
  data() {
    return {
      message: 'biubiubiu',
      // counter: 0
    }
  },
  // computed: {
  //   more() {
  //     // return this.$store.state.students.filter(s => {
  //     // return s.age >=12
  //     // })
  //     return this.$store.state.students.filter(s => s.age >= 12)
  
  //   // 通过filter拿到students中的元素，然后在()中执行函数，此时的函数返回的是一个boolean，
  //   // 当为true的时候，将s加到新的数组中当做返回值
  //   // 当为false时，忽略掉

  // }
  // },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
