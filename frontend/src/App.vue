<template>
  <v-app>
    <NavBar></NavBar>
    <v-content class="container">
      <router-view/>
    </v-content>
</v-app>
</template>

<script>
import NavBar from './components/Navbar';

export default {
  name: 'App',
  components:{
    'NavBar': NavBar
  },
  data: () => ({
    //
  }),
};
</script>
