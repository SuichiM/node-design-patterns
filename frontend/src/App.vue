<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="DPR"
          class="shrink mr-2"
          contain
          src="@/assets/pattern.png"
          transition="scale-transition"
          width="40"
        />

        <span class="shrink mt-1 hidden-sm-and-down h2"> 
          <a href="https://github.com/SuichiM" class="text-white"> SuichiM </a> 
        </span>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content class="container">
      <router-view/>
    </v-content>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
