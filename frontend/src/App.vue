<template>
<div>
  <Navbar></Navbar>
  <div id="app" class="container-fluid">    
      <router-view></router-view>    
  </div>
</div>
</template>

<script>
import NavBar from './components/Navbar'
export default {
  name: 'app',
  components:{
    'Navbar' : NavBar
  }
}
</script>

<style>
#app {
/*   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
