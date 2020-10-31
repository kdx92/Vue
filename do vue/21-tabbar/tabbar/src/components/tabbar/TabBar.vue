<template>
  <div id="tab-bar">
    
    <slot></slot>
  </div>
</template>

<script>
  export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
  display: flex;
  background-color: rgb(244, 244, 244);
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, .1);
  /* x偏移量 y偏移量 模糊程度 */
}

</style>
