<template>
  <v-container>
    <h1>
      <a
        href="https://github.com/SuichiM/node-design-patterns"
      >Welcome to the Design Pattern Repository</a>
    </h1>
    <p>
      In this repository there are implemented some of the most important GoF design patterns.
      following the greaaaat book, site and examples of
      <a
        href="https://refactoring.guru/"
      >Alexander Shvets</a> and using as initial repository a forked copy of:
      <a
        href="https://github.com/adoi/node-design-patterns"
      >Adonis Murati.</a>
    </p>

    <blockquote class="blockquote text-center">
      <p class="mb-0">A design pattern is a reusable solution to a recurring problem.</p>
      <footer class="blockquote-footer">
        <cite>
          <a
            href="https://github.com/adoi/node-design-patterns#design-patterns-with-nodejs"
          >Adonis Murati.</a>
        </cite>
      </footer>
    </blockquote>

    <p>
      When talking about design patterns we usually refer to the 'classical' ones which include Creational, Structural and Behavioral design patterns.
      The following have been implemented in this repo:
    </p>
    <div class="container">
      <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
            
      <v-data-iterator v-else :items="items" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <v-col v-for="item in props.items" :key="item.id" cols="12" sm="6" md="4" lg="3">
              <v-card>
                <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

                <v-divider></v-divider>

                <v-list dense v-for="pattern in item.patterns" :key="pattern.id">
                  <v-list-item :to="pattern.route">
                    <v-list-item-content>{{pattern.name}}</v-list-item-content>
                    <v-icon color="primary" left>mdi-chevron-right</v-icon>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  props: {},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
