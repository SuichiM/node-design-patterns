<template>
  <div class>
    <h1>
      <a
        href="https://github.com/SuichiM/node-design-patterns"
      >Welcome to the Design Pattern Repository</a>
    </h1>
    <p>
      In this repository there are implemented some of the most important GoF design patterns.
      following the greaaaat book, site and examples of
      <a href="https://refactoring.guru/">Alexander Shvets</a> and using as initial repository a forked copy of:
      <a href="https://github.com/adoi/node-design-patterns">Adonis Murati.</a>
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
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Creational</th>
            <th scope="col">Structural</th>
            <th scope="col">Behavioral</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <v-btn  text to="/factory-method">
                Factory Method<v-icon color="primary">mdi-chevron-right</v-icon>
              </v-btn>

            </td>
            <td>Proxy</td>
            <td>Observer</td>
          </tr>
          <tr>
            <td>Factory</td>
            <td>Adapter</td>
            <td>Strategy</td>
          </tr>
          <tr>
            <td>Singleton</td>
            <td>Decorator</td>
            <td>Iterator</td>
          </tr>
          <tr>
            <td>Prototype</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {}
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
