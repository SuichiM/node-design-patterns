<template>
  <my-container :feedback="feedback" :items="items" @changeOption="handleChangeCreator">
    
    <v-banner two-line slot="content" v-if="result">
      
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon :icon="result.icon" color="white">{{result.icon}}</v-icon>
      </v-avatar>
      {{result.title}}
      <template v-slot:actions >
        <v-btn text color="deep-purple accent-4" @click="handleDialogButtonClick">{{result.button.title}}</v-btn>
      </template>
    </v-banner>

  </my-container>
</template>

<script>
import Container from "./Container";

export default {
  components: {
    "my-container": Container
  },
  data() {
    return {
      feedback: {},
      items: undefined,
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
        let { data } = await this.$api.get(`/factory-method-specific/${item}`);
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
    let { data } = await this.$api.get(`/factory-method-specific`);
    this.items = data;
  }
};
</script>

<style>
</style>