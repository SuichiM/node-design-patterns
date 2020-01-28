<template>
  <v-app-bar app color="primary" dark >
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
        by:
        <a href="https://github.com/SuichiM" class="text-white">SuichiM</a>
      </span>
    </div>

    <v-divider vertical inset class="mx-4"></v-divider>

    <v-menu  left v-for="(item) in items" :key="item.id" :open-on-hover="true">
      
      <template v-slot:activator="{ on: menu }" >
        
        <v-tooltip bottom >

          <template v-slot:activator="{ on: tooltip }">

            <v-btn color="primary" dark v-on="{ ...tooltip, ...menu }">{{item.name}}</v-btn>
            
          </template>

          <span>{{item.name}}</span>

        </v-tooltip>

      </template>

      <v-list>
        <v-list-item v-for="(pattern) in item.patterns" :key="pattern.id" :to="pattern.route">
          <v-list-item-title >{{ pattern.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      loading: false
    };
  },
  async beforeMount() {
    this.loading = true;
    let { data } = await this.$api.get(`/catalog`);
    this.items = data;
    this.loading = false;
  }
};
</script>