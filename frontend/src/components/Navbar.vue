<template>
     <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="DPR"
          class="shrink mr-2"
          contain
          src="@/assets/pattern.png"
          transition="scale-transition"
          width="40"
          title="Home"
        />
        </router-link>
        
        <span class="shrink mt-auto hidden-sm-and-down small"> 
          by: <a href="https://github.com/SuichiM" class="text-white"> SuichiM </a> 
        </span>
      </div>

      <v-spacer></v-spacer>
      <v-menu>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              color="primary"
              dark
              v-on="{ ...tooltip, ...menu }"
            >Creational</v-btn>
          </template>
          <span>Creationals Patterns</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-app-bar>
</template>
<script>
export default {
    data(){
        return {
               items:[{title: 'title1'}, {title:'title2'}]
        }
    }
}
</script>