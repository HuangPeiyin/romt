<template>
  <div id="main">
    <router-view id="view"/>
  </div>
</template>
<script>
export default {
    name: 'Main'
}
</script>
<style scoped>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1px solid black;
  border-radius: 30px;
  box-shadow: 0 12px 12px 0 rgba(141, 121, 121, 0.8);
  text-align: center;
}
</style>