<template>
  <my-container :feedback="feedback" :items="items" @changeOption="handleChangeCreator">

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
      feedback: null,
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