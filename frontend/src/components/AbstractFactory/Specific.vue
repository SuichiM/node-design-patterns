<template>
  <my-container
    :feedback="feedback"
    :items="items"
    :itemsLabel="selectLabel"
    :loading="loading"
    @changeOption="handleChangeCreator"
  >
    <v-card v-if="result" slot="content" class="mx-auto" outlined elevation="24">
      
        <v-card-title small> <u>Factory:</u> {{result.factory}} </v-card-title>
       
          <v-divider></v-divider>

            <v-skeleton-loader v-if="loading" class="mx-2 d-inline-block" max-width="300" type="card"></v-skeleton-loader>

            <v-card v-else v-for="(control, idx) in result.controls" :key="idx" small class="mx-2 d-inline-block" outlined >
              <v-card-title small>{{ idx }}</v-card-title>

              <v-divider></v-divider>
              <input color="primary" :type="control.type" :value="control.text" :placeholder="control.placeholder" :style="control.style"/>
            </v-card>

    </v-card>
  </my-container>
</template>

<script>
export default {
  name: "AbstractFactorySpecific",
  data() {
    return {
      baseUrl: "/abstract-factory-specific",
      feedback: {},
      items: undefined,
      selectLabel: "Available Factories",
      result: null,
      loading: false
    };
  },
  methods: {
    async handleChangeCreator(item) {
      this.feedback = {
        status: "info",
        text: "Querying Abstract Factory"
      };
      this.loading = true;
      this.result = null;
      try {
        let { data } = await this.$api.get(`${this.baseUrl}/${item}`);
        this.result = data;
        this.loading = false;
        this.feedback = {
          status: "success",
          text: "Query Sucessfully!"
        };
      } catch (error) {
        this.feedback = {
          status: "error",
          text: "Ooops! something went wrong!"
        };

        this.loading = false;
      }
    }
  },
  async mounted() {
    let { data } = await this.$api.get(this.baseUrl);
    this.items = data;
  }
};
</script>

<style>
</style>