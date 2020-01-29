<template>
  <my-container :feedback="feedback" 
                :items="items" 
                :itemsLabel="selectLabel"
                @changeOption="handleChangeCreator">
    
    <v-banner two-line slot="content" v-if="result">
      
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon :icon="result.icon" color="white">{{result.icon}}</v-icon>
      </v-avatar>
      {{result.title}}
      <template v-slot:actions >
        <v-btn text color="deep-purple accent-4" @click="handleDialogButtonClick">
          <v-icon left dark>{{result.button.icon}}</v-icon>{{result.button.title}}
        </v-btn>
      </template>
    </v-banner>

  </my-container>
</template>

<script>
export default {
  data() {
    return {
      feedback: {},
      items: undefined,
      selectLabel: 'Available Creators',
      baseUrl: '/factory-method-specific',
      result: null
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
        let { data } = await this.$api.get(`${this.baseUrl}/${item}`);
        this.result = data.dialog;
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
    },
    handleDialogButtonClick(){
      window.alert(`${this.result.button.onClick}`);
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