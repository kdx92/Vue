<template>
  <div>
    <h2 class="title"> {{ message }} </h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
     return {
      message: 'Vue'
    }
   },
   methods: {
    btnClick() {

    }
   }
  }
</script>

<style scoped>
  .title {
    font-style: italic;
  }
</style>