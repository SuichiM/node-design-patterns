<template>
  <my-container :feedback="feedback" :items="items" @changeOption="handleChangeCreator">
      <h2 slot="content"> example</h2>
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
      items: undefined
    };
  },
  methods:{
      handleChangeCreator(){

      }
  }
};
</script>

<style>
</style>