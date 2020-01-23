<template>
  <v-container>
    <v-snackbar
      v-model="_feedback.show"
      :color="_feedback.type"
      :right="true"
      :bottom="true"
      :timeout="1500"
    >
      {{ _feedback.text }}
    </v-snackbar>

    <h6>Example</h6>

    <v-select
      item-value="id"
      item-text="description"
      :items="items"
      label="Available Creators"
      @change="handleChangeSelect"
    ></v-select>

    <v-divider />

    <v-skeleton-loader
      ref="skeleton"
      v-if="loading"
      :boilerplate="false"
      type="list-item-three-line"
      class="mx-auto"
    ></v-skeleton-loader>

    <slot name="content"></slot>
  </v-container>
</template>

<script>
export default {
  props: {
    feedback: {},
    items:{},
    loading:{}
  },
  computed:{
    _feedback(){
        return {...this.feedback, show: true}
    }  
  },
  methods:{
      handleChangeSelect(el){
          this.$emit('changeOption', el);
      }
  }
};
</script>

<style>
</style>