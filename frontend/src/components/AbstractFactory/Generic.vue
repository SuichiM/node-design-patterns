<template>
  <my-container
    :feedback="feedback"
    :items="items"
    :itemsLabel="selectLabel"
    :loading="loading"
    @changeOption="handleChangeCreator"
  >
    <v-card v-if="result" slot="content" class="mx-auto" outlined elevation="24">
      <v-list-item two-line>
        <v-list-item-content>

          <v-list-item-title class="headline mb-1"> <u>Factory:</u> {{result.factory}} </v-list-item-title>

          <v-divider></v-divider>

          <v-list-item-subtitle>

            <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>

            <v-data-iterator v-else :items="result.products" hide-default-footer>
              <template v-slot:default="props">
                <v-row dense>
                  <v-col
                    v-for="(product, k) in props.items"
                    :key="k" cols="12" sm="6" md="4" lg="3"
                  >
                    <v-card small>
                      <v-card-title small>{{ product.name }}</v-card-title>
                   
                      <v-divider></v-divider>
                   
                      <v-card-subtitle><u>someActionResult:</u> {{product.someActionResult}}</v-card-subtitle>                      

                      <v-card-subtitle><u>otherActionResult:</u> {{product.otherActionResult}}</v-card-subtitle>                      
                   
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>

          </v-list-item-subtitle>

        </v-list-item-content>
      </v-list-item>
    </v-card>
  </my-container>
</template>

<script>
export default {
  name: "AbstractFactoryGeneric",
  data() {
    return {
      feedback: {},
      baseUrl:'/abstract-factory-generic',
      loading: false,
      items: undefined,
      selectLabel: "Available Factories",
      result: undefined
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
