<template>
  <v-container>
    <v-snackbar v-model="showSnack" color="info" :absolute="true" :right="true" :timeout="1500">
      {{ text }}
      <v-btn text @click="showSnack = false">Close</v-btn>
    </v-snackbar>

    <h6>Example</h6>

    <v-select
      item-value="id"
      item-text="description"
      :items="items"
      label="Available Creators"
      @change="handleChangeCreator"
    ></v-select>

    <v-divider />

    <v-card class="mx-auto" outlined elevation="24" :loading="loading" >
      <v-list-item three-line v-if="result">
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{result.concreteCreator}}</v-list-item-title>
          <v-list-item-subtitle class="text--primary">Product Generated: {{result.productGenerated}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{result.description}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FactoryMethodGeneric",

  data() {
    return {
      showSnack: false,
      text: "Querying Factory Method",
      loading: false,
      items: [
        { id: "con1", description: "Concrete Creator 1" },
        { id: "con2", description: "Concrete Creator 2" }
      ],
      result: null
    };
  },
  methods: {
    handleChangeCreator(item) {
      this.showSnack = this.loading = true;

      window.console.log("hola", item);
      this.$api.get(`/factory-method-generic?type=${item}`).then(result => {
        this.result = result.data;
        this.loading = false;
      });
    }
  }
};
</script>
