<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <hello-vue :counter="counter"/>
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
      counter: 0
    }
  }
}
</script>

<style>

</style>
