<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>

</template>
<script>
import Header from '././components/header'
export default {
  components:{
    Header
  }
}
</script>
<style scoped>
#app{
  background: #0278AE;
}
</style>