<template>
  <v-container>
    <v-snackbar
      v-model="show"
      :color="feedback.status"
      :right="true"
      :bottom="true"
      :timeout="1500"
      @input="handleShow"
    >
      {{ feedback.text }}
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
    feedback: {default: ()=>{}},
    items:{},
    loading:{},
  },
  watch:{
    feedback(){
      window.console.log(this.feedback);
      if(Object.keys(this.feedback).length > 0 )
        this.show = true
    } 
  },
  data(){
    return {
      show:false
    }
  },
  methods:{
      handleChangeSelect(el){
          this.$emit('changeOption', el);
      }, 
      handleShow(status){
        window.console.log('cambio por timeout', status);
        
        this.show = status;
      }
  }
};
</script>

<style>
</style>