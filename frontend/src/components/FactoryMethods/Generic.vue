<template>
  <my-container :feedback="feedback" 
                :items="items"
                :itemsLabel="selectLabel"
                :loading="loading"
                @changeOption="handleChangeCreator">

    <v-card v-if="result" slot="content" class="mx-auto" outlined elevation="24">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <u>Creator:</u>
            {{result.concreteCreator}}
          </v-list-item-title>
          <v-list-item-subtitle class="text--primary">
            <u>Product Generated:</u>
            {{result.productGenerated}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <u>Description:</u>
            {{result.description}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </my-container>
</template>

<script>
export default {
  name: "FactoryMethodGeneric",
  
  data() {
    return {
      feedback: {},
      loading: false,
      items: undefined,
      selectLabel: 'Available Creators',
      result: undefined
    };
  },
  methods: {
    async handleChangeCreator(item) {
      this.feedback = {
        status: "info",
        text: "Querying Factory Method"
      };
      this.loading = true;
      this.result = null;
      try {
        let { data } = await this.$api.get(`/factory-method-generic/${item}`);
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
  async mounted(){
    let { data } = await this.$api.get(`/factory-method-generic`);
    this.items = data;
  }
};
</script>
